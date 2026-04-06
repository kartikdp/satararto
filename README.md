# Satara RTO Reference Website

This project contains:

- a research pack for Satara-region RTO services in `research/satara-rto/`
- a static website in `docs/` that turns that research into a reference-first guide

The website is designed to help users understand:

- what service they need
- which documents they should prepare
- what the official step-by-step process looks like
- when an office visit, appointment, or inspection is still required

It now also includes:

- an interactive planner for personalized client checklists
- shareable service and planner links
- print-friendly planner and service views
- an official tools hub and download center

It is intentionally built as a static site so it can be hosted for free on GitHub Pages.

## Project structure

```text
.
├── docs/
│   ├── index.html
│   ├── .nojekyll
│   └── assets/
│       ├── app.js
│       ├── data.js
│       └── styles.css
└── research/
    └── satara-rto/
        ├── official/
        ├── documents/
        ├── product/
        ├── sources/
        └── data/
```

## How the site works

- `docs/index.html`
  - main page layout
- `docs/assets/styles.css`
  - styling, responsive layout, colors, typography
- `docs/assets/data.js`
  - the editable content layer for services, offices, FAQ, and sources
- `docs/assets/app.js`
  - client-side rendering and interactivity

If you want to update the website content later, start with `docs/assets/data.js`.

## Preview the website locally

From the project folder, run:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/docs/
```

You can also open `docs/index.html` directly in a browser, but using a small local server is better for testing.

## How to publish the website on GitHub Pages

This setup is already GitHub Pages-friendly because the site lives inside `docs/`.

### 1. Create a new GitHub repository

Create an empty repository on GitHub, for example:

```text
satara-rto-reference
```

### 2. Initialize git locally if needed

Run these commands from the project folder:

```bash
git init
git add .
git commit -m "Add Satara RTO reference website"
```

### 3. Connect your GitHub repository

Replace the URL below with your own repository URL:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 4. Turn on GitHub Pages

On GitHub:

1. Open your repository.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select:
   - Branch: `main`
   - Folder: `/docs`
6. Click `Save`.

### 5. Wait for the site to publish

GitHub Pages will generate a public URL. It usually looks like:

```text
https://<your-username>.github.io/<your-repo>/
```

If your repository is named exactly:

```text
<your-username>.github.io
```

then the URL will usually be:

```text
https://<your-username>.github.io/
```

## How to update the website after publishing

1. Edit the files locally.
2. Commit the changes.
3. Push to `main`.
4. GitHub Pages will automatically republish the site from the `docs/` folder.

Example:

```bash
git add .
git commit -m "Update website content"
git push
```

## Recommended next improvements

- add Marathi content support
- split services into dedicated detail pages if the site grows
- add screenshots or diagrams for each workflow
- add a proper office-routing helper if official jurisdiction mapping becomes available
- add JSON export or CMS-style editing for non-technical content updates

## Important note

This website is a reference guide, not an official government service portal. Final submissions, payments, appointments, and status tracking should always be completed on official Maharashtra Transport, Sarathi, or Vahan websites.
