const $sideNavBtn = document.querySelector('.side-nav-btn');
const $sideNav = document.querySelector('.side-nav');

const $mainContents = document.querySelector('.main-container').children;

const renderSideNav = () => {
  $sideNavBtn.onclick = () => {
    $sideNav.classList.toggle('active');
  };

  // 사이드 네비게이션 내부 클릭시
  $sideNav.onclick = e => {
    e.stopPropagation();
  };

  // 사이드 내비게이션 외부 클릭시
  document.body.onclick = e => {
    if (e.target === $sideNavBtn) return;
    $sideNav.classList.remove('active');
  };

  // 링크 클릭 시 링크에 해당하는 컨텐츠 컨테이너로 이동
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
