# Satara RTO Reference Website

This project contains:

- a research pack for Satara-region RTO services in `research/satara-rto/`
- a static website in `docs/` that turns that research into a wizard-first public guide

The website is designed to help users understand:

- what service they need
- which documents they should prepare
- what the official step-by-step process looks like
- when an office visit, appointment, or inspection is still required

It now also includes:

- a guided `Start Here` wizard on the homepage
- dedicated pages for services, offices, and FAQ
- shareable result links and dedicated service-guide links
- official forms, fee references, and portal links inside each service guide

It is intentionally built as a static site so it can be hosted for free on GitHub Pages.

## Project structure

```text
.
├── docs/
│   ├── index.html
│   ├── services.html
│   ├── service.html
│   ├── offices.html
│   ├── faq.html
│   ├── .nojekyll
│   └── assets/
│       ├── data.js
│       ├── shared.js
│       ├── shell.js
│       ├── wizard-page.js
│       ├── services-page.js
│       ├── service-page.js
│       ├── support-pages.js
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
  - homepage wizard and result experience
- `docs/services.html`
  - searchable service directory
- `docs/service.html`
  - dedicated guide page for a single service using the `service` query parameter
- `docs/offices.html`
  - Satara office reference page
- `docs/faq.html`
  - grouped FAQ page
- `docs/assets/styles.css`
  - styling, responsive layout, colors, typography, tabs, and wizard UI
- `docs/assets/data.js`
  - the editable content layer for services, offices, FAQ, forms, and sources
- `docs/assets/shared.js`
  - shared helpers, data access, section rendering, and footer source rendering
- `docs/assets/wizard-page.js`
  - homepage step-by-step planner and result state
- `docs/assets/services-page.js`
  - searchable service directory page
- `docs/assets/service-page.js`
  - dedicated service guide page
- `docs/assets/support-pages.js`
  - office and FAQ page rendering
- `docs/assets/shell.js`
  - shared shell behavior such as active navigation and footer sources

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
- add screenshots or diagrams for each workflow
- add a proper office-routing helper if official jurisdiction mapping becomes available
- add JSON export or CMS-style editing for non-technical content updates

## Important note

This website is a reference guide, not an official government service portal. Final submissions, payments, appointments, and status tracking should always be completed on official Maharashtra Transport, Sarathi, or Vahan websites.
