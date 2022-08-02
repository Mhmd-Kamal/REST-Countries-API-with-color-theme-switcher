import Head from 'next/head';
import Image from 'next/image';

import FilterForm from '../components/FilterForm';

import fakeData from '../public/fakeData'; //TODO remove the file in public after using API

import NavBar from '../components/NavBar';
const Home = ({}) => {
  console.log(fakeData);

  return (
    <div className='flex flex-col items-center min-h-screen bg-light-bg'>
      <NavBar />
      <div className='flex flex-col w-full px-4 py-6 '>
        <FilterForm />
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
