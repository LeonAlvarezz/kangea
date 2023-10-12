import React from 'react';
import jobs from '@/mock-data/jobs';
import LastestJobItem from '@/components/lastestJobItem';
import Navbar from '@/components/navbar';
import { Hi_Melody } from 'next/font/google';
import ContactDetail from './contactDetails';
import SimilarJob from './similarJob';
import JobDetails from './jobDetails';
type Params = {
  id: number;
};

interface ProductDetailsProps {
  params: Params;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const id = params.id;
  const filteredJobs = jobs.filter((job) => job.id == params.id);

  return (
    <div>
      <Navbar></Navbar>
      {filteredJobs.map((job) => (
        <div key={job.id} className='flex h-[90%] items-center justify-center'>
          <div
            className='sm:grid-row-1 grid w-[90%] gap-5 py-4 sm:grid-cols-1 md:grid-cols-3 md:grid-rows-3'
            // style={{ height: 'calc(100vh - 100px)' }}
          >
            <div className='order-1 md:order-3 md:row-span-2 '>
              <ContactDetail></ContactDetail>
            </div>
            <div className='order-3 md:order-1 md:col-span-2 md:row-span-3'>
              <JobDetails></JobDetails>
            </div>
            <div className='md:order-2'>
              <SimilarJob></SimilarJob>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
