/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useSetRecoilState } from 'recoil';
import { filterAtom } from '../utils/recoil/atoms';

const people = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Africa',
  },
  {
    id: 3,
    name: 'Americas',
  },

  {
    id: 4,
    name: 'Asia',
  },
  {
    id: 5,
    name: 'Europe',
  },
  {
    id: 6,
    name: 'Oceania',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Selector() {
  const [selected, setSelected] = useState(null);
  const setFilter = useSetRecoilState(filterAtom);

  useEffect(() => {
    setFilter(selected ? selected.name : '');
  }, [selected]);

  return (
    <div className='font-semibold w-52 text-light-text dark:text-slate-300'>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className='relative mt-1 sm:m-0'>
              <Listbox.Button className='relative w-full py-4 pl-3 pr-10 text-left bg-white rounded-md shadow-sm cursor-pointer dark:bg-dark-elements focus:outline-none '>
                <span className='flex items-center'>
                  <span className='block ml-3 truncate'>
                    {selected ? selected.name : 'Filter by Region'}
                  </span>
                </span>
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none'>
                  <SelectorIcon
                    className='w-5 h-5 text-light-text dark:text-slate-300'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-56 focus:outline-none dark:bg-dark-elements'>
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className='relative py-1 pl-3 cursor-pointer select-none pr-9'
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span className='block ml-3 truncate'>
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
                              <CheckIcon
                                className='w-5 h-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
