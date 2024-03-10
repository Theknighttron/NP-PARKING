const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const customParkingData = [
  { id: 1, name: 'Nairobi Parking', lat: -1.2921, lng: 36.8219 },
  { id: 2, name: 'Kisumu Parking', lat: -0.0917, lng: 34.7672 },
  { id: 3, name: 'Nakuru Parking', lat: -0.3031, lng: 36.0800 },
  { id: 4, name: 'Kikuyu Parking', lat: -1.2546, lng: 36.6830 },
  { id: 5, name: 'Kiambu Parking', lat: -1.1704, lng: 36.8353 },
  { id: 6, name: 'Kenol Parking', lat: -0.9028, lng: 37.1889 },
  { id: 7, name: 'Ruiru Parking', lat: -1.1455, lng: 36.9580 },
  { id: 8, name: 'Munyu Parking', lat: -0.9372, lng: 37.0455 },
  { id: 9, name: 'Gatura Parking', lat: -1.0202, lng: 36.7321 },
  { id: 10, name: 'Banana Parking', lat: -1.1489, lng: 36.8805 },
  { id: 11, name: 'Ruaka Parking', lat: -1.1956, lng: 36.7793 },
  { id: 12, name: 'Ndumberi Parking', lat: -1.1058, lng: 36.7158 },
  { id: 13, name: 'Kiserian Parking', lat: -1.3770, lng: 36.6690 },
  { id: 14, name: 'Lavington Parking', lat: -1.2680, lng: 36.7763 },
  { id: 15, name: 'Kariobangi Parking', lat: -1.2482, lng: 36.8856 },
  { id: 16, name: 'Buruburu Parking', lat: -1.2854, lng: 36.8762 },
  { id: 17, name: 'Pangani Parking', lat: -1.2631, lng: 36.8324 },
  { id: 18, name: 'Riruta Parking', lat: -1.2946, lng: 36.7480 },
  { id: 19, name: 'Loresho Parking', lat: -1.2578, lng: 36.7476 },
  { id: 20, name: 'Hunters Parking', lat: -1.2757, lng: 36.8188 },
  { id: 21, name: 'Soweto Parking', lat: -1.3093, lng: 36.8802 },
  { id: 22, name: 'Komarock Parking', lat: -1.2635, lng: 36.9263 },
  { id: 23, name: 'Parklands Parking', lat: -1.2615, lng: 36.8022 },
  { id: 24, name: 'Parking Space 1', lat: -1.0, lng: 37.0 },
  { id: 25, name: 'Parking Space 2', lat: -1.1, lng: 37.1 },
  { id: 26, name: 'Parking Space 3', lat: -1.2, lng: 37.2 },
  { id: 27, name: 'Parking Space 4', lat: -1.3, lng: 37.3 },
  { id: 28, name: 'Parking Space 5', lat: -1.4, lng: 37.4 },
];


// MySQL database configuration
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'demo',     
  password: 'demo1234', 
  database: 'parking_reservations', 
});


// Function to insert custom parking data into the parking_space table
const insertCustomParkingData = () => {
  const selectSql = 'SELECT id FROM parking_spaces WHERE id = ?';
  const insertSql = 'INSERT INTO parking_spaces (id, name, lat, lng) VALUES (?, ?, ?, ?)';

  customParkingData.forEach((parkingSpace) => {
    // Check if parking space with the same ID already exists
    db.query(selectSql, [parkingSpace.id], (selectErr, selectResult) => {
      if (selectErr) {
        console.error('Error checking for existing parking space:', selectErr);
      } else if (selectResult.length === 0) {
        // Parking space with the same ID does not exist, insert it
        db.query(insertSql, [parkingSpace.id, parkingSpace.name, parkingSpace.lat, parkingSpace.lng], (insertErr, insertResult) => {
          if (insertErr) {
            console.error('Error inserting parking space data:', insertErr);
          } else {
            console.log(`Parking space "${parkingSpace.name}" inserted successfully`);
          }
        });
      } else {
        console.log(`Parking space with ID ${parkingSpace.id} already exists`);
      }
    });
  });
};


// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
     // Insert custom parking data
     insertCustomParkingData();
  }
});


// Middleware to parse JSON data
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Route to handle reservation submissions
app.post('/reserveParkingSpace', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    carLicensePlate,
    creditCardNumber,
    parkingSpaceId,
  } = req.body;

  // Insert reservation data into the database
  const sql = 'INSERT INTO reservations (first_name, last_name, email, phone_number, car_license_plate, credit_card_number, parking_space_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(
    sql,
    [firstName, lastName, email, phoneNumber, carLicensePlate, creditCardNumber, parkingSpaceId],
    (err, result) => {
      if (err) {
        console.error('Error inserting reservation data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Reservation data inserted successfully');
        res.status(200).json({ message: 'Reservation successful' });
      }
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
