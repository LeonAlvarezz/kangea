import axios from 'axios';
import type { Job } from '../type/type';
import { toast } from 'react-toastify';

const secret = process.env.NEXT_PUBLIC_API_SECRET;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'X-secret': secret,
  },
});

export async function fetchAllJobs() {
  try {
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`
    );

    return response.data;
  } catch (error) {
    console.error('Error Fetching Data', error);
    throw error;
  }
}

export async function fetchJobById(jobId: number) {
  try {
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${jobId}`
    );

    return response.data;
  } catch (error) {
    console.error('Error Fetching Data', error);
    throw error;
  }
}

export async function addPost(job: Job) {
  try {
    const response = await api.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/addpost`,
      job
    );
    if (response.status === 200 || response.status === 201) {
      // The POST request was successful
      toast.success('Job posted successfully');
    } else {
      // The server responded with an error status
      toast.error('Error posting the job');
    }
  } catch (e) {
    console.error('Error Posting Job', e);
  }
}
