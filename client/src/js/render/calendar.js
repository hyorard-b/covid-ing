import renderYearMonth from './calendar/year-month';
import renderWeekDays from './calendar/weekday';
import renderDates from './calendar/dates';
import renderLegends from './calendar/legend';
import getStartDay from '../utils/calendar/start-day';
import {
  getInitialDayCount,
  getDifMonthDayCount
} from '../utils/calendar/day-count';

const renderCalendar = renderingDate => {
  renderYearMonth(renderingDate);
  renderWeekDays();
  renderDates(renderingDate);
};

const initCalendar = renderingDate => {
  renderCalendar(renderingDate);
  renderLegends(getStartDay(renderingDate), getInitialDayCount());
};

const changeCalendar = renderingDate => {
  renderCalendar(renderingDate);
  renderLegends(getStartDay(renderingDate), getDifMonthDayCount(renderingDate));
};

export { initCalendar, changeCalendar };
