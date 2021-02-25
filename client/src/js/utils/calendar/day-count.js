import { format, isThisMonth, addMonths, setDate } from 'date-fns';

// const getInitialDayCount = () => getDate(new Date()) - 1;

const getInitialDayCount = () => format(new Date(), 'yyyyMMdd');

const getDifMonthDayCount = date => {
  if (isThisMonth(date)) return getInitialDayCount();

  const endDay = setDate(addMonths(date, 1), 1);
  return format(endDay, 'yyyyMMdd');
};

export { getInitialDayCount, getDifMonthDayCount };
