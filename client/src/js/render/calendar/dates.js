import { isSunday } from 'date-fns';
import { getLastMonthDates } from '../../utils/calendar/last-month-dates';
import getCurrentMonthDates from '../../utils/calendar/current-month-dates';
import getNextMonthDates from '../../utils/calendar/next-month-dates';

const $dates = document.querySelector('.dates');
const isSund = renderingDateObj => {
  isSunday(renderingDateObj);
};

const renderDates = renderingDateObj => {
  const lastMonthDates = getLastMonthDates(renderingDateObj);
  const currentMonthDates = getCurrentMonthDates(renderingDateObj);
  const $totalDates = document.createDocumentFragment();

  const attachDate = date => {
    const $span = document.createElement('span');
    const isSunday = isSund(
      new Date(
        renderingDateObj.getFullYear(),
        renderingDateObj.getMonth(),
        date
      )
    );

    $span.textContent = `${date}`;

    // 요구 사항 5. 일요일 빨간색 표시
    if (isSunday) $span.style.color = 'red';

    $totalDates.appendChild($span);

    return $span;
  };

  lastMonthDates.forEach(date => {
    attachDate(date).style.color = 'gray';
  });
  currentMonthDates.forEach(attachDate);

  $dates.appendChild($totalDates);
};

export default renderDates;
