const sideNavBtn = document.querySelector('.side-nav-btn');
const sideNav = document.querySelector('.side-nav');

const renderSideNav = () => {
  sideNavBtn.onclick = () => {
    sideNav.classList.toggle('active');
  };
};

export default renderSideNav;
