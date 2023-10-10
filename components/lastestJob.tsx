import React from 'react';
import LastestJobItem from './lastestJobItem';
import jobs from '@/mock-data/jobs';
export default function LastestJob() {
  return (
    <div className='mt-10'>
      <h1 className='text-h2 text-primary text-center font-bold'>
        Lastest Jobs
      </h1>
      <div className='flex justify-center'>
        <p className='mb-10 h-1 w-[10%] bg-teal-300 '></p>
      </div>
      <div className='grid grid-cols-3 place-items-center gap-4'>
        {jobs.map((job) => (
          <LastestJobItem key={job.id} job={job}></LastestJobItem>
        ))}
      </div>
    </div>
  );
}
