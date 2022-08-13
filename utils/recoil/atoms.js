import { atom } from 'recoil';

export const AllCountriesAtom = atom({ key: 'AllCountriesAtom', default: [] });

export const queryAtom = atom({ key: 'queryAtom', default: '' });

export const filterAtom = atom({ key: 'filterAtom', default: '' });

export const ThemeAtom = atom({ key: 'ThemeAtom', default: 'dark' });
