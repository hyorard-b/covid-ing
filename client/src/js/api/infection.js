import axios from 'axios';
import { parseISO, sub, format, startOfDay } from 'date-fns';

const INFECT_URL = 'http://localhost:5000/corona/infect/';

const getInfects = async (startDay, endDay) => {
  // startDay - 1 일 거 부터 가져와야 함
  const startDayObj = parseISO(startDay);
  const dayBefore = format(sub(startDayObj, { days: 1 }), 'yyyyMMdd');

  const url = `${INFECT_URL + dayBefore}/${endDay}`;
  const { data: infects } = await axios.get(url);

  return infects.map(dailyInfect => dailyInfect.decideCnt).reverse();
};

export default getInfects;
