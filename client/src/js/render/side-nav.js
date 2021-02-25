const $sideNavBtn = document.querySelector('.side-nav-btn');
const $sideNav = document.querySelector('.side-nav');

const $mainContents = document.querySelector('.main-container').children;

const renderSideNav = () => {
  $sideNavBtn.onclick = () => {
    $sideNav.classList.toggle('active');
  };

  $sideNav.onclick = e => {
    e.stopPropagation();
  };

  document.body.onclick = e => {
    if (e.target === $sideNavBtn) return;
    $sideNav.classList.remove('active');
  };

  [...document.querySelector('.nav-list').children].forEach(($link, idx) => {
    $link.onclick = () => {
      $mainContents[idx].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    };
  });
};

export default renderSideNav;
