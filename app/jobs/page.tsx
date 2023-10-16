import React from 'react';
import Navbar from '../../components/navbar';
import SearchBar from './component/searchBar';
import JobCategory from './component/jobCategory';
import JobItem from './component/jobItem';
import jobs from '../../mock-data/jobs';
import Footer from '../../components/footer';

export default function Job() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='my-10'>
        <SearchBar></SearchBar>
        <div className='mx-auto mt-10 grid w-[90%] grid-cols-5 gap-10'>
          <div className='hidden w-full lg:block'>
            <JobCategory></JobCategory>
          </div>
          <div className='col-span-5 h-full w-full lg:col-span-4'>
            <div className='w-full'>
              <h2 className='text-h3 text-primary mb-10 font-bold'>
                Lastest Jobs
              </h2>
              <ul className='flex flex-col gap-6'>
                {jobs.map((job) => (
                  <li key={job.id}>
                    <JobItem job={job}></JobItem>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
