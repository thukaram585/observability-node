# Basic Node.js + React Setup

This repository now contains two separate applications:

- `server`: a basic Node.js API server (can be its own repo)
- `client`: a basic React single-page application (can be its own repo)

You can keep them together in this monorepo, or move each folder into its own Git repository if you prefer fully separate repos.

## Server (Node.js)

- Location: `server`
- Tech: Node.js + Express
- Endpoints:
  - `GET /api/health` – simple health check
  - `GET /api/items` – returns a list of example items

### Install and run

From the `server` directory:

```bash
cd server
npm install
npm run dev   # or: npm start
```

The server will start on `http://localhost:4000`.

## Client (React)

- Location: `client`
- Tech: React + React Router + Vite
- Features:
  - Navigation between a **Home** page and an **Items** page
  - **Items** page fetches and displays data from the Node.js server (`/api/items`)

### Install and run

From the `client` directory:

```bash
cd client
npm install
npm run dev
```

By default Vite runs on `http://localhost:5173`.

Make sure the Node.js server is running on `http://localhost:4000` so the **Items** page can load data.

## Using separate repositories

If you want completely separate repos:

1. Initialize a new Git repo in `server` and push it wherever you like.
2. Initialize a new Git repo in `client` and push it as a separate project.

For example:

```bash
cd server
git init
git add .
git commit -m "Initial Node server"

cd ../client
git init
git add .
git commit -m "Initial React client"
```

You can then add separate remotes (e.g. on GitHub) for each.

