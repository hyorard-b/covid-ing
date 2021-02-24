import calcInfectLegend from '../../utils/calendar/calc-legend';

const $legendTextElemtents = document.querySelectorAll('.legend-text');

const renderLegends = infectsPerDay => {
  const legends = calcInfectLegend(infectsPerDay);

  $legendTextElemtents.forEach(($legendText, idx) => {
    $legendText.textContent = `~${legends[idx]}`;
  });

  return legends;
};

export default renderLegends;
