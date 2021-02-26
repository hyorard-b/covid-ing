import { subMonths, addMonths } from 'date-fns';
import { changeCalendar } from '../../render/calendar';
import globalStates from '../../globalStates';

const $prevMonthBtn = document.querySelector('.material-icons.left');
const $nextMonthBtn = document.querySelector('.material-icons.right');

const watchMonthChange = () => {
  $prevMonthBtn.onclick = async () => {
    const prevMonth = subMonths(globalStates.renderingDate, 1);
    globalStates.renderingDate = prevMonth;

    const isChanged = await changeCalendar(globalStates.renderingDate);

    if (!isChanged) {
      const curMonth = addMonths(globalStates.renderingDate, 1);
      globalStates.renderingDate = curMonth;
    }
  };

  $nextMonthBtn.onclick = async () => {
    const nextMonth = addMonths(globalStates.renderingDate, 1);
    globalStates.renderingDate = nextMonth;

    const isChanged = await changeCalendar(globalStates.renderingDate);

    if (!isChanged) {
      const curMonth = subMonths(globalStates.renderingDate, 1);
      globalStates.renderingDate = curMonth;
    }
  };
};

export default watchMonthChange;
