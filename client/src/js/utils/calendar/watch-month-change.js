import { subMonths, addMonths } from 'date-fns';
import { changeCalendar } from '../../render/calendar';
import globalStates from '../../globalStates';

const $prevMonthBtn = document.querySelector('.material-icons.left');
const $nextMonthBtn = document.querySelector('.material-icons.right');

const watchMonthChange = () => {
  $prevMonthBtn.onclick = () => {
    const { renderingDate } = globalStates;

    const prevMonthDate = subMonths(renderingDate, 1);
    globalStates.renderingDate = prevMonthDate;

    changeCalendar(globalStates.renderingDate);
  };

  $nextMonthBtn.onclick = () => {
    const { renderingDate } = globalStates;

    const nextMonthDate = addMonths(renderingDate, 1);
    globalStates.renderingDate = nextMonthDate;

    changeCalendar(globalStates.renderingDate);
  };
};

export default watchMonthChange;
