// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
//============================

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Spinner } from 'spin.js';

//?============================================

import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.form-js');
const gallary = document.querySelector('.gallary');
const target = document.querySelector('.js-backdrop');
const loadBtn = document.querySelector('.js-load-more');
loadBtn.addEventListener('click', handleLoadClick);
form.addEventListener('submit', handleSubmit);

const spinnerOpts = {
  lines: 9, // The number of lines to draw
  length: 42, // The length of each line
  width: 24, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 0.9, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.8, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const spinner = new Spinner(spinnerOpts);
const lightbox = new SimpleLightbox('.gallary a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let searchQuery = '';

async function handleSubmit(e) {
  e.preventDefault();
  spinnerRun();
  page = 1;
  gallary.innerHTML = '';
  searchQuery = e.target.elements.input.value.trim();
  if (searchQuery.length === 0) {
    spinnerStop();
    return iziToast.error({
      message: 'Sorry, your query is empty Please try again!',
      position: 'topRight',
    });
  }
  const res = await getPhotos(searchQuery, page);
  try {
    if (res.hits.length === 0) {
      loadBtn.classList.add('is-hidden');
      gallary.innerHTML = '';
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    gallary.insertAdjacentHTML('beforeend', createMarkup(res.hits));
    lightbox.refresh();
    if (res.totalHits > 9) {
      loadBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  } finally {
    spinnerStop();
  }
}

async function handleLoadClick() {
  spinnerRun();
  page += 1;
  const res = await getPhotos(searchQuery, page);
  try {
    const lastPage = Math.ceil(res.totalHits / 9);
    if (lastPage === page) {
      loadBtn.classList.add('is-hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
    gallary.insertAdjacentHTML('beforeend', createMarkup(res.hits));

    const imgHeight = gallary.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({
      top: imgHeight * 2,
      behavior: 'smooth',
    });
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    spinnerStop();
  }
}

function spinnerRun() {
  spinner.spin(target);
  target.classList.remove('is-hidden');
}

function spinnerStop() {
  spinner.stop(target);
  target.classList.add('is-hidden');
}
