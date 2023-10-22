'use client';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import type { Job } from '../../type/type';
import { fetchAllJobs } from '../../helper/helper';
import Image from 'next/image';
import axios from 'axios';
import uploadImageToImgBB from './utility';

export default function AddJob() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [uploadJob, setUploadJob] = useState<Job>({});
  const [photoPath, setPhotoPath] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   // const reader = new FileReader();
  //   // reader.onloadend = () => {
  //   //   const base64StringUS = reader.result
  //   //     .replace('data:', '')
  //   //     .replace(/^.+,/, '');
  //   //   localStorage.setItem('wallpaperXXX', base64StringUS);
  //   //   // const myImage = localStorage.getItem('wallpaperXXX');
  //   //   // var bannerImg = document.getElementById('tableBanner');
  //   //   // bannerImg.src = 'data:image/png;base64,' + myImage;
  //   //   console.log(base64StringUS);
  //   //   //document.body.style.background = `url(data:image/png;base64,${base64StringUS})`;
  //   // };
  //   // reader.readAsDataURL(file);
  // };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setIsLoading(true);
    try {
      const imgbbUrl = await uploadImageToImgBB(file);
      console.error(imgbbUrl);
      setPhotoPath(imgbbUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
      // Handle the error
    } finally {
      setIsLoading(false); // Reset loading state when upload is done
    }
  };

  useEffect(() => {
    fetchAllJobs().then((data) => {
      setJobs(data);
    });
  }, []);
  const uniqueJobTypes = new Set();

  // Filter jobs and add unique job types to the Set
  const uniqueJobs: Job[] = jobs.filter((job) => {
    if (!uniqueJobTypes.has(job.Type)) {
      uniqueJobTypes.add(job.Type);
      return true;
    }
    return false;
  });

  const handleJobTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUploadJob((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUploadJob((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUploadJob((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUploadJob((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar></Navbar>
      <form
        className='
            mt-10 
            flex 
            flex-col 
            items-center 
            gap-3'
      >
        <div className='flex items-center text-3xl font-bold text-[#176B87]'>
          Describe Your Company
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Title
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            required
            type='text'
            placeholder='Enter your job title'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Company
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            required
            type='text'
            placeholder='Enter the name of your company'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Location
          </label>
          <input
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[700px]
                '
            required
            type='text'
            placeholder='Enter where your job located'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Category
          </label>
          <select
            name='resource-type'
            className='
                     w-[300px]
                     rounded-[15px]
                     border
                     border-gray-500
                     px-4
                     py-2
                     md:w-[300px]
                 '
          >
            {uniqueJobs.map((job, index) => (
              <option key={index} value={job.Type}>
                {job.Type}
              </option>
            ))}
          </select>
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Work Schedule
          </label>
          <select
            name='work-schedule'
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[300px]
                '
          >
            <option value='full-time'>Full Time</option>
            <option value='part-time'>Part Time</option>
            <option value='intern'>Intern</option>
          </select>
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Experience
          </label>
          <select
            name='work-schedule'
            className='
                    w-[300px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[300px]
                '
          >
            <option value='no-experience'>No Experience</option>
            <option value='entry'>Entry-Level</option>
            <option value='experienced'>Experienced</option>
            <option value='manager'>Manager</option>
          </select>
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Salary
          </label>
          <input
            className='
                    w-[175px]
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                    md:w-[300px]
                '
            type='text'
            required
            placeholder='Salary Range'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Company Logo
          </label>
          <div
            className='
                    w-[300px]
                    flex-row
                    rounded-[15px]
                    px-4
                    py-2
                    md:w-[300px]
                    md:border
                    md:border-gray-500
                '
          >
            <input
              type='file'
              onChange={handleImageUpload}
              className='
                    block 
                    w-full 
                    text-sm 
                    text-slate-800
                    file:mr-4 
                    file:rounded-full 
                    file:border-0
                    file:bg-[#176B87] 
                    file:px-4
                    file:py-2 
                    file:text-sm
                    file:font-semibold 
                    file:text-white
                    hover:file:bg-[#023444]
                     '
            />
          </div>
        </div>
        <button
          className='
                mb-[50px]
                mt-5
                rounded-[15px]
                border
                border-gray-500
                bg-[#104f64]
                px-[50px]
                py-2
                text-[20px]
                font-bold
                text-white
                hover:border-none
                hover:bg-[#023444]
            '
        >
          Upload
        </button>
        {isLoading && <p>Loading....</p>} {/* Display loading indicator */}
      </form>
      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
      {photoPath && <Image src={photoPath} alt='' width={300} height={300} />}
    </>
  );
}
