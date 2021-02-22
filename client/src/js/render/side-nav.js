const contentContainer = document.querySelector('.content-container');
const sideNavBtn = document.querySelector('.side-nav-btn');
const sideNav = document.querySelector('.side-nav');

const renderSideNav = () => {
  sideNavBtn.onclick = () => {
    sideNav.classList.toggle('active');
  };

  sideNav.addEventListener('transitionend', e => {
    if (!e.target.classList.contains('active')) return;
    sideNav.style.zIndex = 1;
  });

  sideNav.addEventListener('transitionstart', e => {
    if (e.target.classList.contains('active')) return;
    sideNav.style.zIndex = -99;
  });

  sideNav.onclick = e => {
    e.stopPropagation();
  };

  document.body.onclick = e => {
    console.log(e.target);
    if (e.target === sideNavBtn) return;
    sideNav.classList.remove('active');
  };
};

export default renderSideNav;
