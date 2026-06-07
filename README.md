# Garet: Personal Site

Personal website for Garet

## Structure

```
main/
├── index.html
├── README.md
│
├── portfolio/
│   ├── index.html
│   ├── projects.html
│   ├── about.html
│   ├── style.css
│   └── script.js
│
├── support/
│   └── index.html
│
├── contact/
│   └── index.html
│
└── blog/
    ├── index.html
    └── posts/
         └── xyz.doc
```

## Design System

All pages share the same dark/purple glassmorphism aesthetic defined in `portfolio/style.css`.

| Token | Value |
|---|---|
| Background | `#0a0a0f` |
| Surface | `#11111a` |
| Accent | `#a78bfa` (purple) |
| Accent 2 | `#7dd3fc` (sky blue) |
| Font (display) | DM Serif Display |
| Font (body) | DM Sans |
| Font (mono) | JetBrains Mono |

## Pages

### `index.html` (root hub)
Entry point for the whole site. Runs a multilingual splash sequence (Hello → Bonjour → Ciao → こんにちは → 안녕하세요) with a progress bar, then reveals the four-card hub. Cards link to:
- `portfolio/index.html`
- `blog/index.html`
- `contact/index.html`
- Support (placeholder — update `href` when ready)

### `portfolio/`
Full sidebar-based portfolio. Navigation covers Home, Projects, and About. Each page imports `style.css` and `script.js` from the same directory. Links back to root hub via a "← Back to hub" button at the base of the sidebar.

### `contact/`
Standalone page with no sidebar. Sticky frosted-glass top bar, two-column layout: contact form (with topic dropdown) on the left, direct contact methods + PGP block on the right.

### `blog/`
Sidebar-based blog listing. Tag filter bar (All / Security / Privacy / Development / Research). Featured post card at top, chronological list below. Sidebar includes a newsletter subscribe widget.

## Notes

- `style.css` and `script.js` live in `portfolio/` and are referenced from there. The `contact/` and `blog/` pages each carry their own inline styles to stay self-contained.
- The Support card `href` is currently `#` — replace with your Ko-fi, GitHub Sponsors, or payment link when ready.
- PGP fingerprint in `contact/index.html` is a placeholder — replace the `XXXX` blocks with your actual key.
- Social links (`href="#"`) throughout all pages — update with real URLs before deploying.
