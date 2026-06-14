# CODESOFT_TASK2
# Pulse — Landing Page

A modern, dark-themed landing page for a fictional SaaS product called **Pulse**
(an uptime / website monitoring tool). Built for the **Level 1 – Task 2: Landing Page**
internship assignment using plain **HTML, CSS, and a small touch of JavaScript**.

## Project structure

```
pulse-landing/
├── index.html      # Page structure & content
├── styles.css      # All styling (theme, layout, responsiveness)
├── script.js       # Mobile nav toggle + FAQ accordion behaviour
└── README.md       # This file
```

## Sections included

- **Header / Nav** — sticky header with logo, nav links, login & CTA buttons,
  and a mobile hamburger menu.
- **Hero** — headline, subtext, call-to-action buttons, and an animated
  "live monitor" card with an SVG heartbeat/pulse graph.
- **Trust strip** — simple logo row for "trusted by" companies.
- **Features** — a 6-column responsive grid of feature cards with icons.
- **How it works** — a 3-step explanation section.
- **Stats** — a 4-column highlight bar with key numbers.
- **Pricing** — 3 pricing cards (Starter / Team / Scale) with a highlighted
  "most popular" plan.
- **FAQ** — accordion-style questions using native `<details>` elements.
- **CTA** — final call-to-action banner.
- **Footer** — multi-column footer with brand, links, and social icons.

## How to open this project in VS Code

1. Unzip the downloaded file — you'll get a folder named `pulse-landing`.
2. Open VS Code → **File → Open Folder...** → select the `pulse-landing` folder.
3. Install the **Live Server** extension (if you don't have it):
   - Go to the Extensions tab (`Ctrl+Shift+X`), search for **"Live Server"** by
     Ritwick Dey, and click **Install**.
4. Right-click `index.html` in the file explorer and choose
   **"Open with Live Server"**.
5. Your browser will open the page automatically at something like
   `http://127.0.0.1:5500/index.html`.

> Alternatively, you can just double-click `index.html` to open it directly in
> any browser — the page will work fine, but Live Server gives you auto-reload
> while editing.

## Customizing

- **Colors / fonts**: edit the `:root { ... }` variables at the top of
  `styles.css`.
- **Text content**: edit directly inside `index.html`.
- **Fonts used**: Space Grotesk (headings), Inter (body text), JetBrains Mono
  (numbers/labels) — loaded from Google Fonts, so an internet connection is
  needed for them to display correctly.

## Notes for the assignment write-up

This project demonstrates:
- Semantic HTML5 structure (`header`, `main`, `section`, `footer`, `article`)
- CSS Grid & Flexbox for columns and layout
- A consistent dark color palette and type system
- Responsive design with media queries (desktop, tablet, mobile)
- Basic interactivity with vanilla JavaScript (no frameworks)
