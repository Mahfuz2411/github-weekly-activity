require('dotenv').config();
const { getRepos, getCommits } = require('./github');


(async () => {
    const repos = await getRepos(process.env.GITHUB_USERNAME);
    console.log('Fetched Repositories:', repos.length);
    console.log('Repos: ', repos.map(r => r.name));
})();