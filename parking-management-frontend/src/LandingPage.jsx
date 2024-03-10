import React, { useEffect, useRef } from "react";
import locationImage from './park.png';
import './index.css';
import MapHandler from "./component/MapHandler";

const LandingPage = () => {
  return (

      <div>
         {/* Navigation Bar */}
        <nav class="bg-gray-800 p-4">
          <div class="container mx-auto flex justify-between items-center mr-10 px-10">
            <div class="text-white font-semibold text-lg ">N-PARKING</div>
            <div class="space-x-9">
              <a href="/" class="text-white font-semibold hover:text-orange-500">Home</a>
              <a href="features" class="text-white font-semibold hover:text-orange-500">Features</a>
              <a href="/map" class="text-white font-semibold hover:text-orange-500">Reserve</a>
              <a href="/contact" class="text-white font-semibold hover:text-orange-500">Contact</a>
              <a href="/about" class="text-white font-semibold hover:text-orange-500">About</a>
            </div>
          </div>
        </nav>

        <section class="bg-gradient-to-r from-indigo-500 min-h-screen flex flex-col items-center justify-center">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white heading">Find <span class="decoration">Nearby Parking</span> Spaces</h1>
                <p class="w-96 mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
                  Discover the best parking spots near you with our easy-to-use parking management software.
                  Reserve your spot in advance and save time for what really matters.
                </p>
                <div className="flex flex-col space-y-3">
                <a href="/map">
                  <button 
                    type="submit" 
                    class="py-3 px-5 text-sm font-semibold text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-primary-800"
                    >
                      Search Location
                  </button>
                </a>
              </div>
              
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={locationImage} alt="mockup" />
            </div>                
        </div>
    </section>
    </div>
  );
};


export default LandingPage;