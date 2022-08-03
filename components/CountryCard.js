function CountryCard({ country }) {
  return (
    <div className='flex flex-col bg-white rounded-md shadow-sm'>
      <img
        className='rounded-t-md'
        src={country.flags.png}
        alt='country flag'
      />
      <div className='p-6'>
        <h2 className='font-extrabold text-light-text text-base'>
          United States of America
        </h2>
        <div className='py-4'>
          <p className='text-light-text font-extrabold text-sm'>
            Population: <span className='font-normal'>323.947.000</span>
          </p>
          <p className='text-light-text font-extrabold text-sm'>
            Region: <span className='font-normal'>Americas</span>
          </p>
          <p className='text-light-text font-extrabold text-sm'>
            Capital: <span className='font-normal'>Washington. D.C.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
