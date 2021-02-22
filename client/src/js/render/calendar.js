import renderYearMonth from './calendar/year-month';
import renderWeekDays from './calendar/weekday';
import renderDates from './calendar/dates';

const renderingDate = new Date();

const renderCalendar = () => {
  renderYearMonth(renderingDate);
  renderWeekDays();
  renderDates(renderingDate);
};

export default renderCalendar;
