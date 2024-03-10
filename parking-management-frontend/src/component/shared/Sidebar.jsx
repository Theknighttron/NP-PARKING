import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout, HiOutlineInformationCircle } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral rounded-sm text-base text-white";

const Sidebar = () => {
  const [nearbyParkingData, setNearbyParkingData] = useState([]);
  const [selectedParkingSpace, setSelectedParkingSpace] = useState(null);
  const [showReservationForm, setShowReservationForm] = useState(false);


  useEffect(() => {
    // Simulate fetching nearby parking data based on the user's search location
    // Replace this with your actual logic to fetch nearby parking data
    // when the user searches for a location
    const simulatedNearbyParking = [
      { id: 1, name: 'Parking Space 1', location: 'Nairobi Central Park', price: '$5/hour' },
      { id: 2, name: 'Parking Space 2', location: 'Mombasa Beachfront', price: '$7/hour' },
      { id: 3, name: 'Parking Space 3', location: 'Masai Mara National Reserve', price: '$7/hour' },
      { id: 4, name: 'Parking Space 4', location: 'Mount Kenya National Park', price: '$7/hour' },
      // Add more parking spaces as needed
    ];
    setNearbyParkingData(simulatedNearbyParking);
  }, []); // You might want to include location in the dependency array if needed

    const reserveParkingSpace = (parkingSpace) => {
      // Set the selected parking space and show the reservation form
      setSelectedParkingSpace(parkingSpace);
      setShowReservationForm(true);
    };


    const closeReservationForm = () => {
      // Close the reservation form
      setShowReservationForm(false);
    };

    return (
      <div className="bg-indigo-500 w-60 p-3 flex flex-col text-white">
        <div className='flex item-center gap-2 px-1 py-3'>
          {/* <span className='text-neutral-100 text-lg font-bold text-white ml-10'>N-PARKING</span> */}
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {/* Display nearby parking spaces */}
          {nearbyParkingData.map((parkingSpace) => (
            <ParkingSpaceLink key={parkingSpace.id} parkingSpace={parkingSpace} onReserveClick={reserveParkingSpace} />
          ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
          <div className={linkClasses}>
            <span className='text-xl cursor-pointer'> <HiOutlineLogout /> </span>
            <span className='cursor-pointer'>Logout</span>
          </div>
        </div>
  
        {/* Reservation Form */}
        {showReservationForm && (
          <div className="reservation-form">
            <h2>Reserve Parking Space</h2>
            <div>
              <strong>{selectedParkingSpace.name}</strong>
              <p>{selectedParkingSpace.location}</p>
              <p>{selectedParkingSpace.price}</p>
            </div>
            <button onClick={closeReservationForm}>Close</button>
          </div>
        )}
      </div>
    )
  }

function ParkingSpaceLink({ parkingSpace, onReserveClick }) {
  return (
    <div className="flex items-center gap-2 font-light px-3 py-2 hover:bg-teal-500 hover:no-underline active:bg-neutral rounded-sm text-base text-white">
      <span className='text-xl'><HiOutlineInformationCircle /></span>
      <div>
        <div className="font-semibold">{parkingSpace.name}</div>
        <div>{parkingSpace.location}</div>
        <div>{parkingSpace.price}</div>
        <button
          className='px-2 py-1 text-sm font-semibold text-center text-white rounded-lg bg-cyan-900 sm:w-fit hover:bg-primary-800'
          onClick={() => onReserveClick(parkingSpace)}
        >
          Reserve
        </button>
      </div>
    </div>
  );
}



function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}

export default Sidebar;