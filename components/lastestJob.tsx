"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LastestJobItem from './lastestJobItem';

export default function LatestJob() {
  const initialJobsToShow = 3; // Initial number of jobs to show
  const jobsPerPage = 3; // Number of jobs to load per page
  const [jobsToShow, setJobsToShow] = useState(initialJobsToShow);
  const [jobs, setJobs] = useState([]);

  // Event handler for "View More" button
  const handleViewMore = () => {
    setJobsToShow(jobsToShow + jobsPerPage);
  };

  useEffect(() => {
    // Define your secret here
    const secret = 'qwerty12345';

    // Create a custom Axios instance with the x-secret header
    const api = axios.create({
      headers: {
        'X-Secret': secret,
      },
    });

    // Fetch data from the API when the component mounts
    api
      .get('http://localhost:3000/api/posts')
      .then((response) => {
        // Set the fetched data in the state
        setJobs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className='my-10'>
      <h1 className='text-h2 text-primary text-center font-bold'>Latest Jobs</h1>
      <div className='flex justify-center'>
        <p className='mb-10 h-1 w-[10%] bg-teal-300'></p>
      </div>
      <div className='grid grid-cols-1 place-items-center gap-x-36 gap-y-10 lg:grid-cols-3'>
        {jobs.slice(0, jobsToShow).map((job, index) => (
          <LastestJobItem key={index} job={job}></LastestJobItem>
        ))}
      </div>
      <div className='flex justify-center'>
        {jobsToShow < jobs.length ? (
          <button
            onClick={handleViewMore}
            className='bg-button rounded-xl px-6 py-2 font-semibold text-white'
          >
            View More
          </button>
        ) : (
          <h1>You have reached the end</h1>
        )}
      </div>
    </div>
  );
}
