import renderSideNav from './render/side-nav';
import tabHandler from './utils/tabs';
import barChart from './utils/chart';
import mapHandler from './render/map';
import localInf from './utils/local';
import renderLocalData from './render/local-infection';
import popup from './render/popup';
import { initCalendar } from './render/calendar';
import watchMonthChange from './utils/calendar/watch-month-change';
import globalStates from './globalStates';
import goToTop from './utils/goToTop';
import renderTotal from './render/total';

window.addEventListener('DOMContentLoaded', () => {
  globalStates.renderingDate = new Date();

  renderTotal(globalStates.renderingDate);
  renderSideNav();
  tabHandler();
  barChart();
  localInf();
  renderLocalData();
  popup();
  mapHandler();
  initCalendar(globalStates.renderingDate);
  watchMonthChange();
  goToTop();
});
