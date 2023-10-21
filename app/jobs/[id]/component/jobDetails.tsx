import React from 'react';
import Image from 'next/image';
import type { Job } from '../../type/type';
import {
  jobDescription,
  jobRequirement,
} from '../../../../mock-data/jobDescription';
type params = {
  job: Job;
};
export default function JobDetails({ job }: params) {
  const datePosted = job.DatePosted; // Your date string

  // Create a Date object from the provided date string
  const date = new Date(datePosted);

  // Use Date methods to extract day, month, year, and time
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString();

  // Create a formatted date string
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <div className='h-full rounded-xl p-6 shadow-md shadow-gray-400 lg:h-[81.5%]'>
      <div className='grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-5'>
        <div className='order-2 col-span-2 leading-7 md:order-1'>
          <h2 className='text-primary text-h3 text-center font-bold md:text-left'>
            {job.Title}
          </h2>
          <p className='text-primary text-p text-center md:text-left'>
            {job.CompanyName}
          </p>
          <p className='text-center md:text-left'>{job.WorkingSchedule}</p>
          <p className='text-center md:text-left'>Salary: {job.Salary}</p>
          <p className='text-center md:text-left'>
            Date Posted: {formattedDate}
          </p>
        </div>
        <div className='order-1 col-span-1 flex items-center justify-center md:order-2 md:justify-end'>
          <div className=''>
            <div className='relative mb-2  h-[120px] w-[120px] overflow-hidden rounded-[100%] shadow-md shadow-gray-300 '>
              <Image
                src={job.ImageLink ? job.ImageLink : '/img/placeholder.jpg'}
                alt={job.ImageAlt ? job.ImageAlt : job.Title}
                sizes={120}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
