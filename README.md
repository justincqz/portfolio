# Justin Chong — Portfolio

A static personal portfolio for Justin Chong, a technical lead and product engineer working across backend platforms, AI/data systems, product delivery, and regulated production operations.

**Repository:** <https://github.com/justincqz/portfolio>
**Expected Pages URL:** <https://justincqz.github.io/portfolio/>

## What is included

- **Systems architecture** — a confidentiality-safe clinical-AI delivery model.
- **Product portfolio** — Metalynx Scatter, Kikan, and a Radiology Viewer direction.
- **Kikan evidence gallery** — working interface screenshots covering the home dashboard, workstation logs, and an earlier dashboard iteration.
- **Experience and capabilities** — concise evidence-led career and skills sections.
- **Résumé** — `assets/Justin_Chong_CV.pdf`, linked from every résumé CTA.

The site intentionally avoids client data, credentials, named customer endorsements, and proprietary implementation details. Kikan and the Radiology Viewer are described at the level supported by the available evidence; Kikan is not presented as proven production autonomy.

## Project structure

- `index.html` — production entry point; standalone, no-build portfolio page
- `assets/images/` — portrait and Kikan product screenshots
- `assets/Justin_Chong_CV.pdf` — downloadable/viewable résumé
- `planning/` — public design and information-architecture notes
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `.nojekyll` — prevents Jekyll processing

## Run locally

```bash
python3 -m http.server 4175 --bind 127.0.0.1
```

Open <http://127.0.0.1:4175/>.

## Deploy with GitHub Pages

The workflow deploys the repository root whenever `main` changes.

1. Push the repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run **Deploy static site to GitHub Pages** from the Actions tab.

There is no framework or build step. GitHub Pages serves the root `index.html` and the files under `assets/` directly. Add a custom domain later in **Settings → Pages** when one is available.

## Verification targets

- Desktop: 1440 × 900
- Tablet: 768 × 1024
- Mobile: 390 × 844

The page is designed for keyboard navigation, reduced motion, JavaScript-disabled fallback content, and a narrow mobile layout.
