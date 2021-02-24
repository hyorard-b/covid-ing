import axios from 'axios';
import { parseISO, format } from 'date-fns';

const INFECT_URL = 'http://localhost:5000/corona/infect/';

const getInfects = async (startDay, endDay) => {
  // startDay - 1 일 거 부터 가져와야 함
  const startDayObj = parseISO(startDay);
  const dayBefore = format(startDayObj, 'yyyyMMdd');

  const url = `${INFECT_URL + dayBefore}/${endDay}`;
  const { data } = await axios.get(url);

  // 중복 제거
  const infects = [...data].reduce((infects, infect) => {
    const isDuplicated =
      infects.filter(({ stateDt }) => infect.stateDt === stateDt).length > 0;

    if (isDuplicated) return infects;
    infects.push({ stateDt: infect.stateDt, decideCnt: infect.decideCnt });

    return infects;
  }, []);

  return infects.map(dailyInfect => dailyInfect.decideCnt).reverse();
};

export default getInfects;
