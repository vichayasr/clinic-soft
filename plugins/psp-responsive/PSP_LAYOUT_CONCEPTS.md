## PSP Layout: Concepts, Logic, and Rebuild Guide

Last updated: 2025-08-12

### Purpose
Single-source manual for PSP Layout. Covers core concepts, the exact rules implemented in CSS, how to include and build it, and a rebuild prompt you can use to recreate the system from scratch.

---

## 1) Vocabulary and Goals

- **Rack**: CSS Grid container for responsive, wrapped blocks. Controls columns, spans, and offsets.
- **Rail**: Horizontal scrolling row (Flexbox). Children have fixed widths and do not wrap.
- **col-X**: Width utilities. On Rack, these translate to grid spans. On Rail, these map to fixed pixel widths.
- **offset-N**: Rack-only starting-position utilities. At lg+, each offset unit is half a column via a 24-track grid.
- **Breakpoints**: mobile-first.
  - sm: 0–47.999rem (0–767px)
  - md: 48rem+ (768px+)
  - lg+: 64rem+ (1024px+)

Design goals:
- CSS-first, framework-agnostic preset housed in `plugins/psp-layout/styles/preset.css`.
- Simple, predictable spans across breakpoints; half-column offset precision at lg+.
- Demo visuals live in `public/css/demo.css`, strictly scoped to `.demo-scope` so the core system remains authoritative.

---

## 2) Rack: Grid Layout Rules

- Base structure
  - `.rack` uses CSS Grid with 12 columns by default and `gap: 1rem`.
  - Small screens (mobile-first):
    - `.col-1, .col-2` span 6 (50%).
    - `.col-3..12` span 12 (full width).
  - Medium screens (48rem+): 7-column proportional system for clarity and consistency.
    - `.col-1, .col-2, .col-3` all span 5.
    - `.col-4` span 7; `.col-5` span 9; `.col-6` span 10.
    - `.col-7..12` span 12.
  - Large screens (64rem+): switch to 24 tracks to enable half-column precision.
    - `.col-n` spans `2n` tracks (e.g., `col-6` → `span 12`).

---

## 3) Offsets (Rack only)

- At lg+ (`min-width: 64rem`), `.rack` uses `grid-template-columns: repeat(24, 1fr)`.
- Each `offset-N` advances the start by one track (half a column), i.e. `start = N + 1`.
- Implemented as `grid-column-start` to preserve span semantics.

Examples (lg+):
- `.offset-1` → start at 2
- `.offset-2` → start at 3
- …
- `.offset-11` → start at 12

This combines with `.col-X` where `.col-X` spans `2X` tracks.

---

## 4) Rail: Horizontal Scroller

- `.rail` is a `display: flex` row with `overflow-x: auto` and hidden scrollbars.
- `.rail .col-X` are fixed-width, non-wrapping blocks (e.g., `col-1` = 16rem, `col-2` = 20rem … `col-12` = 100%).

---

## 5) Inclusion and Build

- Tailwind entry imports the preset:
  - `public/css/tailwind.css` contains: `@import "../../plugins/psp-layout/styles/preset.css";`
- Build via your standard workflow (e.g., `npm run dev`) — do not edit compiled `app.css` directly [[memory:5967369]].
- Sinatra serves plugin assets from `template/plugins` under `/plugins/*` for the debug tools.

---

## 6) Demo Scope (non-authoritative)

- All demo visuals are in `public/css/demo.css` and wrapped by `.demo-scope` in `views/index.erb`.
- Rules in `demo.css` must not redefine layout math; they only add visuals, spacing, and demo-only placements for showcase sections.
- Any demo placement helpers are additionally nested under purpose classes (e.g., `.offset-demo`, `.offset-row-test`).

---

## 7) Rebuild Prompt (generate preset.css from scratch)

Use the following prompt to recreate `plugins/psp-layout/styles/preset.css` precisely:

```text
Generate a CSS preset named "PSP Layout Preset" with the following behavior:

1) Rack (Grid):
   - Base: `.rack` is a grid with 12 equal columns and `gap: 1rem`, padded left/right by 1.5rem.
   - Small screens (<48rem):
     - `.col-1, .col-2` → `grid-column: span 6;` (50%)
     - `.col-3..12` → `grid-column: span 12;`
   - Medium screens (≥48rem): 7-col proportional spans
     - `.col-1, .col-2, .col-3` → `grid-column: span 5;`
     - `.col-4` → `span 7`; `.col-5` → `span 9`; `.col-6` → `span 10`
     - `.col-7..12` → `span 12`
   - Large screens (≥64rem): switch to 24 tracks
     - `.rack { grid-template-columns: repeat(24, minmax(0, 1fr)); }`
     - `.col-n` spans `2n` tracks (`col-1` → `span 2`, …, `col-12` → `span 24`)

2) Offsets (Rack only, lg+):
   - Implement `.rack .offset-N { grid-column-start: N+1; }` for N=1..11
   - This yields half-column precision because 1 track = 0.5 column on a 24-track grid.

3) Rail (Flex scroller):
   - `.rail` is `display: flex; gap: 1rem; overflow-x: auto;` with hidden scrollbars and 1.5rem side padding.
   - `.rail .col-1..12` widths:
     - `col-1`=16rem, `col-2`=20rem, `col-3`=24rem, …, `col-11`=56rem, `col-12`=100% (full width). All with `min-width` equal to width and `flex-shrink: 0`.

4) Global base:
   - Define `--font-sans` in a `@theme` at top; set `html { font-family: var(--font-sans) }` and smooth text rendering on `body`.

Output plain CSS only.
```

---

## 8) Reference Snippets (actual behavior)

Large screens (≥64rem):
```css
.rack { grid-template-columns: repeat(24, minmax(0, 1fr)); }
.rack .col-1 { grid-column: span 2; }
.rack .col-2 { grid-column: span 4; }
/* … up to col-12 → span 24 */

.rack .offset-1  { grid-column-start: 2; }
.rack .offset-2  { grid-column-start: 3; }
/* … */
.rack .offset-10 { grid-column-start: 11; }
.rack .offset-11 { grid-column-start: 12; }
```

Rail widths:
```css
.rail .col-1 { width: 16rem; min-width: 16rem; flex-shrink: 0; }
.rail .col-2 { width: 20rem; min-width: 20rem; flex-shrink: 0; }
/* … up to col-11 = 56rem, col-12 = 100% */
```

---

## 9) QA Checklist

- Offsets at lg+: `start = offset + 1` across 1..11.
- `.col-n` spans:
  - sm: 1–2 → span 6; 3–12 → span 12
  - md: 1–3 → span 5; 4→7; 5→9; 6→10; 7–12→12
  - lg+: `.col-n` → span `2n`
- Demo scoping: removing `public/css/demo.css` does not affect layout behavior, only visuals.
- Debug toggle visible on all pages; `/plugins/*` route serves plugin assets.

---

## 10) Pitfalls and Conventions

- Do not place layout math in `demo.css`; keep it scoped to `.demo-scope` and visuals-only.
- Do not edit compiled `public/css/app.css`; import the preset into the Tailwind entry and rebuild (`npm run dev`) [[memory:5967369]].
- For centered showcases on md or sm, use demo-only wrappers (e.g., `.offset-demo`, `.offset-row-test`).


