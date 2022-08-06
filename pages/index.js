import Head from 'next/head';
import { useRecoilValue } from 'recoil';

import { countriesSelector } from '../utils/recoil/selector';

import FilterForm from '../components/FilterForm';
import CountriesGrid from '../components/ContriesGrid';

// import fakeData from '../public/fakeData'; //TODO remove the file in public after using API

import NavBar from '../components/NavBar';

const Home = () => {
  const countriesData = useRecoilValue(countriesSelector);

  return (
    <div className='flex flex-col items-center min-h-screen bg-light-bg dark:bg-dark-bg'>
      <NavBar />
      <div className='flex flex-col w-full px-4 py-6 md:px-20 md:py-12'>
        <FilterForm />
        <CountriesGrid countries={countriesData} />
      </div>
    </div>
  );
};

export default Home;
