'use client';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Job } from '../../type/type';
import { fetchAllJobs, addPost } from '../../helper/helper';
import Image from 'next/image';
import axios from 'axios';
import uploadImageToImgBB from './utility';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function AddJob() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [photoPath, setPhotoPath] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [schedule, setSchedule] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [photo, setPhoto] = useState('');

  var date = new Date();
  const formattedDate = date.toISOString();
  const handleImageUpload = async (e) => {
    setPhoto(e.target.value);
    console.log(e.target.value);
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
  const uniqueJobs = jobs.filter((job) => {
    if (!uniqueJobTypes.has(job.Type)) {
      uniqueJobTypes.add(job.Type);
      return true;
    }
    return false;
  });

  const handleJobTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
    console.log(category);
    const jobCategory = document.getElementById('job-category');
    jobCategory.style.borderColor =
      'rgb(107 114 128 / var(--tw-border-opacity))';
  };

  const handleWorkScheduleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSchedule(event.target.value);
    const jobSchedule = document.getElementById('job-schedule');
    jobSchedule.style.borderColor =
      'rgb(107 114 128 / var(--tw-border-opacity))';
  };

  const handleExperienceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperience(event.target.value);
    const jobExperience = document.getElementById('job-experience');
    jobExperience.style.borderColor =
      'rgb(107 114 128 / var(--tw-border-opacity))';
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!category) {
      toast.warning('Please Enter Category!');
      const jobCategory = document.getElementById('job-category');
      jobCategory.style.borderColor = 'red';
      jobCategory.style.borderStyle = 'solid';
      return;
    }

    if (!schedule) {
      toast.warning('Please Enter Work Schedule!');
      const jobCategory = document.getElementById('job-schedule');
      jobCategory.style.borderColor = 'red';
      jobCategory.style.borderStyle = 'solid';
      return;
    }

    if (!experience) {
      toast.warning('Please Enter Work Experience!');
      const jobCategory = document.getElementById('job-experience');
      jobCategory.style.borderColor = 'red';
      jobCategory.style.borderStyle = 'solid';
      return;
    }

    // The code below executes only when all required fields are filled.
    const PostID = jobs[jobs.length - 1]?.PostingID || 0;
    const lastPostID = PostID + 1;

    try {
      const newJob: Job = {
        PostingID: lastPostID,
        DatePosted: formattedDate,
        Location: location,
        ImageLink: photoPath || null,
        Title: title,
        CompanyName: company,
        ResourceType: category,
        WorkingSchedule: schedule,
        Experience: experience,
        Salary: salary,
      };
      const response = await addPost(newJob);

      setTitle('');
      setCompany('');
      setCategory('');
      setLocation('');
      setSchedule('');
      setExperience('');
      setSalary('');
      setPhotoPath(null);
      setPhoto('');
    } catch (error) {
      console.error('Error Posting Job:', error);
    }
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div
        style={{ minHeight: 'calc(100vh - 100px)' }}
        className=' mt-10 md:flex md:items-center '
      >
        <form
          className='
            m-auto 
            flex
            h-full
            w-[90%]
            flex-col 
            items-center
             justify-center
            gap-5
            md:w-[70%]
          '
          onSubmit={handleSubmit}
        >
          <div className='flex items-center text-3xl font-bold text-[#176B87]'>
            Describe Your Company
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='Title' className='text-lg'>
              Job Title
            </label>
            <input
              className='col-span-2
                    w-full
                    rounded-[15px]
                    border
                    border-gray-500
                    px-4
                    py-2
                '
              name='Title'
              onChange={handleJobTitleChange}
              required
              type='text'
              value={title}
              placeholder='Enter your job title'
            />
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='CompanyName' className='text-lg'>
              Company
            </label>
            <input
              className='
            col-span-2
            w-full
            rounded-[15px]
            border
            border-gray-500
            px-4
            py-2
                '
              name='CompanyName'
              onChange={handleCompanyChange}
              required
              type='text'
              value={company}
              placeholder='Enter the name of your company'
            />
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='Location' className='text-lg'>
              Job Location
            </label>
            <input
              className='
                col-span-2
                w-full
                rounded-[15px]
                border
                border-gray-500
                px-4
                py-2
                '
              required
              onChange={handleLocationChange}
              name='Location'
              value={location}
              type='text'
              placeholder='Enter where your job located'
            />
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='ResourceType' className='text-lg'>
              Job Category
            </label>
            <select
              name='ResourceType'
              onChange={handleCategoryChange}
              id='job-category'
              value={category}
              className='col-span-2 w-full rounded-[15px] border border-gray-500 px-4 py-2'
            >
              <option value='' disabled>
                Select a Category
              </option>
              {uniqueJobs.map((job, index) => (
                <option key={index} value={job.Type}>
                  {job.Type}
                </option>
              ))}
            </select>
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='WorkSchedule' className='text-lg'>
              Work Schedule
            </label>

            <select
              name='WorkSchedule'
              id='job-schedule'
              value={schedule}
              onChange={handleWorkScheduleChange}
              className='col-span-2 w-full rounded-[15px] border border-gray-500 px-4 py-2'
            >
              <option value='' disabled>
                Select Work Schedule
              </option>
              <option value='Full-time'>Full Time</option>
              <option value='Part-time'>Part Time</option>
              <option value='Intern'>Intern</option>
            </select>
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='Experience' className='text-lg'>
              Experience
            </label>
            <select
              name='Experience'
              id='job-experience'
              value={experience}
              onChange={handleExperienceChange}
              className='col-span-2 w-full rounded-[15px] border border-gray-500 px-4 py-2'
            >
              <option value='' disabled>
                Select Experience
              </option>
              <option value='No-Experience'>No Experience</option>
              <option value='Entry'>Entry-Level</option>
              <option value='Experienced'>Experienced</option>
              <option value='Manager'>Manager</option>
            </select>
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='Salary' className='text-lg'>
              Salary
            </label>

            <input
              className='col-span-2 w-full rounded-[15px] border border-gray-500 px-4 py-2'
              type='text'
              required
              value={salary}
              onChange={handleSalaryChange}
              name='Salary'
              placeholder='Salary Range'
            />
          </div>
          <div className='grid w-full grid-cols-1 gap-3 text-xl md:grid-cols-3 md:place-items-center md:gap-0'>
            <label htmlFor='CompanyLogo' className='text-lg'>
              Company Logo
            </label>
            <div className='col-span-2 w-full rounded-[15px] border border-gray-500 px-4 py-2'>
              <input
                type='file'
                onChange={handleImageUpload}
                name='CompanyLogo'
                value={photo}
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
          <div className='grid w-full place-items-center'>
            {isLoading ? (
              <div className='loader'></div>
            ) : (
              photoPath && (
                <div className='relative h-[200px] w-[200px] '>
                  <Image
                    src={photoPath}
                    alt='preview'
                    layout='fill'
                    width={0}
                    height={0}
                    objectFit='cover'
                  />
                </div>
              )
            )}
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
        </form>
      </div>

      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
    </>
  );
}
