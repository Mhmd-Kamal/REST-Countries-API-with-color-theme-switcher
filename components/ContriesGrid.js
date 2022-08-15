import CountryCard from './CountryCard';

function CountriesGrid({ countries }) {
  return (
    <div className='flex flex-col items-center gap-8 p-8 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-20 md:px-0 md:py-12'>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
}

export default CountriesGrid;
