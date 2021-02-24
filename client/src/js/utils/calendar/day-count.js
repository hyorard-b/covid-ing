import { format, endOfMonth, isThisMonth, setDate } from 'date-fns';

// const getInitialDayCount = () => getDate(new Date()) - 1;

const getInitialDayCount = () => format(new Date(), 'yyyyMMdd');

const getDifMonthDayCount = date => {
  if (isThisMonth(date)) return getInitialDayCount();

  const endDay = endOfMonth(date);
  const tmp = new Date();
  setDate(tmp, endDay);
  return format(tmp, 'yyyyMMdd');
};

export { getInitialDayCount, getDifMonthDayCount };
