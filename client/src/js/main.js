import renderSideNav from './render/side-nav';
import tabHandler from './utils/tabs';
import barChart from './utils/chart';
import { initCalendar, changeCalendar } from './render/calendar';

const renderingDate = new Date();

window.addEventListener('DOMContentLoaded', () => {
  renderSideNav();
  tabHandler();
  barChart();
  initCalendar(renderingDate);
});
