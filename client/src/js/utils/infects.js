import getInfects from '../api/infection';

const getInfectPerDay = async (startDay, dayCount) => {
  const infects = await getInfects(startDay, dayCount);

  infects.sort();

  const dailyInfects = infects.reduce(
    (dailyInfects, dayInfect, day, infects) => {
      if (day === 0) return dailyInfects;

      dailyInfects.push(dayInfect - infects[day - 1]);

      return dailyInfects;
    },
    []
  );

  return dailyInfects;
};

export default getInfectPerDay;
