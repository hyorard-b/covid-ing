import { isSunday } from 'date-fns';
import { getLastMonthDates } from '../../utils/calendar/last-month-dates';
import getCurrentMonthDates from '../../utils/calendar/current-month-dates';

const $dates = document.querySelector('.dates');
const isSund = renderingDateObj => {
  isSunday(renderingDateObj);
};
const mowColors = [
  'rgba(21, 183, 72, 0.2)',
  'rgba(21, 183, 72, 0.4)',
  'rgba(21, 183, 72, 0.6)',
  'rgba(21, 183, 72, 0.8)',
  'rgba(21, 183, 72, 1)'
];

const renderDates = (renderingDateObj, infectsPerDay, legends) => {
  const lastMonthDates = getLastMonthDates(renderingDateObj);
  const currentMonthDates = getCurrentMonthDates(renderingDateObj);
  const $totalDates = document.createDocumentFragment();

  const mowArr = infectsPerDay.map(infect => {
    return legends.reduce((legendIdx, legend, idx) => {
      if (infect > legend) return idx + 1;
      return legendIdx;
    }, 0);
  });

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
    const $date = attachDate(date);
    $date.textContent = '';
    $date.style.backgroundColor = 'transparent';
  });
  currentMonthDates.forEach((date, idx) => {
    const $date = attachDate(date);

    $date.style.backgroundColor = `${mowColors[mowArr[idx]]}`;

    if (idx >= infectsPerDay.length) $date.style.backgroundColor = 'gray';
  });

  $dates.appendChild($totalDates);
};

export default renderDates;
