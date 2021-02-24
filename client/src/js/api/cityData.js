import axios from 'axios';
import { format } from 'date-fns';

const getCityData = async () => {
  const CITY_URL = 'http://localhost:5000/corona/city/';
  const today = format(new Date(), 'yyyyMMdd');
  const url = CITY_URL + today;
  const { data } = await axios.get(url);

  return [...data]
    .map(({ gubun, defCnt, incDec }) => {
      return [gubun, defCnt, incDec];
    })
    .filter((_, i) => 
      (i === 18 || i === 0 || i === 9) ? false : true
    )
};

export default getCityData;
