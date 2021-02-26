# 코로나-19 확진자 정보를 간단하게, COVID-ING

![license](https://img.shields.io/badge/license-MIT-brightgreen) 
![webpack](https://img.shields.io/badge/webpack-5.23.0-lightblue) ![Babel](https://img.shields.io/badge/Babel-7.12.17-yellow)
![HTML](https://img.shields.io/badge/HTML-5-green) ![SASS](https://img.shields.io/badge/SASS-1.32.7-red) ![JavaScript](https://img.shields.io/badge/JavaScript-14.15.0-blueviolet) ![chart.js](https://img.shields.io/badge/chart.js-2.9.4-blueviolet) ![axios](https://img.shields.io/badge/axios-0.21.1-purple) ![date-fns](https://img.shields.io/badge/date--fns-2.17.0-crimson) ![Lodash](https://img.shields.io/badge/Lodash-4.17.21-blue) 
![express](https://img.shields.io/badge/express-4.17.1-yellowgreen) ![MORGAN](https://img.shields.io/badge/MORGAN-1.10.0-darkblue) 
![eslint](https://img.shields.io/badge/eslint-7.18.0-pink)

---
## 기획 의도

2020년부터 현재까지 전세계적으로 가장 큰 이슈인 코로나-19의 

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
공공 데이터 포털 https://www.data.go.kr/index.do

[코로나-19 감염 현황](https://www.data.go.kr/data/15043376/openapi.do)
[코로나-19 시도 발생 현황](https://www.data.go.kr/data/15043378/openapi.do)

---

## 팀원별 리뷰

### 김효성

### 배근아
- COVID-ING 전체 디자인 
- 지역별 확진자 탭



### 최수혁
- 팝업창 (다크모드)
- 일별/월별 확진자 탭 ui 구현
- 일별 확진자 그래프 (chart.js + 코로나 API)
- 인접 선별 진료소 (map API)

**chart part**

(확진자 수 API)
```js
const confirmedPerson = await getInfectPerDay(
  getsevendaysBefore(),
  getToday()
);
```

(7일전 날짜 계산)
```js
const getsevendaysBefore = () => {
  const today = getToday();
  const sevendaysBefore = +today - 7 + '';

  return sevendaysBefore;
};
```

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

--- 

## 마치며,