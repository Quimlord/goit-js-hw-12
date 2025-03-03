import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-box');
const btnLoadMore = document.getElementById('load-more');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export function renderImages(images, isNextPage = false) {
  hideLoadingView();
  if (!isNextPage) gallery.innerHTML = '';
  const galleryHtml = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
          `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${webformatURL}"
                  data-source="${largeImageURL}"
                  alt="${tags}"
                />
                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${likes}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${views}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${comments}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${downloads}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryHtml);
  lightbox.refresh();
  if (isNextPage && images.length) {
    scrollGallery();
  }
}
function scrollGallery() {
  const card = document.querySelector('.gallery-item');
  if (!card) return;
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
export function showLoadingView(isNextPage = false) {
  if (!isNextPage) {
    gallery.classList.add('hidden');
  }
  loader.classList.remove('hidden');
}
export function hideLoadingView() {
  gallery.classList.remove('hidden');
  loader.classList.add('hidden');
}
export function showMessageNoResults() {
  hideLoadingView();
  iziToast.error({
    position: 'topRight',
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: '#EF4040',
  });
}
export function showMessageLastPage() {
  iziToast.info({
    position: 'topRight',
    title: 'Info',
    message: "We're sorry, but you've reached the end of search results.",
  });
}
export function showMessageError() {
  hideLoadingView();
  iziToast.error({
    position: 'topRight',
    title: 'Error',
    message: 'An error occurred while loading images. Please try again.',
  });
}
export function showButtonLoadMore() {
  btnLoadMore.classList.remove('hidden');
}
export function hideButtonLoadMore() {
  btnLoadMore.classList.add('hidden');
}
