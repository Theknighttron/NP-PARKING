import React, { useState} from 'react'
import {  HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
import { Popover, Transition, Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import MapHandler from '../MapHandler';

const Header = () => {

  const [location, setLocation] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleLocationSubmit = () => {
    setShowMap(true);
  };

  const navigate = useNavigate();

  return (
    <div className=''>
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
    </div>
  )
}

export default Header