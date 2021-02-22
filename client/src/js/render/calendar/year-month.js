import { format } from 'date-fns';

// 연, 월 렌더링
const renderYearMonth = today => {
  const $year = document.querySelector('.year');
  const $month = document.querySelector('.month');

  $year.textContent = format(today, 'yyyy');
  $month.textContent = format(today, 'MMMM');
};

export default renderYearMonth;
