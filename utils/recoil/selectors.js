import { selector } from 'recoil';
import { AllCountriesAtom, filterAtom, queryAtom } from './atoms';

export const filteredCountriesSelector = selector({
  key: 'countriesSelector',
  get: ({ get }) => {
    const allCountries = get(AllCountriesAtom);
    const filter = get(filterAtom);
    const query = get(queryAtom);

    if (!filter || filter === 'All') {
      return allCountries.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return allCountries
      .filter((country) => country.region === filter)
      .filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      );
  },
});
