# DreamShift Resource Guides — Single Repo

This project combines **9 DreamShift industry resource guides** into one React/Vite app that can be deployed as **one Netlify site from one GitHub repo**.

All 9 guides currently contain the same IT guide content supplied in the original `App.jsx`. Each industry has its own JSX file so the copy, links, videos, courses, etc. can be replaced independently later.

## Industry guide URLs

- `/it` — IT
- `/construction` — Construction
- `/accounting-finance` — Accounting & Finance
- `/engineering` — Engineering
- `/logistics` — Logistics
- `/sales-marketing` — Sales & Marketing
- `/hr-admin` — HR & Admin
- `/healthcare` — Healthcare
- `/science-tech` — Science & Tech

The root `/` currently falls back to the IT guide.

## Where to edit each guide

Each guide has its own file inside:

```text
src/guides/
```

Files:

```text
src/guides/it.jsx
src/guides/construction.jsx
src/guides/accounting-finance.jsx
src/guides/engineering.jsx
src/guides/logistics.jsx
src/guides/sales-marketing.jsx
src/guides/hr-admin.jsx
src/guides/healthcare.jsx
src/guides/science-tech.jsx
```

The common design, animations, lead form logic and styles are kept in:

```text
src/App.jsx
```

The route list is kept in:

```text
src/routes.js
```

## Lead capture

The lead form posts to:

```text
/.netlify/functions/lead
```

The Netlify Function saves:

- `name`
- `email`
- `industry` — automatically taken from the URL route
- `sourceUrl`
- `createdAt`

For example, a lead submitted from `/accounting-finance` is saved with:

```json
{
  "industry": "accounting-finance"
}
```

### Netlify environment variables

Set these in Netlify Site configuration → Environment variables:

```text
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=dreamshift
MONGODB_COLLECTION=leads
```

Only `MONGODB_URI` is required. The DB and collection default to `dreamshift` and `leads`.

## Local setup

```bash
npm install
npm run dev
```

Then test routes such as:

```text
http://localhost:5173/it
http://localhost:5173/construction
http://localhost:5173/accounting-finance
http://localhost:5173/science-tech
```

## Netlify deployment

Push the entire project folder to one GitHub repository and connect that repository to one Netlify site.

Netlify uses the included `netlify.toml`:

```text
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

The SPA redirect is already included, so direct visits to any guide URL should work.
