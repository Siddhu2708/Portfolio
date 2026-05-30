# Deploy Your Portfolio (Free)

## Option A — Vercel (frontend only)

Best for hosting the **React UI**. API/contact form need a separate backend (use Render below).

1. Go to [vercel.com](https://vercel.com) → Import [Siddhu2708/Portfolio](https://github.com/Siddhu2708/Portfolio)
2. Leave **Root Directory** as `.` (project root) — `vercel.json` handles the build
3. Add environment variable (after you deploy the API on Render):

   | Key | Value |
   |-----|--------|
   | `VITE_API_URL` | `https://your-api.onrender.com/api` |

4. Deploy. The site uses fallback data if the API is not set yet.

---

## Option B — Render (full MERN — recommended)

Deploy the full MERN app on **Render** + **MongoDB Atlas** — free tier, no credit card for Atlas.

---

## Step 1 — MongoDB Atlas (database)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2. Create a **free cluster** (M0).
3. **Database Access** → Add user (username + password). Save the password.
4. **Network Access** → Add IP Address → **Allow Access from Anywhere** (`0.0.0.0/0`).
5. **Database** → Connect → **Drivers** → copy the connection string.
6. Replace `<password>` with your user password and set the database name:

   ```
   mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

---

## Step 2 — Push code to GitHub

Open terminal in your project folder:

```bash
cd c:\Users\siddh\OneDrive\Desktop\protfolio

git init
git add .
git commit -m "Portfolio MERN app ready for deploy"

# Create a new repo on github.com (name: portfolio), then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 3 — Deploy on Render

1. Go to [render.com](https://render.com) and sign up (use **GitHub** login).
2. Click **New +** → **Web Service**.
3. Connect your GitHub repo `portfolio`.
4. Settings:

   | Field | Value |
   |-------|--------|
   | **Name** | `siddharth-portfolio` (or any name) |
   | **Region** | Singapore or closest to you |
   | **Branch** | `main` |
   | **Runtime** | Node |
   | **Build Command** | `npm install && npm run install:all && npm run build` |
   | **Start Command** | `npm run start:prod` |
   | **Plan** | Free |

5. **Environment Variables** (Add):

   | Key | Value |
   |-----|--------|
   | `NODE_ENV` | `production` |
   | `MONGODB_URI` | Your Atlas connection string from Step 1 |
   | `CLIENT_URL` | `https://YOUR-APP-NAME.onrender.com` (use your Render URL after first deploy, then update if needed) |

6. Click **Create Web Service**. Wait 5–10 minutes for the first build.

---

## Step 4 — Seed the database

After deploy succeeds, run seed **once** from your PC (uses Atlas in the cloud):

```bash
cd c:\Users\siddh\OneDrive\Desktop\protfolio\server
```

Create `server/.env` with only:

```
MONGODB_URI=your_atlas_connection_string_here
```

Then:

```bash
npm run seed
```

This loads your projects, skills, profile, etc. into Atlas.

---

## Step 5 — Open your live site

Your portfolio URL:

```
https://YOUR-APP-NAME.onrender.com
```

Share this link on LinkedIn, resume, and GitHub.

---

## Notes

- **Free Render** apps sleep after ~15 min idle. First visit may take 30–60 seconds to wake up.
- **Images** must be in the `assets/imgs/` folder in your repo (profile photo, project images). Commit them before pushing to GitHub.
- **Resume PDF** — put `Siddharth_Resume_and_CV (1).pdf` in `client/public/` so Download CV works in production.
- **Custom domain** (optional): Render → Settings → Custom Domains.

---

## Quick test before deploy

```bash
npm run build
npm run start:prod
```

Open `http://localhost:5000` — same as production.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build failed | Run `npm run install:all && npm run build` locally and fix errors |
| Cannot connect to MongoDB | Check Atlas IP whitelist and password in `MONGODB_URI` |
| Empty portfolio | Run `npm run seed` with Atlas URI in `server/.env` |
| 502 on Render | Check logs in Render dashboard → Logs |
