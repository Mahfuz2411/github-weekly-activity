const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function generateSVG(percentages) {
  const barMaxWidth = 200;
  const barHeight = 12;
  const gap = 10;
  const startX = 100;
  const startY = 40;

  let svgBars = '';

  WEEKDAYS.forEach((day, index) => {
    const percent = Number(percentages[index]);
    const barWidth = (percent / 100) * barMaxWidth;
    const y = startY + index * (barHeight + gap);

    svgBars += `
      <text x="10" y="${y + 10}" font-size="12" fill="#c9d1d9">${day}</text>
      <rect x="${startX}" y="${y}" width="${barWidth}" height="${barHeight}" fill="#58a6ff" rx="4" />
      <text x="${startX + barMaxWidth + 10}" y="${y + 10}" font-size="12" fill="#c9d1d9">${percent}%</text>
    `;
  });

  return `
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    text { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial; }
  </style>

  <text x="10" y="20" font-size="16" fill="#c9d1d9" font-weight="600">
    Weekly GitHub Activity
  </text>

  ${svgBars}
</svg>
  `.trim();
}

module.exports = { generateSVG };
