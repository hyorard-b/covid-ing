import getInfectPerDay from '../infects';

const calcInfectLegend = async (startDay, dayCount) => {
  const infectsPerDay = await getInfectPerDay(startDay, dayCount);

  const [minInfect, maxInfect] = [
    Math.min(...infectsPerDay),
    Math.max(...infectsPerDay)
  ];

  return [0, 0.2, 0.4, 0.6, 0.8].map(percentage =>
    Math.floor(minInfect + (maxInfect - minInfect) * percentage)
  );
};

export default calcInfectLegend;
