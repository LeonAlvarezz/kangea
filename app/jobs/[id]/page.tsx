import React, { useEffect, useState } from 'react';
import LastestJobItem from '@/components/lastestJobItem';
import Navbar from '../../../components/navbar';
import ContactDetail from './component/contactDetails';
import SimilarJob from './component/similarJob';
import JobDetails from './component/jobDetails';
import { fetchJobById } from '../../../helper/helper';
import type { Job } from '../../type/type';
type Params = {
  id: number;
};

interface JobProps {
  params: Params;
}

async function Job({ params }): React.FC<JobProps> {
  const id = params.id;
  const job = await fetchJobById(id);
  var nextId = job.PostingID + 1;
  const nextJob = await fetchJobById(nextId);

  // useEffect(() => {
  //   fetchJobById(id).then((data) => {
  //     setJob(data);
  //   });
  //   let nextId: number = job.PostingID + 1;
  //   fetchJobById(nextId).then((data) => {
  //     console.log(`data:${data}`);
  //     setNextJob(data);
  //   });
  // }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div
        key={job.PostingID}
        className='flex items-center justify-center'
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <div
          className='grid-row-1 grid w-[90%] grid-cols-1 gap-5 py-4 lg:grid-cols-3 lg:grid-rows-2'
          // style={{ height: 'calc(100vh - 100px)' }}
        >
          <div className='order-2 lg:order-2 lg:row-span-1 '>
            <ContactDetail job={job}></ContactDetail>
          </div>
          <div className='order-1 lg:order-1 lg:col-span-2 lg:row-span-3'>
            <JobDetails job={job}></JobDetails>
          </div>
          <div className='order-3 lg:order-3'>
            <SimilarJob nextJob={nextJob}></SimilarJob>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
