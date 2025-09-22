# 🌟 Vighnesh Gajula — Netflix-Inspired Data Science Portfolio

**Live:** https://Vighnesh3232.github.io/Vighnesh_portfolio

This is my personal portfolio, styled like Netflix: rows of “tiles” for **ML projects**, **analytics dashboards**, and **agentic-AI/automation** demos. It’s fast, lightweight, and easy to maintain — all content is in simple JSON files.

---

## ✨ Features

- 🎬 **Netflix-style UI** — hero banner + horizontal carousels by category  
- 📊 **Data Science focus** — ML, Analytics, A/B testing, Dashboards, Data Ops  
- ⚙️ **Agentic-AI & Automation** — n8n, Zapier, Make.com, OpenAI (linked demos)  
- 🧩 **No CMS** — edit JSON, rebuild, and deploy  
- ⚡ **Static & fast** — React (CRA) + TypeScript  
- 🧭 **GitHub Pages-ready** — uses **HashRouter**, so deep links don’t 404

---

## 🧰 Tech Stack

- **React 18** + **Create React App (react-scripts)**
- **TypeScript**
- **React Router v6** (HashRouter)
- **react-icons**
- **gh-pages** (deploy to GitHub Pages)

---

## 📁 Project Structure

public/
index.html
(optional) images/

src/
images/ # local images imported in TSX
data/ # JSON content
profileBanner.json
projects.json
skills.json
timeline.json
certifications.json
contactMe.json
workPermit.json
components/ # NavBar, cards, rows, etc.
pages/ # Browse / Contact / etc.
queries/ # JSON loaders (getX.ts) – no GraphQL
NetflixTitle.tsx # splash/intro screen
index.tsx # uses HashRouter
App.css / index.css # styles


---

## 🧪 Local Setup

> **Requires Node 18** (recommended).

#bash
# Windows (PowerShell) with nvm
nvm install 18.20.3
nvm use 18.20.3

# Clone & install
git clone https://github.com/Vighnesh3232/Vighnesh_portfolio.git
cd Vighnesh_portfolio
npm install

# Run dev server
npm start
# Open http://localhost:3000


# Windows PowerShell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install

✍️ Content — Edit These JSON Files

src/data/profileBanner.json
Headline, summary, resume link, LinkedIn, hero image URL

src/data/projects.json
Array of projects: title, description, techUsed, image.url, optional links (GitHub/demo)

src/data/skills.json
Skill name, category, description, optional icon (react-icons key if supported)

src/data/timeline.json
Work/Education entries with title, summaryPoints[], dateRange

src/data/certifications.json
title, issuer, issuedDate, link, optional logo.url

src/data/contactMe.json
Profile picture URL (or use a local import), name, title, summary, email, phone, LinkedIn

src/data/workPermit.json
visaStatus, expiryDate, summary, additionalInfo

Images:

Keep Picsum placeholders to start, or

Import local files from src/images in components, or

Place files in public/images and reference with:
<img src={`${process.env.PUBLIC_URL}/images/yourfile.png`} />

🚀 Deploy to GitHub Pages

Ensure package.json has:
{
  "homepage": "https://Vighnesh3232.github.io/Vighnesh_portfolio",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

then

# First push to GitHub
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/Vighnesh3232/Vighnesh_portfolio.git
git push -u origin main

# Publish to Pages
npm run deploy

GitHub → Repo Settings → Pages → Source: gh-pages branch.
Live URL: https://Vighnesh3232.github.io/Vighnesh_portfolio

Re-deploy after changes:
git add . && git commit -m "update" && git push
npm run deploy

🧩 Notes & Troubleshooting

Routing 404 on refresh? Already handled by HashRouter.

Images missing on Pages?
Check filename case (Linux servers are case-sensitive).
Prefer imports from src/images or ${process.env.PUBLIC_URL}/images/....

TypeScript can’t import images? Add src/images.d.ts:
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';

📬 Contact

Portfolio: https://Vighnesh3232.github.io/Vighnesh_portfolio

Email: gajulavighnesh123@gmail.com

LinkedIn: https://www.linkedin.com/in/vighnesh-gajula/
