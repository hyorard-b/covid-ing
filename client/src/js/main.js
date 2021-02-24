import renderSideNav from './render/side-nav';
import tabHandler from './utils/tabs';
import barChart from './utils/chart';
import localInf from './utils/local';
import renderLocalData from './render/local-infection';

window.addEventListener('DOMContentLoaded', () => {
  renderSideNav();
  tabHandler();
  barChart();
  localInf();
  renderLocalData();
});
