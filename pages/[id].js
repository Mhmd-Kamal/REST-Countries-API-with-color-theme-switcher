import Link from 'next/link';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';

import NavBar from '../components/NavBar';

function CountryPage({ country, borders }) {
  console.log(country);
  return (
    <div className='min-h-screen text-light-text bg-light-bg dark:bg-dark-bg dark:text-slate-200'>
      <NavBar />
      <div className='flex flex-col gap-16 py-10 px-7 sm:px-24'>
        <Link href='/'>
          <a className='flex gap-2 px-6 py-2 bg-white rounded-sm shadow-[0_0_4px_#ccc] w-fit dark:bg-dark-elements dark:shadow-[0_0_4px_#222]'>
            <ArrowNarrowLeftIcon className='w-5' />
            <p className='text-sm font-semibold'>Back</p>
          </a>
        </Link>
        <div className='flex flex-col gap-10 sm:gap-24 sm:flex-row sm:items-center sm:justify-between'>
          <img src={country.flag} alt='country flag' className='w-1/2' />
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col '>
              <h2 className='pb-5 text-lg font-extrabold'>{country.name}</h2>
              <div className='sm:items-start sm:flex sm:justify-between'>
                <div className='flex flex-col gap-3'>
                  <p className='text-sm font-semibold '>
                    Native Name:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.nativeName}
                    </span>
                  </p>
                  <p className='text-sm font-semibold '>
                    Population:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p className='text-sm font-semibold '>
                    Region:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.region}
                    </span>
                  </p>
                  <p className='text-sm font-semibold '>
                    Sub Region:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.subregion}
                    </span>
                  </p>
                  <p className='text-sm font-semibold '>
                    Capital:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.capital}
                    </span>
                  </p>
                </div>
                <div className='flex flex-col gap-3 pt-10 sm:pt-0'>
                  <p className='text-sm font-semibold '>
                    Top Level Domain:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.topLevelDomain}
                    </span>
                  </p>
                  <p className='text-sm font-semibold '>
                    Currencies:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.currencies
                        .map((currency) => currency.name)
                        .join(', ')}
                    </span>
                  </p>
                  <p className='text-sm font-semibold '>
                    Languages:
                    <span className='pl-1 font-normal dark:text-slate-300'>
                      {country.languages
                        .map((language) => language.name)
                        .join(', ')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {borders && (
              <div>
                <h2 className='text-sm font-semibold'>Border Countries:</h2>
                <div className='flex flex-wrap gap-3 py-4 text-sm'>
                  {borders.map((borderCountry) => (
                    <Link
                      key={borderCountry.alpha3Code}
                      href={`/${borderCountry.alpha3Code}`}
                    >
                      <a className='flex px-4 py-1 bg-white rounded-sm shadow-[0_0_4px_#ccc] dark:bg-dark-elements dark:shadow-[0_0_4px_#222]'>
                        {borderCountry.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;

  const country = await getCountryById(id);
  if (!country.borders) return { props: { country, borders: null } };
  const borders = await Promise.all(
    country.borders.map(async (id) => await getCountryById(id))
  );
  return {
    props: { country, borders },
  };
}

async function getCountryById(id) {
  const res = await fetch(`https://restcountries.com/v2/alpha/${id}`);
  const country = await res.json();
  return country;
}
