# 🎮 Play Tycoon — Indie Dev Simulator

A humorous browser game where you try to run an indie game studio without going bankrupt.
Build games, survive review rejections, fight bugs, hire questionable staff, and watch your
ad revenue trickle in at $0.03 per day.

Built with **HTML5, CSS3 and vanilla JavaScript** — no backend, no build tools, no dependencies.

> **Disclaimer:** Play Tycoon is a parody. It is not affiliated with Google, Google Play,
> or any real company. All company and platform names are fictional.

---

## ✨ Features

- Full game loop: develop → submit → review → publish → earn → reinvest
- 5 genres (Arcade, Puzzle, Racing, Simulation, RPG) with different cost/revenue profiles
- Quality system driven by Graphics, Gameplay, Stability, Bugs and Testing
- Publishing pipeline with random approvals, rejections, policy requests and resubmissions
- Studio management: hire Developers, Artists, Testers and Marketers (daily salaries)
- R&D upgrades: Engine, Tooling, Analytics, Community (5 levels each)
- Marketing campaigns that boost downloads for 5 days
- Portfolio with per-game downloads, revenue and decaying daily performance
- 20+ humorous random events, several with branching choices
- 8 achievements
- Complete **English** and **Turkish** localization (every string translated)
- Web Audio API sound effects with a mute toggle
- Autosave to `localStorage` + manual save / load / reset with confirmation
- Responsive layout for phones, tablets and desktop
- Corrupted-save recovery

---

## 🚀 Deploying to GitHub Pages (from a phone)

1. Open **github.com** in your phone browser and sign in.
2. Tap **+ → New repository**. Name it `play-tycoon`, set it to **Public**, tap **Create repository**.
3. On the repository page, tap **Add file → Create new file**.
4. Type the filename `index.html`, paste the contents of the file, scroll down and tap **Commit changes**.
5. Repeat step 3–4 for `style.css`, `script.js` and `README.md`.
   - ⚠️ Filenames must match exactly (lowercase, `.css` / `.js` extensions).
6. Go to **Settings** (tab at the top of the repo) → scroll to **Pages**.
7. Under **Build and deployment → Source** choose **Deploy from a branch**.
8. Set **Branch** to `main` and the folder to `/ (root)`, then tap **Save**.
9. Wait ~1 minute and reload the page. Your game is live at:
   `https://<your-username>.github.io/play-tycoon/`

### Running locally
No server needed. Just open `index.html` in any modern browser.
(If your browser blocks `localStorage` on `file://`, serve the folder with
`python3 -m http.server` or use GitHub Pages.)

---

## 🕹️ How to play

1. **Develop** — pick a genre, name your game, then spend money on Code / Art / Playtest / Fix Bugs.
   You need **100% progress** and **50% testing** before you can submit.
2. **Publish** — submit for review and tap **Next Day**. Reviews resolve in 1–2 days.
   Rejections tell you exactly what to fix. Fix it and resubmit (costs $10).
3. **Studio** — hire staff for passive daily progress, buy R&D upgrades, run ad campaigns.
4. **Next Day** — advances time: income arrives, salaries and rent are paid, events happen.
5. **Portfolio** — watch your games' daily downloads decay over time.

**Tips**
- Testing is cheap and prevents rejections. Do it.
- Bugs above 12 guarantee a rejection.
- Match your genre to the **market trend** for a 1.5× download boost.
- Marketers give a flat +5% downloads each — they pay for themselves quickly.

---

## 📄 License

MIT — do whatever you want with it. Have fun.
