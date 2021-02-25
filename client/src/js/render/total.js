import getInfects from '../api/infection';
import getStartDay from '../utils/calendar/start-day';
import { getInitialDayCount } from '../utils/calendar/day-count';

const $cumulContent = document.querySelector(
  '.cumulative-confirm > .confirm-content'
);
const $todayContent = document.querySelector(
  '.today-confirm > .confirm-content'
);
const $compareContent = document.querySelector(
  '.compare-last-day > .confirm-content'
);

const renderTotal = async renderingDate => {
  const infects = await getInfects(
    getStartDay(renderingDate),
    getInitialDayCount()
  );

  const { decideCnt: lastDayDecideCnt, careCnt: lastDayCareCnt } = infects[1];
  const { decideCnt: todayDecideCnt, careCnt: todayCareCnt } = infects[0];

  $cumulContent.textContent = `${todayDecideCnt} 명`;
  $todayContent.textContent = `${todayDecideCnt - lastDayDecideCnt} 명`;

  const compareSign = todayCareCnt - lastDayCareCnt > 0 ? '+' : '-';
  $compareContent.textContent = `${compareSign} ${Math.abs(
    todayCareCnt - lastDayCareCnt
  )} 명`;
};

export default renderTotal;
