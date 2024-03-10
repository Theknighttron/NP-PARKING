import React, { useState } from 'react';

const ReservationForm = ({ parkingSpace, onFormSubmit, onCancel }) => {
  const [reservationData, setReservationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    carLicensePlate: '',
    creditCardNumber: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(reservationData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 md:p-5 max-w-md w-full md:max-h-full overflow-y-auto border rounded-lg shadow dark:bg-gray-700" role="dialog" aria-modal="true" aria-labelledby="reservation-modal-title" aria-describedby="reservation-modal-description">
      {/* Modal header */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 id="reservation-modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">
          Reservation Form
        </h3>
        <button
          type="button"
          className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleCancel}
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5">
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          {/* Add your form fields here */}
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={reservationData.firstName}
              onChange={(e) => setReservationData({ ...reservationData, firstName: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your first name"
              required
            />
          </div>
          {/* Add more form fields as needed */}
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={reservationData.lastName}
              onChange={(e) => setReservationData({ ...reservationData, lastName: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your last name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={reservationData.email}
              onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={reservationData.phoneNumber}
              onChange={(e) => setReservationData({ ...reservationData, phoneNumber: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Car License Plate */}
          <div>
            <label htmlFor="carLicensePlate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Car License Plate
            </label>
            <input
              type="text"
              id="carLicensePlate"
              name="carLicensePlate"
              value={reservationData.carLicensePlate}
              onChange={(e) => setReservationData({ ...reservationData, carLicensePlate: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your car license plate"
              required
            />
          </div>
          {/* Credit Card Number */}
          <div>
            <label htmlFor="creditCardNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Credit Card Number
            </label>
            <input
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              value={reservationData.creditCardNumber}
              onChange={(e) => setReservationData({ ...reservationData, creditCardNumber: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your credit card number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
