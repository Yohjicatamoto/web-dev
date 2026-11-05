# Solar System Website — Project Plan

A 10-page website about the solar system, built with **only HTML, CSS, and JavaScript** (no frameworks, no libraries). Each page is styled to look and feel like the place it describes. The finished site is presented in a narrated video walkthrough (5+ minutes).

> **Due:** October 29, 2026. Submit to Brightspace: the **GitHub repo link**, the **live GitHub Pages link**, and the **video link** (unlisted YouTube, Google Drive, Dropbox, etc.).

---

## 1. Goals (mapped to the rubric)

| Rubric area | Points | What "full marks" means for us |
|---|---|---|
| Pages & Content | 15 | All 10 pages exist. Each has a heading and 5+ accurate facts. Homepage has a title and a short solar system intro. |
| Navigation | 10 | The same nav bar is on every page, links to all 10 pages, and every link works. |
| JavaScript | 20 | Every page has a working JS feature, and **no two pages use the same feature**. |
| Themed Styling | 15 | Each page's colors, background, and fonts match its planet. Homepage has its own space theme. |
| Images | 10 | 2+ relevant, well-sized images per page, all with alt text. |
| Code Quality | 10 | Plain HTML/CSS/JS only. Clean indentation, comments, organized folders. |
| Video | 20 | 5+ min, clear voice-over, all 10 pages, every JS feature demoed, code explained. |

---

## 2. Design direction: minimal, almost brutalist

The site should look like a printed catalog or a spec sheet: plain, structured, confident. It should not look like a template or an AI-generated landing page.

### Rules
- **Paper + one accent.** Every planet page has an off-white background (`#F2F0EB`), near-black text (`#111`), and thick black rules (3px). Each planet gets **one flat accent color**, used for blocks such as the title bar, the active nav item and buttons, never for small text.
- **Homepage is inverted:** black background, off-white text, same grid. It is the "space" version of the system.
- **Type:** one shared monospace font for body text, facts, nav and captions (**IBM Plex Mono**). Only the big `<h1>` font changes per planet. All fonts load from Google Fonts.
- **Facts as a data table:** label / value rows separated by rules, like a spec sheet.
- **Nav:** a numbered top bar (`00 HOME  01 SUN  02 MERCURY …`). The current page is inverted (black box, white text). It wraps onto more lines on phones.
- **Images:** black borders, grayscale by default, full color on hover. Since phones have no hover, color also shows on tap/focus. Each image gets a mono caption: `FIG. 1 — Olympus Mons, NASA/JPL`.
- **Motion: almost none.** Only the required JS features move. Hover changes are instant, with no easing, fades, glows or parallax.
- **Layout:** left-aligned, a visible grid, square corners, generous whitespace. Large `<h1>` in uppercase.

### Things to avoid (these make a site look templated or AI-generated)
- Gradients, glows, drop shadows, glassmorphism, rounded "cards".
- Purple/blue "space" gradients and a centered hero section with a slogan like "Explore the Cosmos".
- Emoji or icon packs used as decoration.
- Copy that sounds generic. Write the intros in your own voice, and keep the facts short and specific.
- Every section looking the same. Let the facts table, images and JS block each have a different shape.

### Per-page accents and heading fonts

| # | Page | Accent | Heading font (Google Fonts) |
|---|---|---|---|
| 00 | Home | white on black, with planet accents as dots | Space Mono (bold) |
| 01 | Sun | `#FF5A00` hot orange | Archivo Black |
| 02 | Mercury | `#8A8A8A` rock gray | Major Mono Display |
| 03 | Venus | `#E3B94F` sulfur yellow | Instrument Serif |
| 04 | Earth | `#1F5FBF` ocean blue | Bricolage Grotesque |
| 05 | Moon | `#A9A9A9` silver | Space Grotesk (light) |
| 06 | Mars | `#B3401E` rust | Anton |
| 07 | Jupiter | `#C97B3D` banded tan | Big Shoulders Display |
| 08 | Saturn | `#C9A227` ring gold | DM Serif Display |
| 09 | Uranus | `#3FB8C4` ice cyan | Unbounded |

Light accents (Venus, Moon, Saturn) are only used as block backgrounds with black text on top, so text stays readable.

---

## 3. Folder structure

HTML files stay at the root so every nav link is a simple `page.html` (no `../` paths to break).

```
web-dev/
├── index.html          # Homepage
├── sun.html
├── moon.html
├── earth.html
├── mercury.html
├── venus.html
├── mars.html
├── jupiter.html
├── saturn.html
├── uranus.html
├── css/
│   ├── main.css        # Shared: reset, nav bar, layout, fact list, image sizing
│   ├── home.css
│   ├── sun.css
│   ├── ...             # one theme file per page
│   └── uranus.css
├── js/
│   ├── home.js
│   ├── sun.js
│   ├── ...             # one script per page
│   └── uranus.js
├── images/
│   ├── home/
│   ├── sun/
│   ├── ...             # one folder per page
│   └── uranus/
├── PLAN.md
└── README.md           # Project description, page list, image credits
```

Every page links `css/main.css` first, then its own theme file, then its own script at the bottom of `<body>`.

---

## 4. Shared page template

Every page uses the same skeleton so the site feels consistent and the code is easy to explain in the video:

1. `<header>` with the **numbered nav bar**: 00 Home · 01 Sun · 02 Mercury · 03 Venus · 04 Earth · 05 Moon · 06 Mars · 07 Jupiter · 08 Saturn · 09 Uranus (ordered by distance from the Sun, with the Moon after Earth).
   - The current page's link gets `class="active"` and `aria-current="page"`, which inverts it.
   - The nav is written out in HTML on every page (not generated by JS), so it works even if a script breaks.
2. `<main>`:
   - `<h1>` page title
   - Short intro paragraph
   - 2+ `<figure>` images, each with `alt` text and a FIG. caption
   - Facts as a `<table>` (label / value), 5+ rows
   - The page's JS feature section
3. `<footer>` with the image credits and the student's name.

**Shared CSS (main.css):** the whole design system (grid, rules, nav, facts table, figure/caption, grayscale images, buttons), driven by two CSS variables: `--accent` and `--heading-font`. Each theme file is short: it sets those two variables and adds any page-specific touches.

---

## 5. Page-by-page plan

Each page gets a **different** JS feature (rubric: "varied across the site").

Colors and fonts are set in section 2. The JS features are styled as plain bordered panels with square buttons, using the page accent.

| Page | JS feature |
|---|---|
| **Home** | **Orbit diagram** — flat colored dots circle the Sun on thin line orbits, with Start/Stop buttons |
| **Sun** | **Fun facts modal** — button opens a pop-up with extra facts, and an X closes it |
| **Mercury** | **Day/Night temperature toggle** — switches between the sunlit-side temperature (~430 °C) and the night-side temperature (~-180 °C), and inverts the page colors |
| **Venus** | **"Read More" sections** — show/hide longer explanations (greenhouse effect, backwards spin) |
| **Earth** | **Mini quiz** — 3–5 multiple-choice questions with a score at the end |
| **Moon** | **Moon phase viewer** — Next/Previous buttons cycle through the 8 phases with an image and name |
| **Mars** | **"What would you weigh on Mars?" calculator** — enter Earth weight, get Mars weight (× 0.38) |
| **Jupiter** | **Spinning planet** — a CSS-rotated Jupiter that JS starts/stops and speeds up/slows down |
| **Saturn** | **Image slideshow** — Previous/Next buttons through photos of the rings and moons |
| **Uranus** | **"How old would you be on Uranus?" calculator** — enter your age in Earth years, get it in Uranus years (÷ 84) |

---

## 6. Facts to include (5+ per page)

Double-check every number against **NASA Science (science.nasa.gov/solar-system)** before publishing. Accuracy is graded.

- **Home (intro):** 4.6 billion years old; 8 planets; the Sun holds about 99.8% of the system's mass; inner rocky planets vs. outer giants; asteroid belt between Mars and Jupiter.
- **Sun:** a star (yellow dwarf); ~109× Earth's diameter; ~150 million km from Earth; surface ~5,500 °C, core ~15 million °C; light takes ~8 minutes to reach Earth.
- **Mercury:** smallest planet; closest to the Sun (~58 million km); year = 88 Earth days; no moons; huge temperature swings.
- **Venus:** hottest planet (~465 °C); spins backwards; a day is longer than its year; thick carbon dioxide clouds; no moons.
- **Earth:** only known planet with life; ~71% covered in water; 1 moon; day = 24 hours, year = 365.25 days; ~150 million km from the Sun.
- **Moon:** ~384,000 km from Earth; about 1/4 of Earth's width; same side always faces us; gravity ~1/6 of Earth's; 12 astronauts have walked on it (Apollo).
- **Mars:** "Red Planet" (iron oxide dust); Olympus Mons, the tallest volcano in the solar system; 2 moons (Phobos, Deimos); day ~24.6 hours; year ~687 Earth days.
- **Jupiter:** largest planet (~11× Earth's diameter); Great Red Spot is a storm bigger than Earth; 90+ known moons; shortest day (~10 hours); gas giant.
- **Saturn:** famous rings made of ice and rock; so low in density it would float in water; 140+ known moons including Titan; year ~29 Earth years; gas giant.
- **Uranus:** tilted ~98°, so it spins on its side; ice giant; coldest planetary atmosphere (~-224 °C); year ~84 Earth years; 28 known moons.

> Moon counts change as new moons are discovered. Use NASA's current numbers and say "known moons".

---

## 7. Images

- **At least 2 per page** (plan for 3 to be safe).
- **Sources:** NASA image libraries (images.nasa.gov, science.nasa.gov) are mostly public domain. Wikimedia Commons is a good backup. Record each source for the README / footer credits.
- **Download images into `images/<page>/`** instead of hot-linking, so they never break.
- **Size them** to about 800–1200 px wide and compress them (target < 300 KB each) so pages load quickly.
- **Alt text** must describe the image, e.g. `alt="Saturn's rings photographed by the Cassini spacecraft"`.
- **Extra images needed by JS features:** 8 moon phases (Moon), 4–6 slideshow photos (Saturn), and small planet icons for the orbit animation (Home).

---

## 8. Build schedule (milestones)

| # | Milestone | Done when |
|---|---|---|
| 1 | **Setup** | Folders created, `main.css` written, template page with the full nav bar works. |
| 2 | **All 10 pages stubbed** | Every HTML file exists with the nav, an `<h1>`, and placeholder sections. All links are clicked and tested. |
| 3 | **Content** | Facts written and fact-checked; intro paragraphs done. |
| 4 | **Images** | 2+ images per page downloaded, resized, and given alt text; credits recorded. |
| 5 | **Theming** | Each page's theme CSS done (colors, background, fonts, effects). |
| 6 | **JavaScript** | One feature per page, built and tested one at a time (easiest first: Venus, Sun, Mars, Uranus → Mercury, Moon, Saturn, Earth → Jupiter, Home). |
| 7 | **Polish & cleanup** | Code indented and commented; no console errors; readable text contrast; phone-width check. |
| 8 | **Publish** | Merged to `main` and live on GitHub Pages; both links checked in a private window. |
| 9 | **Video** | Recorded, checked for audio and length, uploaded, and the link submitted. |

---

## 9. Testing checklist (run before recording)

- [ ] All 10 pages open; every nav link on every page works (10 × 10 = 100 clicks, or a quick check of each page's nav).
- [ ] Each page has an `<h1>` and 5+ facts.
- [ ] Each page has 2+ images; none are broken; all have alt text.
- [ ] Each JS feature works, including edge cases (empty or negative input in the calculators, Stop pressed twice, last slide → Next).
- [ ] Browser console (F12) shows no errors on any page.
- [ ] Text is readable against every accent (no light accent used as text color).
- [ ] Every link and image works on the **live GitHub Pages site**, not just locally (check file-name capitalization).
- [ ] Design check: no gradients, shadows, rounded corners or leftover placeholder text.
- [ ] No framework or library files or CDN links anywhere.
- [ ] Each file has a header comment, and tricky code has short comments.

---

## 10. Video walkthrough outline (aim for 7–9 minutes)

1. **Intro (30 s):** name, project goal, tools used (HTML/CSS/JS only).
2. **Site tour (4–5 min):** visit all 10 pages in nav order. On each page: point out the theme choices, the images, the facts, and **demo the JS feature**.
3. **Code walkthrough (2–3 min):**
   - Folder structure.
   - Navigation: the shared `<nav>` markup and the `active` class.
   - Styling: `main.css` vs. a theme file (e.g. `mars.css`).
   - JavaScript: explain 2–3 features in detail (e.g. the weight calculator's input → math → output, the orbit Start/Stop, the modal open/close).
4. **Wrap-up (30 s):** what was hardest and what you'd add next (e.g. Neptune).

Use a screen recorder with a mic (OBS, Loom, or the built-in recorders in Windows/macOS). Do a 30-second test recording to check audio first.

---

## 11. Open questions

- **Neptune** isn't on the required list. Leave it out, or add it as a bonus page?
- ~~GitHub Pages~~ → **Yes: submit both the live link and the repo link.** In the repo, go to Settings → Pages → Deploy from a branch → `main` / `(root)`. The live site will be at `https://yohjicatamoto.github.io/web-dev/`. Because all paths are relative and lowercase, they work on Pages; file names are case-sensitive there.
- ~~Google Fonts~~ → **Yes, using Google Fonts.** Mention in the video that they are fonts, not a framework or library.
