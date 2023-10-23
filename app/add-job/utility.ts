import axios from 'axios';

async function uploadImageToImgBB(image) {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await axios.post(
      'https://api.imgbb.com/1/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: {
          key: '7c22aa68a489e655f2742fd476d0d56f',
        },
      }
    );
    console.log(response.data.data.display_url);
    return response.data.data.display_url;
  } catch (error) {
    throw error;
  }
}

export default uploadImageToImgBB;
