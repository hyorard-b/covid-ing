const express = require('express');
const axios = require('axios');

const serviceKey = process.env.API_KEY;
const router = express.Router();

const encodeURI = (url, date) => {
  url += `?${encodeURIComponent('serviceKey')}=${serviceKey}`;
  url += `&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}`;
  url += `&${encodeURIComponent('numOfRows')}=${encodeURIComponent('10')}`;
  url += `&${encodeURIComponent('startCreateDt')}=${encodeURIComponent(date)}`;
  url += `&${encodeURIComponent('endCreateDt')}=${encodeURIComponent(`${+date}`)}`;

  return url;
};

// get city corona data
const getCityStatusData = async (date) => {
  const encodedURI = encodeURI(process.env.CITY_URL, date);
  const res = await axios.get(encodedURI);
  return res.data;
};

// get infect status data
const getInfectStatusData = async (date) => {
  const encodedURI = encodeURI(process.env.INFECT_URL, date);
  const res = await axios.get(encodedURI);
  return res.data;
};

router.get('/city/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const data = await getCityStatusData(date);

    res.json(data.response.body.items.item);
  } catch (e) {
    console.error(e);
  }
});

router.get('/infect/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const data = await getInfectStatusData(date);

    res.json(data.response.body.items.item);
  } catch (e) {
    console.error(e);
  }
});
module.exports = router;
