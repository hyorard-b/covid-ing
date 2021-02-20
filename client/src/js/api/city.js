/* url 예) http://localhost:5000/corona/city/20210217 */

import axios from 'axios';

const CITY_URL = 'http://localhost:5000/corona/city/';

// date 형식은 위와 같이 '20210220' 형식이어야 함
const getCityData = async date => {
  const url = CITY_URL + date;
  const data = await axios.get(url);

  return data;
};

getCityData('20210220');
