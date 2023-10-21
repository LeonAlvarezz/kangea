import React from 'react';
import type { Job } from '../../type/type';
type params = {
  job: Job;
};
export default function ContactDetail({ job }: params) {
  return (
    <div className='h-full rounded-2xl p-6 shadow-md shadow-gray-400'>
      <h1 className='text-primary text-2xl font-bold leading-[3rem] '>
        Contact Details
      </h1>
      <h2 className='text-xl leading-[2.5rem]'>Address</h2>
      <p className='text-primary text-h5'>{job.Location}</p>
      <br />
      <h2 className='text-xl leading-[2.5rem]'>Contact Name</h2>
      <p className='text-primary text-p'>{job.CompanyName}</p>
      <div className='mt-5 flex justify-start'>
        <button className='bg-button rounded-lg px-6 py-2 font-semibold text-white'>
          Apply Now
        </button>
      </div>
    </div>
  );
}
