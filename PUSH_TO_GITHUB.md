# Push to GitHub Instructions

## After creating the repository on GitHub, run these commands:

```bash
# Replace YOUR_USERNAME with your GitHub username and REPO_NAME with your repository name
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

## Example:
If your username is "AnandRochlani" and repository name is "AnandWebsite":
```bash
git remote add origin https://github.com/AnandRochlani/AnandWebsite.git
git push -u origin main
```

## If you need to authenticate:
- GitHub may prompt for username and password
- For password, use a Personal Access Token (not your GitHub password)
- Create token at: https://github.com/settings/tokens
- Select scope: `repo` (full control of private repositories)
