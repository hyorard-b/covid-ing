const localInf = () => {
  const isActive = e => {
    const $targetLi = e.target.closest('li');

    if (!$targetLi.lastElementChild.classList.contains('local__sub-list')) return;
    $targetLi.classList.toggle('active');

    if ($targetLi.classList.contains('active'))
      $targetLi.lastElementChild.style.height = `${$targetLi.lastElementChild.scrollHeight}px`;
    else $targetLi.lastElementChild.style.height = '0';
  };

  document.querySelector('.local--list').addEventListener('click', isActive);
};

export default localInf;
