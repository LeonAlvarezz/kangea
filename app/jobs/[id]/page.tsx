import React from 'react';
import jobs from '../../../mock-data/jobs';
import LastestJobItem from '@/components/lastestJobItem';
import Navbar from '../../../components/navbar';
import ContactDetail from './component/contactDetails';
import SimilarJob from './component/similarJob';
import JobDetails from './component/jobDetails';
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
        <div
          key={job.id}
          className='flex items-center justify-center'
          style={{ minHeight: 'calc(100vh - 100px)' }}
        >
          <div
            className='sm:grid-row-1 grid w-[90%] gap-5 py-4 sm:grid-cols-1 md:grid-cols-3 md:grid-rows-3'
            // style={{ height: 'calc(100vh - 100px)' }}
          >
            <div className='order-2 md:order-2 md:row-span-2 '>
              <ContactDetail></ContactDetail>
            </div>
            <div className='order-1 md:order-1 md:col-span-2 md:row-span-3'>
              <JobDetails></JobDetails>
            </div>
            <div className='order-3 md:order-3'>
              <SimilarJob></SimilarJob>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
