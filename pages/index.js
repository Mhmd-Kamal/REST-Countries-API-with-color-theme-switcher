import Head from 'next/head';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

import { filteredCountriesSelector } from '../utils/recoil/selectors';

import FilterForm from '../components/FilterForm';
import CountriesGrid from '../components/ContriesGrid';

import NavBar from '../components/NavBar';
import { AllCountriesAtom, filterAtom } from '../utils/recoil/atoms';

const Home = ({ countries }) => {
  const setAllCountries = useSetRecoilState(AllCountriesAtom);

  const filteredCountries = useRecoilValue(filteredCountriesSelector);

  useEffect(() => {
    setAllCountries(countries);
  }, [setAllCountries, countries]);

  return (
    <div className='flex flex-col items-center min-h-screen bg-light-bg dark:bg-dark-bg'>
      <Head>
        <title>Where in the world app?</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/globe.png' type='image/x-icon' />
        <meta name='description' content='Where in the world app?' />
        <meta name='keywords' content='Where in the world app?' />
      </Head>
      <NavBar />
      <div className='flex flex-col w-full px-4 py-6 md:px-20 md:py-12'>
        <FilterForm />
        <CountriesGrid countries={filteredCountries} />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const res = await fetch('https://restcountries.com/v2/all');

    const data = await res.json();
    return { props: { countries: data }, revalidate: 604800 };
  } catch (error) {
    console.log(error);
  }
}
