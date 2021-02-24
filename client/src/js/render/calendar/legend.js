import calcInfectLegend from '../../utils/calendar/calc-legend';

const $legendTextElemtents = document.querySelectorAll('.legend-text');

const renderLegends = async (startDay, dayCount) => {
  const legends = await calcInfectLegend(startDay, dayCount);

  $legendTextElemtents.forEach(($legendText, idx) => {
    $legendText.textContent = `~${legends[idx]}`;
  });
};

export default renderLegends;
