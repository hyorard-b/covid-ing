// 달 마지막 일자 구하기
const getLastDate = renderingMonth =>
  [1, 3, 5, 7, 8, 10, 12].includes(renderingMonth)
    ? '31'
    : [4, 6, 9, 11].includes(renderingMonth)
    ? '30'
    : '28';

// 저번 달 구하기
const getLastMonth = renderingDateObj =>
  renderingDateObj.getMonth() === 0 ? 12 : renderingDateObj.getMonth();

// 저번 달
const getLastMonthDates = renderingDateObj => {
  const lastMonth = getLastMonth(renderingDateObj);
  let lastMonthLastDate = getLastDate(lastMonth);
  const lastMonthDays = [];
  const thisMonth = new Date(
    renderingDateObj.getFullYear(),
    renderingDateObj.getMonth(),
    1
  );
  for (let i = 0; i < thisMonth.getDay(); i++) {
    lastMonthDays.push(lastMonthLastDate--);
  }
  return lastMonthDays.reverse();
};

export { getLastMonthDates, getLastDate };
