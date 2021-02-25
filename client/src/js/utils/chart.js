import Chart from 'chart.js';
import { format, subDays } from 'date-fns';
import getInfectPerDay from './infects';

const myChartOne = document.getElementById('covid-chart').getContext('2d');

const barChart = async () => {
  const confirmedPerson = await getInfectPerDay(
    getsevendaysBefore(),
    getToday()
  );

  // 다크모드 컬러 예시
  // const fontColor = localStorage.getItem('darkmode') === 'light' ? '#fff' : '#000';

  new Chart(myChartOne, {
    type: 'line',
    data: {
      labels: getsevenDays(),
      datasets: [
        {
          label: '일별 확진자',
          data: confirmedPerson,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rbga(255, 99, 132, 0.3']
        }
      ]
    },
    options: {
      responsive: false,
      scales: {
        // X축 색상 변경
        xAxes: [
          {
            ticks: {
              fontColor: 'rgba(12, 13, 13, 1)'
              // fontSize: 14
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              // ?? 뭔지 잘 모르겠음
              beginAtZero: true,
              // stepSize: 2,
              fontColor: 'rgba(12, 13, 13, 1)'
              // fontSize: 14,
            }
          }
        ]
      }
    }
  });
};

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear() + '';
  let month = date.getMonth() + 1 + '';
  const day = date.getDate() + '';

  if (month < 10) month = '0' + month;
  const today = year + month + day;

  return today;
};

// 통신용
const getsevendaysBefore = () => {
  const today = getToday();
  const sevendaysBefore = +today - 7 + '';

  return sevendaysBefore;
};

// 날짜 렌더링용
const getsevenDays = () => {
  const days = [];
  const date = new Date();

  for (let i = 1; i < 8; i++) {
    days.push(format(subDays(date, i), 'MM/dd'));
  }

  return days.reverse();
};

export default barChart;
