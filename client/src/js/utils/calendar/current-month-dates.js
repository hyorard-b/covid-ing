import { getLastDate } from './last-month-dates';

// 이번 달 일수
const getCurrentMonthDays = dateObj => {
  const lastDay = getLastDate(dateObj.getMonth() + 1);
  const currentMonthDays = [];
  for (let i = 1; i < +lastDay + 1; i++) {
    currentMonthDays.push(i);
  }
  return currentMonthDays;
};

export default getCurrentMonthDays;
