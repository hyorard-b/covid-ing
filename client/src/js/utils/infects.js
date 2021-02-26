import getInfects from '../api/infection';

const getInfectPerDay = async (startDay, dayCount) => {
  const data = await getInfects(startDay, dayCount);

  if (!data) return data;

  // 중복 제거
  const setOfData = [...data].reduce((infects, infect) => {
    const isDuplicated =
      infects.filter(({ stateDt }) => infect.stateDt === stateDt).length > 0;

    if (isDuplicated) return infects;
    infects.push({ stateDt: infect.stateDt, decideCnt: infect.decideCnt });

    return infects;
  }, []);

  const infects = setOfData.map(dailyInfect => dailyInfect.decideCnt).reverse();

  // 잘못된 api 데이터 처리
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
