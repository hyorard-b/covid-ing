import getInfects from '../api/infection';

const getInfectPerDay = async (startDay, dayCount) => {
  const infects = await getInfects(startDay, dayCount);

  const dailyInfects = infects.reduce(
    (dailyInfects, dayInfect, day, infects) => {
      if (day === 0 || day === infects.length - 1) return dailyInfects;

      dailyInfects.push(infects[day + 1] - dayInfect);

      return dailyInfects;
    },
    []
  );
  return dailyInfects;
};

export default getInfectPerDay;
