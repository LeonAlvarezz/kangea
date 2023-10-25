import React from 'react';
import { BsFillClipboardFill } from 'react-icons/bs';
import JobCategoryItem from './jobCategoryItem';
import categories from '../../../mock-data/jobCategory';
import type { Job } from '../../../type/type';
type Props = {
  jobs: Job[];
};
export default function JobCategory({ jobs }: Props) {
  const uniqueJobTypes = new Set();

  // Filter jobs and add unique job types to the Set
  const uniqueJobs = jobs.filter((job) => {
    if (!uniqueJobTypes.has(job.Type)) {
      uniqueJobTypes.add(job.Type);
      return true;
    }
    return false;
  });

  return (
    <div className='w-full'>
      <div className='border-primary mb-6 rounded-xl border-[1px] p-2'>
        <div className='text-primary flex items-center justify-center gap-4'>
          <div className='hidden md:block'>
            <BsFillClipboardFill size={25} />
          </div>
          <h2 className='text-p text-center font-semibold'>Job Category</h2>
        </div>
      </div>
      <ul>
        {uniqueJobs.map((job, index) => (
          <li key={index}>
            <JobCategoryItem job={job}></JobCategoryItem>
          </li>
        ))}
      </ul>
    </div>
  );
}
