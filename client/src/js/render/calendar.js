import renderYearMonth from './calendar/year-month';
import renderWeekDays from './calendar/weekday';
import renderDates from './calendar/dates';
import renderLegends from './calendar/legend';
import getStartDay from '../utils/calendar/start-day';
import {
  getInitialDayCount,
  getDifMonthDayCount
} from '../utils/calendar/day-count';
import getInfectPerDay from '../utils/infects';

const renderCalendar = (renderingDate, infectsPerDay, legends) => {
  renderYearMonth(renderingDate);
  renderWeekDays();
  renderDates(renderingDate, infectsPerDay, legends);
};

const initCalendar = async renderingDate => {
  const infectsPerDay = await getInfectPerDay(
    getStartDay(renderingDate),
    getInitialDayCount()
  );

  const legends = renderLegends(infectsPerDay);
  renderCalendar(renderingDate, infectsPerDay, legends);
};

const changeCalendar = async renderingDate => {
  const infectsPerDay = await getInfectPerDay(
    getStartDay(renderingDate),
    getDifMonthDayCount(renderingDate)
  );

  const legends = renderLegends(infectsPerDay);
  renderCalendar(renderingDate, infectsPerDay, legends);
};

export { initCalendar, changeCalendar };
