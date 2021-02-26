import getCityData from '../api/cityData';

const renderLocalData = async () => {
  const cityDatas = await getCityData();
  const localDataId = [...document.querySelectorAll('.has-local-data')].map(elem => elem.id);

  cityDatas.forEach((elem, index) => {
    localDataId.forEach(id => {
      if (index !== +id.substring(5, id.length)) return;
      document.getElementById(`city-${index}`).innerHTML = `                
        <p class="local__city">${elem[0]}</p> 
        <p class="local__total-cnt"><span>${elem[1]}</span> 명</p>
        <p class="local__prevday-cnt"><span>${elem[2]}</span> 명</p>
      `;
    });
  });
};

export default renderLocalData;