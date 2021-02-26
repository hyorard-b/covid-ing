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
import clearCalendar from './calendar/clear';

const renderCalendar = (renderingDate, infectsPerDay, legends) => {
  renderYearMonth(renderingDate);
  renderDates(renderingDate, infectsPerDay, legends);
};

const initCalendar = async renderingDate => {
  const infectsPerDay = await getInfectPerDay(
    getStartDay(renderingDate),
    getInitialDayCount()
  );

  if (!infectsPerDay) {
    renderWeekDays();
    return false;
  }

  const legends = renderLegends(infectsPerDay);

  renderWeekDays();
  renderCalendar(renderingDate, infectsPerDay, legends);
};

const changeCalendar = async renderingDate => {
  const infectsPerDay = await getInfectPerDay(
    getStartDay(renderingDate),
    getDifMonthDayCount(renderingDate)
  );

  if (!infectsPerDay) {
    return false;
  }

  const legends = renderLegends(infectsPerDay);

  clearCalendar();
  renderCalendar(renderingDate, infectsPerDay, legends);

  return true;
};

export { initCalendar, changeCalendar };
