import { useRouter } from 'next/router';

function CountryCard({ country }) {
  const router = useRouter();
  const url = `/${country.alpha3Code}`;
  return (
    <div
      onClick={() => router.push(url)}
      className='flex flex-col bg-white dark:bg-dark-elements text-light-text dark:text-slate-200 rounded-md shadow-sm'
    >
      <div>
        <img
          className='rounded-t-md object-cover w-[260px] h-[170px]'
          src={country.flags.png}
          alt='country flag'
        />
      </div>
      <div className='p-6'>
        <h2 className='font-extrabold  text-base tracking-wider'>
          {country.name}
        </h2>
        <div className=' flex flex-col py-4 gap-2'>
          <div className='flex font-semibold text-sm'>
            <p>Population:</p>
            <span className='font-normal pl-1 dark:text-slate-300'>
              {country.population.toLocaleString()}
            </span>
          </div>
          <div className='flex font-semibold text-sm'>
            <p>Region:</p>
            <span className='font-normal pl-1 dark:text-slate-300'>
              {country.region}
            </span>
          </div>
          <div className='flex font-semibold text-sm'>
            <p>Capital:</p>
            <span className='font-normal pl-1 dark:text-slate-300'>
              {country.capital}.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
