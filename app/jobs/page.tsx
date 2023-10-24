'use client';
import React, { useState, useEffect } from 'react';
import SearchBar from './component/searchBar';
import JobCategory from './component/jobCategory';
import JobItem from './component/jobItem';
import { fetchAllJobs } from '../../helper/helper';
// import jobs from '../../mock-data/jobs';
import type { Job } from '../../type/type';
export default function Job() {
  const initialJobsToShow = 5;
  const jobsPerPage = 5;
  const [jobsToShow, setJobsToShow] = useState<number>(initialJobsToShow);
  const show = false;
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleViewMore = () => {
    setJobsToShow(jobsToShow + jobsPerPage);
  };
  useEffect(() => {
    fetchAllJobs().then((data) => {
      setJobs(data);
    });
  }, []);

  return (
    <div>
      <div className='my-10'>
        <SearchBar></SearchBar>
        <div className='mx-auto mt-10 grid w-[90%] grid-cols-5 gap-10'>
          <div className='hidden w-full lg:block'>
            <JobCategory jobs={jobs}></JobCategory>
          </div>
          <div className='col-span-5 h-full w-full lg:col-span-4'>
            <div className='w-full'>
              <h2 className='text-h3 text-primary mb-10 font-bold'>
                Lastest Jobs
              </h2>
              <ul className='flex flex-col gap-6'>
                {jobs.slice(0, jobsToShow).map((job, index) => (
                  <li key={job.id}>
                    <JobItem job={job}></JobItem>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-10 flex justify-center'>
              {jobsToShow < jobs.length ? (
                <button
                  onClick={handleViewMore}
                  className='bg-button rounded-xl px-6 py-2 font-semibold text-white'
                >
                  View More
                </button>
              ) : (
                <h1>You have reached the end</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
