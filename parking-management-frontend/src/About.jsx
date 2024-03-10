import React from 'react'
import aboutUsImage from './about.jpg';

const About = () => {
  return (
    <div>
        <section class="bg-indigo-500 flex flex-col items-center justify-center">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-white text-center">
                         About us
                          <span class="font-extrabold"></span>
                    </h2>
                    <p class="mb-4 font-light text-white">
                    Welcome to N-PARKING! We are dedicated to simplifying your parking experience and making it more convenient than ever.
                    Our mission is to help you find the best parking spaces nearby, effortlessly.
                    At N-PARKING, we    understand the challenges of urban parking, and we're here to provide a solution. Whether you're looking for a spot for a quick errand or planning ahead for a day out, our user-friendly parking management software has got you covered.

                    </p>
                    <p class="mb-4 font-medium text-white">
                    What Sets Us Apart:
                        Easy Reservations: Reserve your parking spot in advance and save time for what truly matters to you.
                        Intuitive Search: Our platform allows you to effortlessly discover parking spaces near your location with just a few clicks.
                        Real-time Updates: Stay informed with real-time updates on parking availability, ensuring a hassle-free experience.

                        We believe in making parking stress-free and contributing to a smoother urban lifestyle. Join us on this journey, and let's redefine the way you park!
                    </p>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={aboutUsImage} className="park-reserve" alt="mockup" />
                    </div>    
                </div>
            </div>
        </section>
    </div>
  )
}

export default About

