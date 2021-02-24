const calcInfectLegend = infectsPerDay => {
  const [minInfect, maxInfect] = [
    Math.min(...infectsPerDay),
    Math.max(...infectsPerDay)
  ];

  return [0.2, 0.4, 0.6, 0.8, 1].map(percentage =>
    Math.floor(minInfect + (maxInfect - minInfect) * percentage)
  );
};

export default calcInfectLegend;
