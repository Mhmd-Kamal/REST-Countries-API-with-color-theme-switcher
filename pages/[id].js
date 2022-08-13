import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import NavBar from '../components/NavBar';

import { countriesSelector } from '../utils/recoil/selector';

function CountryPage() {
  const AllCountries = useRecoilValue(countriesSelector);
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const country = AllCountries.find((item) => item.alpha3Code === id);
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
              <p className='text-sm font-semibold '>
                Native Name:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className='text-sm font-semibold '>
                Population:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className='text-sm font-semibold '>
                Region:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className='text-sm font-semibold '>
                Sub Region:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className='text-sm font-semibold '>
                Capital:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
            </div>
            <div>
              <p className='text-sm font-semibold '>
                Top Level Domain:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className='text-sm font-semibold '>
                Currencies:
                <span className='pl-1 font-normal text-slate-300'>
                  {country.region}
                </span>
              </p>
              <p className='text-sm font-semibold '>
                Languages:
                <span className='pl-1 font-normal text-slate-300'>
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
