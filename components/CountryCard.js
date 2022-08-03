function CountryCard({ country }) {
  return (
    <div className='flex flex-col bg-white dark:bg-dark-elements text-light-text dark:text-slate-100 dark:text-slate-100 rounded-md shadow-sm'>
      <img
        className='rounded-t-md'
        src={country.flags.png}
        alt='country flag'
      />
      <div className='p-6'>
        <h2 className='font-extrabold  text-base tracking-wider'>
          United States of America
        </h2>
        <div className='py-4'>
          <p className=' font-semibold text-sm'>
            Population: <span className='font-normal'>323.947.000</span>
          </p>
          <p className=' font-semibold text-sm'>
            Region: <span className='font-normal'>Americas</span>
          </p>
          <p className=' font-semibold text-sm'>
            Capital: <span className='font-normal'>Washington. D.C.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
