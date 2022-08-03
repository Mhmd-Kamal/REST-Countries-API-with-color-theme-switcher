import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

function NavBar() {
  return (
    <div className='flex items-center justify-between w-full h-20 px-4 bg-white dark:bg-dark-elements shadow-sm dark:text-slate-100'>
      <h1 className='font-extrabold '>Where in the world?</h1>
      <button className='flex items-center '>
        {/* <MoonIcon className='w-4 h-4' /> */}
        <SunIcon className='w-4 h-4' />
        <span className='pl-1 text-sm font-semibold '>Dark Mode</span>
      </button>
    </div>
  );
}

export default NavBar;
