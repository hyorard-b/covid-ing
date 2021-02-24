import Chart from 'chart.js';

let myChartOne = document.getElementById('covid-chart').getContext('2d');

const barChart = () => {
  new Chart(myChartOne, {
    type: 'line',
    data: {
      labels: ['2월 1일', '2월 2일', '2월 3일', '2월 4일', '2월 5일', '2월 6일', '2월 7일'],
      datasets: [{
        label: '일별 확진자',
        data: [100, 10, 100, 200, 500, 400, 662],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rbga(255, 99, 132, 0.3']
      }]
    },
    options: {
      responsive: false,
      scales: {
        //X축 색상 변경
        xAxes: [{
          ticks: {
            fontColor: 'rgba(12, 13, 13, 1)',
            // fontSize: 14
          }
        }],
        yAxes: [{
          ticks: {
            // ?? 뭔지 잘 모르겠음
            beginAtZero: true,
            // stepSize: 2,
            fontColor: "rgba(12, 13, 13, 1)",
            // fontSize: 14,
          }
        }]
      }
    }
  });
}

export default barChart;