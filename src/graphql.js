const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

async function fetchContributionCalendar(username) {
  const query = `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                weekday
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GraphQL error: ${res.status} ${text}`);
  }

  const json = await res.json();
  return json.data.user.contributionsCollection.contributionCalendar;
}

module.exports = { fetchContributionCalendar };
