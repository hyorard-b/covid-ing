const localInf = () => {
  // const $localList = document.querySelector('.local--list');
  // const $localSubList = document.querySelector('.local__sub-list');

  // const isActive = e => {
  //   if (!(e.target.classList.contains('local__item') || e.target.classList.contains('arrow'))) return;

  //   if (e.target.closest('li').classList.contains('active')) return;

  //   if (!e.target.closest('.local__item').nextElementSibling) return;

  //   // 액티브 빼고 넣기
  //   e.currentTarget.childNodes.forEach(child => {
  //     if (child.nodeType === 3) return;

  //     if (child.classList.contains('active')) {
  //       child.classList.remove('active');
  //       child.lastElementChild.style.height = '0';
  //     }
  //   });

  //   e.target.closest('li').classList.add('active');
  //   e.target.closest('li').lastElementChild.style.height = `${e.target.closest('li').lastElementChild.scrollHeight}px`;
  // };

  const isActive = e => {
    const $targetLi = e.target.closest('li');

    if (!$targetLi.lastElementChild.classList.contains('local__sub-list'))
      return;

    const $targetUl = e.target.closest('ul');
    const test = [...document.querySelectorAll('.local--list > li')];

    $targetLi.classList.toggle('active');
    // $targetLi.classList.remove('active');

    if ($targetLi.classList.contains('active'))
      $targetLi.lastElementChild.style.height = `${$targetLi.lastElementChild.scrollHeight}px`;
    else $targetLi.lastElementChild.style.height = '0';

    // 한 li를 클릭했을 때,

    // 1. 전에 클릭된 li요소의 active 클래스를 떼고, height를 0으로 만든다.

    // 2. 지금 클릭된 li요소에 active 클래스를 주고, height를 scrollHeight를 준다.

    // 3. 만약 지금 눌린 li가 local__sub-list 가 없는 li라면

    // 3-1. li요소들에 있는 active 클래스를 모두 뗀다.

    // 3-2. 지금 클릭된 li에 active 클래스를 주지 않는다.

    /* if (!$targetLi.lastElementChild.classList.contains('local__sub-list')) return;
    else {
      $targetLi.classList.toggle('active');
      $targetLi.lastElementChild.style.height = `${e.target.closest('li').lastElementChild.scrollHeight}px`;
    }
    
    console.log(e.target.closest('ul').children);

    if (e.target.closest('ul').children.className.contains('active')) {
      e.target.closest('li').lastElementChild.style.height = '0';
      // e.target.closest('li').children.classList.remove('active');
    };

    // if (currentTarget.) */
  };

  document.querySelector('.local--list').addEventListener('click', isActive);
};

export default localInf;
