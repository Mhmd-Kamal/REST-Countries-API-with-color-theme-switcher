import { useRouter } from 'next/router';

function CountryCard({ country }) {
  const router = useRouter();
  const url = `/${country.alpha3Code}`;
  return (
    <div className='flex flex-col w-[270px] bg-white rounded-md shadow-sm dark:bg-dark-elements text-light-text dark:text-slate-200'>
      <div>
        <img
          onClick={() => router.push(url)}
          className='rounded-t-md object-cover w-full h-[170px]  cursor-pointer'
          src={country.flag}
          alt='country flag'
        />
      </div>
      <div className='p-6'>
        <h2
          onClick={() => router.push(url)}
          className='text-base font-extrabold tracking-wider cursor-pointer'
        >
          {country.name}
        </h2>
        <div className='flex flex-col gap-2 py-4 '>
          <div className='flex text-sm font-semibold'>
            <p>Population:</p>
            <span className='pl-1 font-normal dark:text-slate-300'>
              {country.population.toLocaleString()}
            </span>
          </div>
          <div className='flex text-sm font-semibold'>
            <p>Region:</p>
            <span className='pl-1 font-normal dark:text-slate-300'>
              {country.region}
            </span>
          </div>
          <div className='flex text-sm font-semibold'>
            <p>Capital:</p>
            <span className='pl-1 font-normal dark:text-slate-300'>
              {country.capital}.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
