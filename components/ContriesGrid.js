import CountryCard from './CountryCard';

function CountriesGrid({ countries }) {
  console.log(countries);
  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      {countries.map((country, index) => (
        <CountryCard country={country} key={index} />
      ))}
    </div>
  );
}

export default CountriesGrid;
