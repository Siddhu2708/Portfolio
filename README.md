# Siddharth Gaykhe — MERN Portfolio

Full-stack portfolio built with **MongoDB**, **Express**, **React**, and **Node.js**. Your original static design is preserved with API-driven content, MongoDB storage, and smooth React animations.

## Project structure

```
protfolio/
├── client/          # React + Vite + Tailwind
├── server/          # Express + MongoDB API
├── assets/          # Images (served by API)
├── index.html       # Original static site (kept for reference)
└── package.json     # Root dev scripts
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string

## Quick start

1. **Install dependencies**

   ```bash
   npm run install:all
   ```

2. **Configure environment**

   Copy `server/.env.example` to `server/.env` and set `MONGODB_URI` if needed.

3. **Seed the database** (loads your projects, skills, experience, etc.)

   ```bash
   npm run seed
   ```

4. **Run development** (API on :5000, React on :5173)

   ```bash
   npm run dev
   ```

5. Open **http://localhost:5173**

## API endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/bundle` | All portfolio data in one request |
| GET | `/api/profile` | Profile & hero content |
| GET | `/api/projects` | Projects list |
| GET | `/api/skills` | Skills grid |
| POST | `/api/contact` | Save contact form to MongoDB |
| POST | `/api/chat` | AI assistant replies |

## Production build

```bash
npm run build
NODE_ENV=production npm start
```

The server serves the React build from `client/dist`.

## Features

- **Dynamic content** from MongoDB (easy to update via seed or future admin panel)
- **Contact form** stored in database with rate limiting
- **AI chatbot** powered by backend knowledge base
- **Smooth UX**: Framer Motion, AOS scroll animations, typed hero, particles
- **Single bundle API** for fast initial load
- **Fallback data** if API is unavailable during development

## Updating content

Re-run the seed after editing `server/src/seed/seed.js`, or insert documents directly in MongoDB Compass.
