import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout, HiOutlineInformationCircle } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral rounded-sm text-base text-white";

const Sidebar = () => {
  const [nearbyParkingData, setNearbyParkingData] = useState([]);
  const [selectedParkingSpace, setSelectedParkingSpace] = useState(null);
  const [showReservationForm, setShowReservationForm] = useState(false);


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
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
        {/* <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'> */}
          {/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} /> 
          ))} */}
        {/* </div> */}
  
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