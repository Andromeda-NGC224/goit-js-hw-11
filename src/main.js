`use strict`;

import { input, fetchOn } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// /iziToast

const form = document.querySelector(`.form`);
const btn = document.querySelector(`.btn`);

form.addEventListener(`submit`, event => {
  const inputTrim = input.value.trim();
  if (inputTrim === ``) {
    event.preventDefault();
    form.reset();
    return;
  }
  event.preventDefault();

  fetchOn()
    .then(data => {
      if (data.hits.length <= 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      render(data);
    })
    .catch(error => console.log(error));
  form.reset();
});

// btn.addEventListener(`click`, () => {
//   imgList.innerHTML(``);
// });
