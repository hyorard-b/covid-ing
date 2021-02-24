const sideNavBtn = document.querySelector('.side-nav-btn');
const sideNav = document.querySelector('.side-nav');

const renderSideNav = () => {
  sideNavBtn.onclick = () => {
    sideNav.classList.toggle('active');
  };

  sideNav.onclick = e => {
    e.stopPropagation();
  };

  document.body.onclick = e => {
    if (e.target === sideNavBtn) return;
    sideNav.classList.remove('active');
  };
};

export default renderSideNav;
