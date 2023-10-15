import React from 'react';

export default function SearchBar() {
  return (
    <div className='m-auto flex w-[50%] gap-4 transition-all focus-within:w-[90%]'>
      <input
        className='border-primary h-12 w-full rounded-lg border-[1px] p-4'
        placeholder='What are you looking for...'
        type='search'
        name=''
        id=''
      />
      <button
        className='bg-button rounded-md px-6 py-3 text-white'
        type='submit'
      >
        Search
      </button>
    </div>
  );
}
