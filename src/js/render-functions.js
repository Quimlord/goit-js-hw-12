import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 200,
});

export function markup(images) {
  const markup = images
    .map(
      image => `
        <li class="gallery__item">
          <a class="gallery__link" href="${image.largeImageURL}">
            <img class="gallery__img" src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="gallery__info">
            <p>Likes: <span>${image.likes}</span></p>
            <p>Views: <span>${image.views}</span></p>
            <p>Comments: <span>${image.comments}</span></p>
            <p>Downloads: <span>${image.downloads}</span></p>
          </div>
        </li>
      `
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
