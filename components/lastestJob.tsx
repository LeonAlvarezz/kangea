'use client';
import LastestJobItem from './lastestJobItem';
import jobs from '@/mock-data/jobs';
import React, { useState } from 'react';
import { Job } from '@/type/job';

export default function LatestJob() {
  const initialJobsToShow = 3; // Initial number of jobs to show
  const jobsPerPage = 3; // Number of jobs to load per page
  const [jobsToShow, setJobsToShow] = useState(initialJobsToShow);

  // Event handler for "View More" button
  const handleViewMore = () => {
    setJobsToShow(jobsToShow + jobsPerPage);
  };

  return (
    <div className='my-10'>
      <h1 className='text-h2 text-primary text-center font-bold'>
        Latest Jobs
      </h1>
      <div className='flex justify-center'>
        <p className='mb-10 h-1 w-[10%] bg-teal-300 '></p>
      </div>
      <div className='grid grid-cols-1 place-items-center gap-x-36 gap-y-10 lg:grid-cols-3'>
        {jobs.slice(0, jobsToShow).map((job) => (
          <LastestJobItem key={job.id} job={job}></LastestJobItem>
        ))}
      </div>
      <div className='flex justify-center'>
        {jobsToShow < jobs.length ? (
          <button
            onClick={handleViewMore}
            className='bg-button rounded-xl px-6 py-2 font-semibold text-white'
          >
            View More
          </button>
        ) : (
          <h1>You have Reach The End</h1>
        )}
      </div>
    </div>
  );
}
