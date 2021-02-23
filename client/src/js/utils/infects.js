import getInfects from '../api/infection';

const getInfectPerDay = async (startDay, dayCount) => {
  const infects = await getInfects(startDay, dayCount);

  const dailyInfects = infects.reduce(
    (dailyInfects, dayInfect, day, infects) => {
      if (day === infects.length - 1) return dailyInfects;

      dailyInfects.push(dayInfect - infects[day + 1]);

      return dailyInfects;
    },
    []
  );
  return dailyInfects.reverse();
};

export default getInfectPerDay;
