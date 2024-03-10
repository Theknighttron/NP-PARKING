import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdNearMe } from "react-icons/md";


const Features = () => {
  return (
      <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mb-8 lg:mb-16 flex flex-col items-center justify-center">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Features that we provide</h2>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div class="flex justify-center items-center mb-4 w-15 h-15 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <FaMapMarkerAlt />
                        </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Location-Based Parking Search
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Users can easily search for parking spaces in specific locations.
                    The website uses geocoding to convert user-entered addresses into geographical coordinates,
                    displaying available parking spaces in the vicinity.
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <FaMapMarkedAlt />
                      </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Real-Time Map Display:
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    The website provides a dynamic map that updates in real-time based on user searches.
                    It displays the searched location, nearby parking spaces, and additional details.
                    The map enhances the user experience by offering a visual representation of parking availability.
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <FaCalendarAlt />
                      </svg>                    
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Reservation System
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Users can reserve parking spaces directly through the website.
                    After selecting a parking space, they enter their full name and phone number to complete the reservation.
                    The system ensures a seamless and user-friendly process.
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <MdNearMe />
                        </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Nearby Parking Details
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Each parking space displayed on the map provides essential information such as the parking space name,
                    location, and pricing details. Users can make informed decisions based on these details before reserving a parking spot.
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <MdDashboard />
                        </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Dashboard
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    Authenticated users gain access to a personalized dashboard where they can track their reservation history,
                     making it convenient for frequent users.
                  </p>
              </div>
              <div>
                  <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <BsFillCalendarDateFill />
                    </svg>
                  </div>
                  <h3 class="mb-2 text-xl font-bold dark:text-white">
                    Responsive Date Range Picker
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">
                    The website incorporates a responsive date range picker for users to specify their parking duration.
                    It ensures a smooth user experience by allowing them to choose both the start and end dates effortlessly.
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Features;
