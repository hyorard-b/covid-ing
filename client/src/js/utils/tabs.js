const tabHandler = () => {
  const $tabNav = document.querySelector('.tab-nav');
  const $tab1 = document.querySelector('.tab1');
  const $tab2 = document.querySelector('.tab2');
  const $tabContent1 = document.querySelector('.tab-content1');
  const $tabContent2 = document.querySelector('.tab-content2');

  $tabNav.onclick = e => {
    if(e.target.type !== 'radio') return;
    
    if(e.target.classList.contains('tab1')) {
      $tabContent1.classList.remove('active');
      $tabContent2.classList.remove('active');
      $tabContent1.classList.add('active');
    }

    if(e.target.classList.contains('tab2')) {
      $tabContent1.classList.remove('active');
      $tabContent2.classList.remove('active');
      $tabContent2.classList.add('active');
    }
  };
}

export default tabHandler;