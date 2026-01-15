function calculateWeekdayStats(calendar) {
  const totals = {
    0: 0, // Sun
    1: 0, // Mon
    2: 0, // Tue
    3: 0, // Wed
    4: 0, // Thu
    5: 0, // Fri
    6: 0  // Sat
  };

  for (const week of calendar.weeks) {
    for (const day of week.contributionDays) {
      totals[day.weekday] += day.contributionCount;
    }
  }

  const grandTotal = Object.values(totals)
    .reduce((a, b) => a + b, 0);

  const percentages = {};

  for (const weekday in totals) {
    percentages[weekday] =
      grandTotal === 0
        ? 0
        : ((totals[weekday] / grandTotal) * 100).toFixed(1);
  }

  return {
    totals,
    percentages,
    grandTotal
  };
}

module.exports = { calculateWeekdayStats };
