import axios from 'axios';

const INFECT_URL = 'http://localhost:5000/corona/infect/';

const getInfects = async (startDay, endDay) => {
  const url = `${INFECT_URL + startDay}/${endDay}`;
  const { data } = await axios.get(url);

  console.log(data);

  // return infects.map(({ data }) => data.decideCnt).reverse();
};

export default getInfects;
