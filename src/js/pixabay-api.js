import axios from 'axios';

export async function getImages(input, page) {
  const API_KEY = '49142387-370a201ec94f73d63c9116370';
  const query = encodeURIComponent(input);
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 15,
  });

  const URL = `https://pixabay.com/api/?${urlParams}`;

  const { data } = await axios.get(URL);

  return data;
}
