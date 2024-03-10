import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';


const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header />
        <div className='flex-1 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}


export default Layout