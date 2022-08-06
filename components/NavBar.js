import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { ThemeAtom } from '../utils/recoil/atoms';

function NavBar() {
  const [theme, setTheme] = useRecoilState(ThemeAtom);

  return (
    <div className='flex items-center justify-between w-full h-20 px-4 bg-white dark:bg-dark-elements shadow-sm dark:text-slate-100 sm:px-20 sm:text-lg'>
      <h1 className='font-extrabold '>Where in the world?</h1>
      <button
        className='flex items-center'
        onClick={() =>
          setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
        }
      >
        {theme === 'dark' ? (
          <SunIcon className='w-5 sm:w-6' />
        ) : (
          <MoonIcon className='w-6 h-6' />
        )}
        <span className='pl-1 text-sm font-semibold sm:text-base'>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  );
}

export default NavBar;
