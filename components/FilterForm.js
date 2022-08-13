import { SearchIcon } from '@heroicons/react/solid';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import Selector from '../components/Selector';
import { queryAtom } from '../utils/recoil/atoms';

function FilterForm() {
  const myRef = useRef();

  const [query, setQuery] = useRecoilState(queryAtom);

  return (
    <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
      <div
        onClick={() => myRef.current.focus()}
        id='search-field'
        className='flex items-center w-full px-8 py-3 bg-white rounded-md shadow-sm dark:bg-dark-elements text-slate-300 dark:text-slate-100 md:w-2/5'
      >
        <SearchIcon className='w-5 h-5 mr-8' />

        <input
          ref={myRef}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type='text'
          name='search-text'
          id='search-text'
          placeholder='Search for a country ...'
          className='text-light-text placeholder:text-slate-300 placeholder:font-semibold focus:outline-none dark:bg-dark-elements dark:text-slate-100'
        />
      </div>

      <Selector />
    </div>
  );
}

export default FilterForm;
