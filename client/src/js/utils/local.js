const localInf = () => {
  const $localList = document.querySelector('.local--list');
  const $localSubList = document.querySelector('.local__sub-list');

  const isActive = e => {
    if (!(e.target.classList.contains('local__item') || e.target.classList.contains('arrow'))) return;

    if (e.target.closest('li').classList.contains('active')) return;

    if (!e.target.closest('.local__item').nextElementSibling) return;

    // 액티브 빼고 넣기
    e.currentTarget.childNodes.forEach(child => {
      if (child.nodeType === 3) return;

      if (child.classList.contains('active')) {
        child.classList.remove('active');
        child.lastElementChild.style.height = '0';
      }
    });

    e.target.closest('li').classList.add('active');
    e.target.closest('li').lastElementChild.style.height = `${e.target.closest('li').lastElementChild.scrollHeight}px`;
  };

  $localList.addEventListener('click', isActive);
};

export default localInf;
