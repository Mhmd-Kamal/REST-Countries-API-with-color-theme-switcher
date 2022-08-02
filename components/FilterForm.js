import { SearchIcon } from '@heroicons/react/outline';
import Selector from '../components/Selector';

function FilterForm() {
  return (
    <div className='flex flex-col gap-10'>
      <div
        id='search-field'
        className='flex items-center w-full px-8 bg-white rounded-sm text-slate-300'
      >
        <SearchIcon className='w-5 h-5 mr-8' />

        <input
          type='text'
          name='search-text'
          id='search-text'
          placeholder='Search for a country ...'
          className='py-3 text-light-text placeholder:text-slate-300 placeholder:font-semibold focus:outline-none'
        />
      </div>

      <Selector />
    </div>
  );
}

export default FilterForm;
