# 코로나-19 확진자 정보를 간단하게, COVID-ING
<br>

![license](https://img.shields.io/badge/license-MIT-brightgreen)  
![webpack](https://img.shields.io/badge/webpack-5.23.0-lightblue) ![Babel](https://img.shields.io/badge/Babel-7.12.17-yellow)  
![HTML](https://img.shields.io/badge/HTML-5-green) ![SASS](https://img.shields.io/badge/SASS-1.32.7-red) ![JavaScript](https://img.shields.io/badge/JavaScript-14.15.0-blueviolet) ![chart.js](https://img.shields.io/badge/chart.js-2.9.4-blueviolet) ![axios](https://img.shields.io/badge/axios-0.21.1-purple) ![date-fns](https://img.shields.io/badge/date--fns-2.17.0-crimson) ![Lodash](https://img.shields.io/badge/Lodash-4.17.21-blue)  
![express](https://img.shields.io/badge/express-4.17.1-yellowgreen) ![MORGAN](https://img.shields.io/badge/MORGAN-1.10.0-darkblue)  
![eslint](https://img.shields.io/badge/eslint-7.18.0-pink)  
  
---
  
## 기획 의도

자바스크립트 및 공공데이터 api를 활용하여 코로나-19 확진자 정보를 제공하는 웹페이지 제작.  
  
---
  
## 팀원 소개

[김효성](https://github.com/hyorard-b)  
[배근아](https://github.com/green9930)  
[최수혁](https://github.com/choisuhyeok1255)  
  
---
  
## 프로젝트 진행

1. 구상 및 기획 (프로젝트 주제, 사용 기술)  
2. 코딩 컨벤션 결정 및 마크업  
3. 기능 구현  
4. 리팩토링  
  
---
  
## DEMO

![covid-ing 데모 영상](./assets/demo.gif)  
  
---
  
## DESIGN

Reference : [코로나 라이브](https://corona-live.com/)  

Figma : https://www.figma.com/file/M8MyrYls3YhNMZtG607uXZ/Project-COVID?node-id=0%3A1  
  
---
  
## API 사용

공공 데이터 포털 : https://www.data.go.kr/index.do  
- [코로나-19 감염 현황](https://www.data.go.kr/data/15043376/openapi.do)
- [코로나-19 시도 발생 현황](https://www.data.go.kr/data/15043378/openapi.do)

지도 API  
- [카카오 맵](https://apis.map.kakao.com/)
  
---
  
## 팀원별 리뷰
   
### 김효성

- 서버, 클라이언트 개발 환경 설정  
- 서버 API  
- 클라이언트 API  
- 헤더  
- 사이드 네비게이션  
- 월별 확진자 현황  
<br>

**감염 현황 데이터 형식**  
  
```json
[
  {
      "accDefRate": 1.3635992813,
      "accExamCnt": 6590066,
      "accExamCompCnt": 6521124,
      "careCnt": 7457,
      "clearCnt": 79880,
      "createDt": "2021-02-26 09:32:51.735",
      "deathCnt": 1585,
      "decideCnt": 88922,
      "examCnt": 68942,
      "resutlNegCnt": 6432202,
      "seq": 431,
      "stateDt": 20210226,
      "stateTime": "00:00",
      "updateDt": "null"
  },
  {
      "accDefRate": 1.3654520094,
      "accExamCnt": 6551214,
      "accExamCompCnt": 6482542,
      "careCnt": 7448,
      "clearCnt": 79487,
      "createDt": "2021-02-25 09:31:53.266",
      "deathCnt": 1581,
      "decideCnt": 88516,
      "examCnt": 68672,
      "resutlNegCnt": 6394026,
      "seq": 430,
      "stateDt": 20210225,
      "stateTime": "00:00",
      "updateDt": "null"
  },
  {
      "accDefRate": 1.3691733996,
      "accExamCnt": 6510988,
      "accExamCompCnt": 6436000,
      "careCnt": 7494,
      "clearCnt": 79050,
      "createDt": "2021-02-24 09:33:42.127",
      "deathCnt": 1576,
      "decideCnt": 88120,
      "examCnt": 74988,
      "resutlNegCnt": 6347880,
      "seq": 429,
      "stateDt": 20210224,
      "stateTime": "00:00",
      "updateDt": "null"
  }
]
```
<br>
  
**감염 현황 데이터 정제**   

```js
  const getInfectPerDay = async (startDay, dayCount) => {
    const data = await getInfects(startDay, dayCount);

    if (!data) return false;

    // 중복 제거
    const setOfData = [...data].reduce((infects, infect) => {
      const isDuplicated =
        infects.filter(({ stateDt }) => infect.stateDt === stateDt).length > 0;

      if (isDuplicated) return infects;
      infects.push({ stateDt: infect.stateDt, decideCnt: infect.decideCnt });

      return infects;
    }, []);

    const infects = setOfData.map(dailyInfect => dailyInfect.decideCnt).reverse();

    // 잘못된 api 데이터 처리
    infects.sort();

    const dailyInfects = infects.reduce(
      (dailyInfects, dayInfect, day, infects) => {
        if (day === 0) return dailyInfects;

        dailyInfects.push(dayInfect - infects[day - 1]);

        return dailyInfects;
      },
      []
    );

    return dailyInfects;
};
```
<br>
  
**월 별 감염 현황 범주 계산**  
  
```js
const calcInfectLegend = infectsPerDay => {
  const [minInfect, maxInfect] = [
    Math.min(...infectsPerDay),
    Math.max(...infectsPerDay)
  ];

  return [0.2, 0.4, 0.6, 0.8, 1].map(percentage =>
    Math.floor(minInfect + (maxInfect - minInfect) * percentage)
  );
};
```
<br>
  
**달력 일자 렌더링 및 잔디 찍기**  

  ```javascript

    refactoring...
  
  ```
<br>

### 배근아

- COVID-ING 웹페이지 디자인 
- 지역별 확진자 (시도 발생 현황 api)
<br>
  
**지역별 확진자 데이터**  
  
```js
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
    .filter((_, i) => !(i === 0 || i === 9 || i === 18));
};

export default getCityData;
```
<br>

  
**지역별 확진자 아코디언 ui**  
  
```html
<ul class="local--list" aria-label="지역별 확진자 목록">
  <li>
    <div id="city-15" class="has-local-data local__item">
      <!-- 서울특별시 -->
    </div>
  </li>
  <li>
    <div class="local__item">
      <p class="local__city">경기도</p>
      <span class="arrow material-icons">keyboard_arrow_down</span>
    </div>
    <div class="local__sub-list">
      <div id="city-12" class="has-local-data local__details">
        <!-- 인천광역시 -->
      </div>
    </div>
  </li>
```
  
```js
const isActive = e => {
  const $targetLi = e.target.closest('li');

  if (!$targetLi.lastElementChild.classList.contains('local__sub-list')) return;
  $targetLi.classList.toggle('active');

  if ($targetLi.classList.contains('active'))
    $targetLi.lastElementChild.style.height = `${$targetLi.lastElementChild.scrollHeight}px`;
  else $targetLi.lastElementChild.style.height = '0';
};

document.querySelector('.local--list').addEventListener('click', isActive);
```
<br>
  
### 최수혁  
  
- 팝업창 (다크모드)
- 일별/월별 확진자 탭 ui
- 일별 확진자 그래프 (chart.js + 코로나 API)
- 인접 선별 진료소 (map API)
<br>
  
**chart part**
  
(확진자 수 API)  
  
```js
const confirmedPerson = await getInfectPerDay(
  getsevendaysBefore(),
  getToday()
);
```
<br>

(7일전 날짜 계산)  
  
```js
const getsevendaysBefore = () => {
  const today = getToday();
  const sevendaysBefore = +today - 7 + '';

  return sevendaysBefore;
};
```
<br>
  
(차트 x축 날짜 입력)  
  
```js
const getsevenDays = () => {
  const days = [];
  const date = new Date();

  for (let i = 1; i < 8; i++) {
    days.push(format(subDays(date, i), 'MM/dd'));
  }

  return days.reverse();
};
```
<br>
  
**map part**  
  
```js
const distance = [];
const linePath = [];

for (let i = 0; i < data.length; i++) {
  const { x, y } = data[i];

  linePath = [new kakao.maps.LatLng(lat, lon),
              new kakao.maps.LatLng(y, x)];

  let polyline = new kakao.maps.Polyline({
        path: linePath, 
              strokeWeight: 5, 
              strokeColor: '#FFAE00', 
              strokeOpacity: 0.7, 
              strokeStyle: 'solid' 
            });

  // 지도에 직선거리(선) 표시
  // polyline.setMap(map);

  // 선 길이를 계산해서 distance에 넣어줌
  distance.push(polyline.getLength());

  // api에서 받은 객체에 직선거리 넣어줌
  data[i].distance = distance[i];

  //data 안의 객체.distance를 정렬하는 함수
  function objectSort(a, b) {
    return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0;
  }

  //api에서 받은 배열의 객체안에 직선 길이 짧은 순으로 정렬
  data.sort(objectSort);
}
```
<br>
  
--- 
  
## 마치며,