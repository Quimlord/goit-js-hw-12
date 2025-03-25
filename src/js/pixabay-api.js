import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49142387-370a201ec94f73d63c9116370';

export async function getImages(value) {
  let params = {
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  //   return await axios
  //     .get(BASE_URL, { params })
  //     .then(res => {
  //       if (res.data.hits.length === 0) {
  //         iziToast.error({
  //           message:
  //             'Sorry, there are no images matching your search query. Please try again!',
  //           position: 'topRight',
  //           pauseOnHover: true,
  //           balloon: true,
  //         });
  //       }
  //       return res.data.hits;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       throw error;
  //     });

  try {
    const res = await axios.get(BASE_URL, { params });
    if (res.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        pauseOnHover: true,
        balloon: true,
      });
    }
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
