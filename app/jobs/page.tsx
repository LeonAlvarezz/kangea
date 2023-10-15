import React from 'react';
import Navbar from '../../components/navbar';
import SearchBar from './component/searchBar';
import JobCategory from './component/jobCategory';

export default function Job() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-10'>
        <SearchBar></SearchBar>
        <div className='mx-auto mt-10 grid w-[90%] grid-cols-5 gap-10'>
          <div className='w-full'>
            <JobCategory></JobCategory>
          </div>
          <div className='col-span-4 h-full w-full bg-blue-100'></div>
        </div>
      </div>
    </div>
  );
}
