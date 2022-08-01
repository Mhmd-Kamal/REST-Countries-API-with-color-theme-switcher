import React from 'react';
import {MoonIcon} from '@heroicons/react/outline'
function NavBar() {
  return (
    <div className='flex items-center justify-between w-full h-20 px-4 bg-white shadow-sm'>
      <h1 className='text-sm font-extrabold'>Where in the world?</h1>
      <button className='flex items-center '>
      <MoonIcon className='w-4 h-4'/>
      <span className='pl-2 text-xs font-semibold '>Dark Mode</span>
      </button>
    </div>
  );
}

export default NavBar;
