require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function getRepos(username) {
    let repos = [];
    let page = 1;
    while(true) {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        const data = await res.json();
        repos = repos.concat(data);
        if (data.length < 100) break;
        page++;

    }
    return repos;
}

async function getCommits(username, reponame) {
    const commits = [];
    let page = 1;
    while(true) {
        const res = await fetch(`https://api.github.com/repos/${username}/${reponame}/commits?author=${username}&per_page=100&page=${page}`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        const data = await res.json();
        commits = commits.concat(data);
        if (data.length < 100) break;
        page++;
    }
    return commits;
}

module.exports = { getRepos, getCommits };