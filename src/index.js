require('dotenv').config();

const { fetchContributionCalendar } = require('./graphql');
const { calculateWeekdayStats } = require('./analytics');

(async () => {
  const username = process.env.GITHUB_USERNAME;

  const calendar = await fetchContributionCalendar(username);

  const stats = calculateWeekdayStats(calendar);

  console.log('Totals:', stats.totals);
  console.log('Percentages:', stats.percentages);
  console.log('Grand total:', stats.grandTotal);
})();
