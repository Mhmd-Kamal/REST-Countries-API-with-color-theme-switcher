import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

import fakeData from '../public/fakeData';

function CountryPage() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const country = fakeData.find((item) => item.alpha3Code === id);
  console.log(country);
  return (
    <div>
      <NavBar />
      <div>
        <button>
          <ArrowLeftIcon />
          <p>Back</p>
        </button>
        <div>
          <img src={country.languages.png} alt='country flag' />
          <div>
            <h2>{country.name}</h2>
            <div>
              <p className=' font-semibold text-sm'>
                Native Name:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className=' font-semibold text-sm'>
                Population:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className=' font-semibold text-sm'>
                Region:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className=' font-semibold text-sm'>
                Sub Region:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className=' font-semibold text-sm'>
                Capital:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
            </div>
            <div>
              <p className=' font-semibold text-sm'>
                Top Level Domain:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className=' font-semibold text-sm'>
                Currencies:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className=' font-semibold text-sm'>
                Languages:
                <span className='font-normal pl-1 text-slate-300'>
                  {country.region}
                </span>
              </p>
            </div>
          </div>
          {/* <div>
            <h2>Border Countries:</h2>
            {country.borders.map((id) => {
              const borderCountry = fakeData.find(
                (item) => item.alpha3Code === id
              );

              return <button>{borderCountry.name}</button>;
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
