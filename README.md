# Brian Marcelino — Portfolio

Personal cybersecurity portfolio site built with React + Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `/dist`.

---

## Deploy on Render (free)

1. Push this folder to a GitHub repo
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your GitHub repo
4. Set:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Click Deploy

Or use the included `render.yaml` — Render will auto-detect it.

---

## Deploy on Railway

1. Push this folder to a GitHub repo
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Railway auto-detects Vite. Set the start command to:
   ```
   npm run build && npx serve dist
   ```
4. Or add a `nixpacks.toml`:
   ```toml
   [phases.build]
   cmds = ["npm install", "npm run build"]
   
   [start]
   cmd = "npx serve dist -p $PORT"
   ```
5. Deploy

---

## Stack

- React 18
- Vite 5
- Vanilla CSS (no framework — intentional for performance)
- Google Fonts: JetBrains Mono + Inter
