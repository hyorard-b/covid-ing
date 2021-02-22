const getNextMonthDays = numDays => {
  const nextMonthDays = [];
  for (let i = 1; i < 43 - numDays; i++) {
    nextMonthDays.push(i);
  }
  return nextMonthDays;
};

export default getNextMonthDays;
