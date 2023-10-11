import React from 'react';
import jobs from '@/mock-data/jobs';
import LastestJobItem from '@/components/lastestJobItem';
type params = {
  id: number;
};
export default function ProductDetails({ params }) {
  const id = params.id;
  const filteredJobs = jobs.filter((job) => job.id == params.id);

  return (
    <div>
      {filteredJobs.map((job) => (
        <LastestJobItem key={job.id} job={job}></LastestJobItem>
      ))}
    </div>
  );
}
