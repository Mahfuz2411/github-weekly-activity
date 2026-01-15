require('dotenv').config();
const fs = require('fs');
const path = require('path');

const { fetchContributionCalendar } = require('./graphql');
const { calculateWeekdayStats } = require('./analytics');
const { generateSVG } = require('./svgChart');

(async () => {
  const username = process.env.GITHUB_USERNAME;

  const calendar = await fetchContributionCalendar(username);
  const stats = calculateWeekdayStats(calendar);

  const svg = generateSVG(stats.percentages);

  const outputDir = path.join(__dirname, '..', 'output');
  const outputPath = path.join(outputDir, 'activity.svg');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  fs.writeFileSync(outputPath, svg);

  console.log('SVG generated at:', outputPath);
})();   
