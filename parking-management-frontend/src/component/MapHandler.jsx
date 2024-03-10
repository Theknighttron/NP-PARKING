import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from './Map';
import ReservationForm from '../ReservationForm';



function MapHandler() {
  const [location, setLocation] = useState('');
  const [showMap, setShowMap] = useState(false); // Assume you always want to show the map.
  const [nearbyParkingData, setNearbyParkingData] = useState([]);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [reservationData, setReservationData] = useState({
    fullName: '',
    phoneNumber: '',
    parkingSpaceId: null,
  });

  // Defaulting to Nairobi, Kenya
  const [coordinates, setCoordinates] = useState({ lat: -1.286389, lng: 36.817223 });
  const navigate = useNavigate();


  useEffect(() => {
    // Hide the reservation form on component mount
    setShowReservationForm(false);
  }, []);

  const handleReserveClick = (parkingSpaceId) => {
    // Open the reservation form when the user clicks "Reserve"
    setShowReservationForm(true);
    setReservationData({
      fullName: '',
      phoneNumber: '',
      parkingSpaceId, 
    });
  };

  const handleReservationSubmit = () => {
    // Handle the reservation submit logic here
    // You can make an API call to store the reservation data in the database

    // Simulate the API call (replace with your actual API endpoint)
    const reservationApiEndpoint = 'http://localhost:3001/reserveParkingSpace';

    fetch(reservationApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Reservation successful', data);
        // You can update the UI or show a success message to the user
        // Close the reservation form
        setShowReservationForm(false);
      })
      .catch((error) => {
        console.error('Error reserving parking space:', error);
        // Handle the error and show an error message to the user
      });
  };


  const handleLocationSubmit = async (e) => {
    // e.preventDefault();
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
  
    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
  
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
  
        // Center the map at Nairobi if Kenya is searched
        const isKenyaSearch = data[0].display_name.includes('Kenya');
        const newLat = isKenyaSearch ? -1.2921 : parseFloat(lat);
        const newLon = isKenyaSearch ? 36.8219 : parseFloat(lon);
  
        setCoordinates({ lat: newLat, lng: newLon });
  
        const customParkingData = [
             // Real locations in Kenya
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
            // Add more custom parking spaces as needed
        ];
  
        setNearbyParkingData(customParkingData);
  
        setShowMap(true);
        // navigate(`/?location=${encodeURIComponent(location)}`);
        // window.location.href = `/?location=${encodeURIComponent(location)}`;
      } else {
        alert('Location not found. Please try another search.');
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
      alert('Failed to fetch location data. Please try again.');
    }
  };


  const handleReservationCancel = () => {
    // Close the reservation form
    setShowReservationForm(false);
  };

  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
          <label>
            <input
              type="text"
              value={location}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 ps-10 p-2.5" placeholder="Enter Location..."
              required
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <div date-rangepicker class="flex items-center mt-5">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </div>
                  <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </div>
                  <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                </div>
          </div>


          <button 
            type="submit" 
            class="py-3 mb-2 mt-5 px-5 text-sm font-semibold text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-primary-800"
            onClick={handleLocationSubmit}
            >
              Get Location
          </button>
          
          {showMap && (
              <>
                <Map coordinates={coordinates} nearbyParkingData={nearbyParkingData} onReserveClick={handleReserveClick} />
              </>
          )}

        {/* Reservation Form */}
        {showReservationForm && (
          <ReservationForm
            onFormSubmit={handleReservationSubmit}
            onCancel={handleReservationCancel}
          />
        )}

        </div>

    </div>
  );
}

export default MapHandler;
