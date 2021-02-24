import getCityData from '../api/cityData';

const renderLocalData = async () => {
  const cityDatas = await getCityData();
  const hasLocalDataId = [...document.querySelectorAll('.has-local-data')].map(elem => elem.id);
  
  cityDatas.forEach((elem, index) => {
    hasLocalDataId.forEach((_, i) => {
      if (index !== +hasLocalDataId[i].substring(5, hasLocalDataId[i].length)) return;
      document.getElementById(`city-${index}`).innerHTML = `                
        <p class="local__city">${elem[0]}</p> 
        <p class="local__totalCnt">총<span>${elem[1]}</span> 명</p>
        <p class="local__yesterdayCnt"><span>${elem[2]}</span> 명</p>
      `;
    });
  });
};

export default renderLocalData;