import { setDate, format } from 'date-fns';

const getStartDay = date => {
  const renderingDate = setDate(date, 1);
  return format(renderingDate, 'yyyyMMdd');
};

export default getStartDay;
