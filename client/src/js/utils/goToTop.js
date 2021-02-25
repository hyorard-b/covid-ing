import _ from 'lodash';

const goToTop = () => {
  const $scrollIcon = document.querySelector('.go-to-top');

  window.addEventListener(
    'scroll',
    _.throttle(() => {
      $scrollIcon.style.display = window.pageYOffset >= 200 ? 'block' : 'none';
    })
  );

  $scrollIcon.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });
};

export default goToTop;
