import React from 'react';
import { Job } from '../../../type/type';
type Props = {
  job: Job;
};

export default function JobCategoryItem({ job }: Props) {
  return (
    <div className='border-primary rounded-xl border-[1px] p-2 hover:cursor-pointer hover:bg-[--primary] hover:text-white'>
      <div className='h-full'>
        <h2 className='text-p text-center'>{job.Type}</h2>
      </div>
    </div>
  );
}
