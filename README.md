# The Solar System

A 10-page website about the solar system (plus a bonus Neptune page), built with only **HTML, CSS and JavaScript**. There are no frameworks or libraries.

By **Sakchhyam Kc**, Web Dev 2026.

- **Live site:** https://yohjicatamoto.github.io/web-dev/
- **Repo:** https://github.com/yohjicatamoto/web-dev

## Pages

| No. | Page | File | JavaScript feature |
|---|---|---|---|
| 00 | Home | `index.html` | Orbit model with Start / Stop |
| 01 | Sun | `sun.html` | Fun fact pop-up (modal) |
| 02 | Mercury | `mercury.html` | Day side / night side switch |
| 03 | Venus | `venus.html` | "Read more" sections |
| 04 | Earth | `earth.html` | Quiz with a score |
| 05 | Moon | `moon.html` | Moon phase viewer (drawn with SVG) |
| 06 | Mars | `mars.html` | "What would you weigh on Mars?" calculator |
| 07 | Jupiter | `jupiter.html` | Spinning planet with Start / Stop / Faster / Slower |
| 08 | Saturn | `saturn.html` | Photo slideshow |
| 09 | Uranus | `uranus.html` | "How old would you be on Uranus?" calculator |
| 10 | Neptune (bonus) | `neptune.html` | Wind speed comparison |

## How it's organized

```
index.html, sun.html, ...   one HTML file per page
css/main.css                shared design: layout, nav, facts table, images, buttons
css/<page>.css              each page's theme: accent color + title font
js/<page>.js                each page's interactive feature
images/<page>/              each page's photos (see images/IMAGES.md)
```

## Design

The design is minimal and close to brutalist: an off-white page, black text, thick black lines and square buttons, with no gradients or shadows. Each planet gets **one flat accent color** and **its own title font**. All body text uses IBM Plex Mono. The homepage uses the same layout flipped to black, as the "space" version.

Photos are black and white until you hover over or tap them.

Fonts come from Google Fonts. These are font files, not a framework or code library.

## Image credits

Photos are from NASA (public domain) unless noted on the page. See `images/IMAGES.md`.
