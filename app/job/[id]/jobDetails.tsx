import React from 'react';
import Image from 'next/image';
import { jobDescription, jobRequirement } from '@/mock-data/jobDescription';
export default function JobDetails() {
  return (
    <div className='h-full rounded-xl p-6 shadow-md shadow-gray-400'>
      <div className='flex justify-between'>
        <div className='leading-7'>
          <h2 className='text-primary text-xl font-bold'>Foreign Teachers</h2>
          <p>Ontario Education(Cambodia) Co.Ltd</p>
          <p>Full Time</p>
          <p>Salary Negotiable</p>
        </div>
        <div className='w-[120px] overflow-hidden rounded-[100%]'>
          <div className='relative h-full w-[120px]'>
            <Image
              src='/img/smart.png'
              alt='ontario-school'
              width={0}
              height={0}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      <br />
      <br />

      <h2 className='text-primary text-xl font-semibold'>Job Description</h2>
      {jobDescription.map((job, index) => (
        <ul key={index}>
          <li className='list-inside list-disc'>{job}</li>
        </ul>
      ))}
      <br />
      <br />
      <h2 className='text-primary text-xl font-semibold'>Job Requirement</h2>
      {jobRequirement.map((job, index) => (
        <ul key={index}>
          <li className='list-inside list-disc'>{job}</li>
        </ul>
      ))}
    </div>
  );
}
