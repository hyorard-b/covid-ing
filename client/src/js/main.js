import renderSideNav from './render/side-nav';
import tabHandler from './utils/tabs';
import barChart from './utils/chart';

window.addEventListener('DOMContentLoaded', () => {
  renderSideNav();
  tabHandler();
  barChart();
});
