/* url 예) http://localhost:5000/corona/city/20210217 */

import axios from 'axios';

const INFECT_URL = 'http://localhost:5000/corona/infect/';

// date 형식은 위와 같이 '20210220' 형식이어야 함
const getInfectionData = async date => {
  const url = INFECT_URL + date;
  const data = await axios.get(url);

  return data;
};

getInfectionData('20210220');
