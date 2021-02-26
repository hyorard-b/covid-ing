import _ from 'lodash';

const goToTop = () => {
  const $scrollIcon = document.querySelector('.go-to-top');
  const POSITION_WHEN_SHOWUP = 150;

  const scrollShowup = _.throttle(() => {
    $scrollIcon.classList.toggle('showup', window.pageYOffset >= POSITION_WHEN_SHOWUP)
  }, 500);

  window.addEventListener('scroll', scrollShowup);

  $scrollIcon.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });
};

export default goToTop;
