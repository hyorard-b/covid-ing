import renderSideNav from './render/side-nav';
import tabHandler from './utils/tabs';
import barChart from './utils/chart';
import popup from "./render/popup";
import { initCalendar, changeCalendar } from './render/calendar';
import mapHandler from './render/map';

const renderingDate = new Date();

window.addEventListener('DOMContentLoaded', () => {
  renderSideNav();
  tabHandler();
  barChart();
  popup();
  initCalendar(renderingDate);
  mapHandler();
});
