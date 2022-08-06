import { selector } from 'recoil';

export const countriesSelector = selector({
  key: 'countriesSelector',
  get: async ({ get }) => {
    const res = await fetch('https://restcountries.com/v2/all');
    if (res.error) throw res.error;
    const data = await res.json();
    return data;
  },
});
