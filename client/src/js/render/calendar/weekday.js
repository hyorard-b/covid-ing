const renderWeekDays = () => {
  const $days = document.querySelector('.weekdays');

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const $fragment = document.createDocumentFragment();
  days.forEach(day => {
    const $span = document.createElement('span');
    $span.textContent = `${day}`;
    $fragment.appendChild($span);
  });
  $days.appendChild($fragment);
};

export default renderWeekDays;
