import Head from 'next/head';
import Image from 'next/image';
import fakeData from '../public/fakeData'; //TODO remove the file in public after using API

import NavBar from '../components/NavBar';
import Selector from '../components/Selector';
const Home = ({}) => {
  console.log(fakeData);

  return (
    <div className='flex flex-col items-center min-h-screen bg-light-bg'>
      <NavBar />
      <div className='w-full px-4 py-6'>
        <div>
          <div
            id='search-field'
            className='flex items-center w-full px-8 bg-white rounded-sm text-slate-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5 mr-8'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clip-rule='evenodd'
              />
            </svg>
            <input
              type='text'
              name='search-text'
              id='search-text'
              placeholder='Search for a country ...'
              className='py-4 placeholder:text-slate-300 placeholder:font-semibold placeholder:text-xs focus:outline-none'
            />
          </div>

          <Selector />
        </div>
      </div>
    </div>
  );
};

export default Home;

// export async function getStaticProps() {
//   const res = await fetch('https://restcountries.com/v3.1/all');
//   const data = await res.json();
//   console.log(data);

//   return { props: { data } };
// }
