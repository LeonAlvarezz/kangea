"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';

export default function AddJob() {
  const [formData, setFormData] = useState({
    Title: {
      CompanyName: '',
      TitleName: '',
    },
    Resource: {
      Type: '',
      Working_Schedule: 'Full-Time',
      Experience: '1 year+',
      Salary: '',
      Phone: ''
    },
    Location: '',
    ImageLink: '',
    DatePosted: new Date().toISOString().slice(0, 10),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Check if the name includes a dot, indicating a nested object
    if (name.includes('.')) {
      const [outerKey, innerKey] = name.split('.');
      setFormData({
        ...formData,
        [outerKey]: {
          ...formData[outerKey],
          [innerKey]: value,
        },
      });
    } else {
      // If not a nested object, update it directly
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Define your secret here
      const secret = 'qwerty12345';

      // Create a custom Axios instance with the x-secret header
      const api = axios.create({
        headers: {
          'x-secret': secret,
        },
      });

      // Send a POST request to your API
      const response = await api.post('http://localhost:3000/api/addpost', formData);

      // Handle the response as needed
      console.log('Job added:', response.data);

      // Clear the form or handle any other logic, e.g., redirection
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className='mt-10 flex flex-col items-center gap-3'>
        <div className='flex items-center text-3xl font-bold text-[#176B87]'>
          Describe Your Company
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Title
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Title.TitleName}
            name='Title.TitleName'
            className='w-[300px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[700px]'
            type='text'
            placeholder='Enter your job title'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Company
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Title.CompanyName}
            name='Title.CompanyName'
            className='w-[300px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[700px]'
            type='text'
            placeholder='Enter the name of your company'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Location
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Location}
            name='Location'
            className='w-[300px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[700px]'
            type='text'
            placeholder='Enter where your job is located'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Description
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Resource.Type}
            name='Resource.Type'
            className='w-[300px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[700px]'
            type='text'
            placeholder='Enter your job description'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Job Requirement
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Resource.Experience}
            name='Resource.Experience'
            className='w-[300px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[700px]'
            type='text'
            placeholder='Enter job requirements'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Salary
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Resource.Salary}
            name='Resource.Salary'
            className='w-[175px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[300px]'
            type='text'
            placeholder='Salary Range'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Contact Detail
          </label>
          <input
            onChange={handleInputChange}
            value={formData.Resource.Phone}
            name='Resource.Phone'
            className='w-[175px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[300px]'
            type='text'
            placeholder='Enter your contact detail'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-end text-xl sm:flex-col md:mr-[400px] md:flex-row'>
          <label className='mb-3 items-center text-right text-lg md:mr-20 md:w-32'>
            Company Logo
          </label>
          <input
            onChange={handleInputChange}
            value={formData.ImageLink}
            name='ImageLink'
            className='w-[175px] rounded-[15px] border border-gray-500 px-4 py-2 md:w-[300px]'
            type='text'
            placeholder='Enter your link'
          />
        </div>
        <button
          type='submit'
          className='mb-[50px] mt-5 rounded-[15px] border border-gray-500 bg-[#104f64] px-[50px] py-2 text-[20px] font-bold text-white hover:border-none hover-bg-[#023444]'
        >
          Upload
        </button>
      </form>
    </>
  );
}
