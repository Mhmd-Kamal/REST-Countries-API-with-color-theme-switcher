import { SearchIcon } from '@heroicons/react/solid';
import { useRef } from 'react';
import Selector from '../components/Selector';

function FilterForm() {
  const myRef = useRef();
  return (
    <div className='flex flex-col gap-10'>
      <div
        onClick={() => myRef.current.focus()}
        id='search-field'
        className='flex items-center w-full px-8 py-3 shadow-sm bg-white dark:bg-dark-elements rounded-md text-slate-300 dark:text-slate-100'
      >
        <SearchIcon className='w-5 h-5 mr-8' />

        <input
          ref={myRef}
          type='text'
          name='search-text'
          id='search-text'
          placeholder='Search for a country ...'
          className='text-light-text placeholder:text-slate-300 placeholder:font-semibold focus:outline-none dark:bg-dark-elements dark:text-white'
        />
      </div>

      <Selector />
    </div>
  );
}

export default FilterForm;
