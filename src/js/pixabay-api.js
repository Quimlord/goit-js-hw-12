import axios from 'axios';

const API_KEY = '49142387-370a201ec94f73d63c9116370';
const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api';

export async function getPhotos(q, page) {
  const params = {
    q,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
    page,
  };
  const options = new URLSearchParams(params);
  const url = `${BASE_URL}${END_POINT}/?${options}`;

  const res = await axios.get(url);
  try {
    return res.data;
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Ups.. Something wrong',
      position: 'topRight',
    });
  }
}
