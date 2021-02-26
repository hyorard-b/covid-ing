# 코로나-19 확진자 정보를 간단하게, COVID-ING

![license](https://img.shields.io/badge/license-MIT-brightgreen) 
![webpack](https://img.shields.io/badge/webpack-5.23.0-lightblue) ![Babel](https://img.shields.io/badge/Babel-7.12.17-yellow)
![HTML](https://img.shields.io/badge/HTML-5-green) ![SASS](https://img.shields.io/badge/SASS-1.32.7-red) ![JavaScript](https://img.shields.io/badge/JavaScript-14.15.0-blueviolet) ![chart.js](https://img.shields.io/badge/chart.js-2.9.4-blueviolet) ![axios](https://img.shields.io/badge/axios-0.21.1-purple) ![date-fns](https://img.shields.io/badge/date--fns-2.17.0-crimson) ![Lodash](https://img.shields.io/badge/Lodash-4.17.21-blue) 
![express](https://img.shields.io/badge/express-4.17.1-yellowgreen) ![MORGAN](https://img.shields.io/badge/MORGAN-1.10.0-darkblue) 
![eslint](https://img.shields.io/badge/eslint-7.18.0-pink)

---
## 기획 의도

공공데이터 api를 활용하여 코로나-19의 정보를 제공하는 웹사이트 제작.

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

## DESIGN
Reference : [코로나 라이브](https://corona-live.com/)
Figma : https://www.figma.com/file/M8MyrYls3YhNMZtG607uXZ/Project-COVID?node-id=0%3A1

---

## API 사용
공공 데이터 포털 : https://www.data.go.kr/index.do
- [코로나-19 감염 현황](https://www.data.go.kr/data/15043376/openapi.do)
- [코로나-19 시도 발생 현황](https://www.data.go.kr/data/15043378/openapi.do)

지도 API
- [카카오 맵](ㅅhttps://apis.map.kakao.com/)

---

## 팀원별 리뷰

### 김효성

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


### 최수혁

--- 

## 마치며,