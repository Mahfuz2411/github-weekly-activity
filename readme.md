

# GitHub Weekly Activity

This project generates a **weekly GitHub activity chart** (SVG) for your README.  
It shows the contribution split by day of the week in a simple, GitHub-friendly bar chart.

<div>
  <img src="./output/activity.svg" alt="Weekly Activity" width="400"/>
</div>

---

## How to use

1. **Fork or clone** this repository.

2. **Create a GitHub Personal Access Token** with `repo` and `read:user` permissions and save it in your `.env` file:

```bash
GITHUB_TOKEN=ghp_yourtokenhere
GITHUB_USERNAME=your-github-username
```

3. **Run locally** (for testing):

```bash
npm install
node src/index.js
```

- The generated SVG will be saved in `output/activity.svg`.

4. **Embed in your README**:

- Markdown way (recommended):

```md
![Weekly Activity](./output/activity.svg)
```

- HTML way:

```html
<img src="./output/activity.svg" alt="Weekly Activity" width="400"/>
```

---

<!-- 
## GitHub Actions (Auto-update)

You can add a workflow to **update the SVG automatically** every day:

```
name: Update Weekly Activity SVG

on:
  schedule:
    - cron: '0 0 * * *' # every day at midnight UTC
  workflow_dispatch:

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Generate activity SVG
        uses: mahfuz2411/github-activity-readme@v1
        with:
          username: ${{ github.repository_owner }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Commit SVG
        uses: EndBug/add-and-commit@v9
        with:
          message: 'Update activity.svg'
          add: 'output/activity.svg'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

``` 

---

-->

## Notes

- Works with **public and private repositories** if token has correct scopes.
- **Only analyzes commits from the last 1 year** (52 weeks) to match GitHub contribution graph.


---

## License

MIT License


---

