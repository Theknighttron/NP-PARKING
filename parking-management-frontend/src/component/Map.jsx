import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import ReservationForm from '../ReservationForm';

const Map = ({ coordinates, nearbyParkingData }) => {
  const [selectedParkingPlace, setSelectedParkingPlace] = useState(null);
  const [showReservationForm, setShowReservationForm] = useState(false);

  useEffect(() => {
    const map = L.map('map', {
      center: [coordinates.lat, coordinates.lng],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add marker for the searched location
    L.marker([coordinates.lat, coordinates.lng])
      .addTo(map)
      .bindTooltip('Searched Location')
      .openTooltip();

    // Add markers for nearby parking places
    nearbyParkingData.forEach((parkingPlace) => {
      const { lat, lng, name, id } = parkingPlace;

      // Create a tooltip with the parking space name
      const tooltip = L.tooltip({
        permanent: false,
        direction: 'top',
        className: 'marker-tooltip',
      }).setContent(name);

      // Add marker with tooltip
      const marker = L.marker([lat, lng])
        .addTo(map)
        .on('click', function () {
          // Set the selected parking place and open the reservation modal
          setSelectedParkingPlace(parkingPlace);
          setShowReservationForm(true);
        })
        .on('mouseover', function () {
          this.bindTooltip(tooltip).openTooltip();
        })
        .on('mouseout', function () {
          this.closeTooltip();
        });
    });

    return () => map.remove(); // Cleanup on unmount
  }, [coordinates, nearbyParkingData]);


  const handleReservationFormSubmit = (reservationData) => {
    // Handle the reservation form submit logic here
    // You can make an API call to store the reservation data in the database

    // Simulate the API call (replace with your actual API endpoint)
    const reservationApiEndpoint = 'http://localhost:3001/reserveParkingSpace';

    fetch(reservationApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...reservationData, parkingSpaceId: selectedParkingPlace.id }),
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

  const handleReservationFormCancel = () => {
    // Close the reservation form
    setShowReservationForm(false);
  };

  return (
    <>
      <div id="map" style={{ height: '500px', width: '100%', position: 'relative', zIndex: 0 }}></div>
      {selectedParkingPlace && showReservationForm && (
        <ReservationForm
          onFormSubmit={handleReservationFormSubmit}
          onCancel={handleReservationFormCancel}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}
        />
      )}
    </>
  );

}
export default Map;
