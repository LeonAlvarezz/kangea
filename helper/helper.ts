import axios from 'axios';
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
