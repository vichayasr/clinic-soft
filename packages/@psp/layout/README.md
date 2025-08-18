# @psp/layout - PSP Responsive Framework

A responsive grid system built on CSS Grid and Flexbox, providing both grid-based layouts (Rack) and horizontal scroll layouts (Rail).

## System Overview

The PSP layout system consists of two main components:

- **Rack**: CSS Grid container with responsive track system
- **Rail**: Horizontal scroll container with fixed-width columns

## Rack System (CSS Grid)

### Responsive Track System

The `.rack` container uses different numbers of tracks across breakpoints:

- **sm (default)**: 4 tracks
- **md (48rem+)**: 14 tracks  
- **lg (64rem+)**: 24 tracks

### Column Classes

#### Small Breakpoint (4 tracks)
```css
.col-1, .col-2    → span 2 tracks (50% width)
.col-3 through .col-12 → span 4 tracks (100% width)
```

#### Medium Breakpoint (14 tracks)
```css
.col-1, .col-2    → span 4 tracks (~29% width)
.col-3, .col-4    → span 7 tracks (50% width)
.col-5, .col-6    → span 10 tracks (~71% width)
.col-7 through .col-12 → span 14 tracks (100% width)
```

#### Large Breakpoint (24 tracks)
```css
.col-1  → span 2 tracks  (~8% width)
.col-2  → span 4 tracks  (~17% width)
.col-3  → span 6 tracks  (25% width)
.col-4  → span 8 tracks  (~33% width)
.col-5  → span 10 tracks (~42% width)
.col-6  → span 12 tracks (50% width)
.col-7  → span 14 tracks (~58% width)
.col-8  → span 16 tracks (~67% width)
.col-9  → span 18 tracks (75% width)
.col-10 → span 20 tracks (~83% width)
.col-11 → span 22 tracks (~92% width)
.col-12 → span 24 tracks (100% width)
```

### Positioning with col-start

Use `.col-start-N` utilities to position elements at specific grid lines:

```html
<!-- Start at column 3, span 4 columns -->
<div class="rack">
  <div class="col-start-3 col-6">Content</div>
</div>

<!-- Multiple positioned elements -->
<div class="rack">
  <div class="col-start-1 col-4">Left</div>
  <div class="col-start-6 col-4">Right</div>
</div>
```

### Usage Examples

#### Basic Grid Layout
```html
<div class="rack">
  <div class="col-6">Half width</div>
  <div class="col-6">Half width</div>
</div>
```

#### Responsive Layout
```html
<div class="rack">
  <div class="col-12 col-6"><!-- Full on small, half on medium+ --></div>
  <div class="col-12 col-3"><!-- Full on small, quarter on medium+ --></div>
  <div class="col-12 col-3"><!-- Full on small, quarter on medium+ --></div>
</div>
```

#### Positioned Layout
```html
<div class="rack">
  <div class="col-start-2 col-10"><!-- Centered with margins --></div>
</div>
```

## Rail System (Horizontal Scroll)

### Fixed Width Columns

The `.rail` container provides horizontal scroll with fixed-width columns:

```css
.col-1  → 16rem (256px)
.col-2  → 20rem (320px)
.col-3  → 24rem (384px)
.col-4  → 28rem (448px)
.col-5  → 32rem (512px)
.col-6  → 36rem (576px)
.col-7  → 40rem (640px)
.col-8  → 44rem (704px)
.col-9  → 48rem (768px)
.col-10 → 52rem (832px)
.col-11 → 56rem (896px)
.col-12 → 100% (full width)
```

### Usage Examples

#### Horizontal Card Layout
```html
<div class="rail">
  <div class="col-3">Card 1</div>
  <div class="col-3">Card 2</div>
  <div class="col-3">Card 3</div>
  <div class="col-3">Card 4</div>
</div>
```

#### Mixed Width Scroll
```html
<div class="rail">
  <div class="col-4">Wide item</div>
  <div class="col-2">Narrow</div>
  <div class="col-2">Narrow</div>
  <div class="col-6">Extra wide</div>
</div>
```

## Rail Variants

- `.rail-standard`: 0.75rem gap (default)
- `.rail-slide`: 1rem gap

## Best Practices

### When to Use Rack vs Rail

**Use Rack (.rack) when:**
- Building responsive layouts that adapt to screen size
- Creating traditional grid-based designs
- Need automatic wrapping and responsive behavior

**Use Rail (.rail) when:**
- Creating horizontal scroll experiences
- Building card carousels or galleries  
- Need consistent fixed widths regardless of screen size

### Responsive Design Patterns

1. **Mobile-first**: Start with smaller column classes, add larger ones for bigger screens
2. **Progressive enhancement**: Use the natural responsive behavior of the track system
3. **Positioning**: Combine `col-start-N` with `col-N` for precise layout control

### Common Patterns

#### Sidebar Layout
```html
<div class="rack">
  <aside class="col-3">Sidebar</aside>
  <main class="col-9">Main content</main>
</div>
```

#### Card Grid
```html
<div class="rack">
  <div class="col-6 col-4 col-3">Card</div>
  <div class="col-6 col-4 col-3">Card</div>
  <div class="col-6 col-4 col-3">Card</div>
  <div class="col-6 col-4 col-3">Card</div>
</div>
```

#### Gallery Rail
```html
<div class="rail">
  <img class="col-2" src="image1.jpg" alt="">
  <img class="col-2" src="image2.jpg" alt="">
  <img class="col-2" src="image3.jpg" alt="">
</div>
```

## Technical Implementation

### CSS Grid Foundation
- Uses `grid-template-columns: repeat(N, minmax(0, 1fr))`
- Responsive breakpoints: 48rem (md), 64rem (lg)
- Gap: 0.75rem standard
- Padding: 1rem left/right

### Flexbox Foundation (Rail)
- Uses `display: flex` with `overflow-x: auto`
- `flex-shrink: 0` prevents column compression
- Hidden scrollbars with cross-browser support

### Browser Support
- Modern browsers with CSS Grid support
- Flexbox fallback for older browsers
- Progressive enhancement approach