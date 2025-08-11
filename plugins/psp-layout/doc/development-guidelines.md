# PSP Layout Plugin Development Guidelines v1.0.0

## Table of Contents
1. [Project Architecture](#project-architecture)
2. [File Organization](#file-organization)
3. [CSS/HTML Best Practices](#csshtml-best-practices)
4. [Grid System Usage](#grid-system-usage)
5. [Typography Guidelines](#typography-guidelines)
6. [Responsive Design Patterns](#responsive-design-patterns)
7. [Testing Procedures](#testing-procedures)
8. [Performance Guidelines](#performance-guidelines)

---

## Project Architecture

### Directory Structure
```
project-root/
├── workfiles/                    # Development files
│   ├── styles/
│   │   └── main.css             # Main stylesheet entry point
│   ├── img/                     # Images and assets
│   └── *.html                   # HTML pages
├── plugins/
│   └── psp-layout/              # Grid system plugin
│       ├── scripts/             # Plugin logic & debug tools
│       └── styles/              # Plugin stylesheets & debug UI
├── dist/                        # Compiled CSS output
├── tests/                       # Test files
│   ├── integration/
│   └── visual/
└── docs/                        # Documentation
```

### CSS Import Order (Tailwind v4)
```css
/* 1. Tailwind CSS base */
@import "tailwindcss";
@import "../../plugins/psp-layout/styles/debug-mode.css";

/* 2. Theme configuration */
@theme {
  --grid-columns: 12;
  --base-gap: 1rem;
  --container-padding: 1.5rem;
}

/* 3. Project-specific styles */
/* Your custom CSS here */
```

---

## File Organization

### HTML Files
- **Location**: `workfiles/`
- **Naming**: Use descriptive, hyphenated names (`product-main.html`, `contact-form.html`)
- **Structure**: One page per file, maintain consistent head structure

### CSS Files
- **Main Entry**: `workfiles/styles/main.css`
- **Components**: Use separate files for large components, import into main.css
- **Utilities**: Keep project-specific utilities in main.css

### Assets
- **Images**: `workfiles/img/`
- **Icons**: Prefer SVG format, organize by category
- **Fonts**: Load via CSS or CDN, avoid local files unless necessary

---

## CSS/HTML Best Practices

### 1. Class Naming Conventions

#### Grid Classes
```html
<!-- Use semantic structure -->
<section class="rack section-spacing">
  <div class="col-6 offset-3">
    <h1 class="h1">Main Title</h1>
    <p class="b1">Body content</p>
  </div>
</section>
```

#### Component Classes
```html
<!-- Use BEM methodology for components -->
<nav class="navigation">
  <ul class="navigation__list">
    <li class="navigation__item">
      <a href="#" class="navigation__link navigation__link--active">Home</a>
    </li>
  </ul>
</nav>
```

#### Utility Classes
```html
<!-- Combine utility classes for quick styling -->
<button class="btn-primary text-center">
  Submit Form
</button>
```

### 2. HTML Structure Rules

#### Semantic HTML
```html
<!-- Good: Semantic structure -->
<header class="rack">
  <nav class="col-12">
    <h1 class="h2">Company Name</h1>
    <ul>...</ul>
  </nav>
</header>

<main>
  <section class="rack section-spacing">
    <article class="col-8 offset-2">
      <h1 class="h1">Article Title</h1>
      <p class="b1">Article content...</p>
    </article>
  </section>
</main>
```

#### Accessibility
```html
<!-- Always include proper ARIA labels -->
<button class="btn-primary" aria-label="Submit contact form">
  Submit
</button>

<!-- Use semantic headings hierarchy -->
<h1 class="h1">Main Page Title</h1>
  <h2 class="h2">Section Title</h2>
    <h3 class="h3">Subsection Title</h3>
```

### 3. CSS Rules

#### Order of Properties
```css
.component {
  /* 1. Positioning */
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  
  /* 2. Box model */
  display: flex;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 1rem;
  
  /* 3. Typography */
  font-family: var(--font-family-primary);
  font-size: var(--text-lg);
  line-height: 1.5;
  
  /* 4. Visual */
  background-color: white;
  border: 1px solid gray;
  border-radius: 0.5rem;
  
  /* 5. Animation */
  transition: all 0.2s ease-in-out;
}
```

#### Custom Properties
```css
/* Define project variables */
:root {
  --brand-primary: #2563eb;
  --brand-secondary: #64748b;
  --brand-accent: #3b82f6;
  
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}

/* Use variables for consistency */
.card {
  padding: var(--spacing-md);
  background-color: var(--brand-primary);
}
```

---

## Grid System Usage

### 1. Container Types

#### Rack (Flexible Grid)
```html
<!-- For content that should adapt to screen size -->
<div class="rack">
  <div class="col-6">Left content</div>
  <div class="col-6">Right content</div>
</div>
```

#### Rail (Fixed Width + Horizontal Scroll)
```html
<!-- For card layouts and horizontal scrolling -->
<div class="rail">
  <div class="col-3">Card 1</div>
  <div class="col-3">Card 2</div>
  <div class="col-3">Card 3</div>
  <div class="col-3">Card 4</div>
</div>
```

### 2. Column Guidelines

#### Mobile-First Approach
```html
<!-- Always consider mobile layout first -->
<div class="rack">
  <!-- These will stack on mobile, side-by-side on larger screens -->
  <div class="col-12 md:col-6 lg:col-4">Item 1</div>
  <div class="col-12 md:col-6 lg:col-4">Item 2</div>
  <div class="col-12 md:col-12 lg:col-4">Item 3</div>
</div>
```

#### Column Distribution Rules
- **Total columns should add up to 12 or less per row**
- **Use offsets sparingly for precise positioning**
- **Consider content hierarchy when choosing column sizes**

```html
<!-- Good: Balanced layout -->
<div class="rack">
  <div class="col-3">Sidebar</div>
  <div class="col-6">Main content</div>
  <div class="col-3">Related</div>
</div>

<!-- Good: Centered content -->
<div class="rack">
  <div class="col-8 offset-2">Centered article</div>
</div>
```

### 3. Offset Usage

#### Strategic Positioning
```html
<!-- Use offsets for intentional whitespace -->
<div class="rack">
  <div class="col-6 offset-3">
    <!-- This creates 25% margin on each side -->
    <h1 class="h1">Centered Title</h1>
  </div>
</div>

<!-- Asymmetric layouts -->
<div class="rack">
  <div class="col-4 offset-2">Content</div>
  <div class="col-4">More content</div>
  <!-- Creates: [2 cols empty] [4 cols content] [4 cols content] [2 cols empty] -->
</div>
```

---

## Typography Guidelines

### 1. Typography Scale

#### Heading Usage
```html
<!-- Use semantic hierarchy -->
<h1 class="h1">Page Title (responsive: text-4xl → text-6xl)</h1>
<h2 class="h2">Section Title (responsive: text-3xl → text-5xl)</h2>
<h3 class="h3">Subsection (responsive: text-2xl → text-4xl)</h3>
<h4 class="h4">Small Heading (responsive: text-xl → text-3xl)</h4>
```

#### Body Text Usage
```html
<!-- Different body text sizes -->
<p class="s1">Subtitle text (responsive: text-lg → text-2xl)</p>
<p class="b1">Primary body text (responsive: text-base → text-xl)</p>
<p class="b2">Secondary body text (responsive: text-sm → text-lg)</p>
<p class="b3">Caption text (responsive: text-xs → text-base)</p>
```

#### Customizing Typography
```css
/* Typography classes are defined in main.css using @apply */
.h1 {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight;
}

/* Customize by modifying the @apply directives */
.h1 {
  @apply text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none;
}
```

### 2. Typography Best Practices

#### Readability
```css
/* Good: Proper line height for readability */
.content {
  line-height: 1.6;
  max-width: 65ch; /* Optimal reading width */
}

/* Good: Adequate contrast */
.text-primary { color: #1a1a1a; }
.text-secondary { color: #6b7280; }
```

#### Responsive Typography
```html
<!-- Typography automatically scales with viewport -->
<article class="rack">
  <div class="col-8 offset-2">
    <h1 class="h1">Responsive Title</h1>
    <p class="b1">This text will scale appropriately across devices.</p>
  </div>
</article>
```

---

## Responsive Design Patterns

### 1. Breakpoint Strategy

#### Mobile-First Development
```css
/* Start with mobile styles */
.component {
  padding: var(--spacing-sm);
  text-align: center;
}

/* Enhance for tablets */
@media (min-width: 48rem) {
  .component {
    padding: var(--spacing-md);
    text-align: left;
  }
}

/* Optimize for desktop */
@media (min-width: 90rem) {
  .component {
    padding: var(--spacing-lg);
  }
}
```

#### Content Reflow Patterns
```html
<!-- Pattern 1: Stack to side-by-side -->
<div class="rack">
  <div class="col-12 md:col-6">Content A</div>
  <div class="col-12 md:col-6">Content B</div>
</div>

<!-- Pattern 2: Centered to full-width -->
<div class="rack">
  <div class="col-12 lg:col-8 lg:offset-2">
    <h1 class="h1">Article Title</h1>
  </div>
</div>

<!-- Pattern 3: Three-column desktop, single mobile -->
<div class="rack">
  <div class="col-12 lg:col-4">Feature 1</div>
  <div class="col-12 lg:col-4">Feature 2</div>
  <div class="col-12 lg:col-4">Feature 3</div>
</div>
```

### 2. Image Responsiveness
```html
<!-- Responsive images -->
<picture>
  <source media="(min-width: 90rem)" srcset="large-image.jpg">
  <source media="(min-width: 48rem)" srcset="medium-image.jpg">
  <img src="small-image.jpg" alt="Description" class="w-full h-auto">
</picture>
```

---

## Testing Procedures

### 1. Browser Testing Checklist
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 2. Device Testing
- [ ] Mobile (375px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px - 1920px)
- [ ] Large Desktop (1920px+)

### 3. Accessibility Testing
```html
<!-- Use WAVE browser extension -->
<!-- Check keyboard navigation -->
<!-- Verify screen reader compatibility -->
<!-- Test color contrast ratios -->
```

### 4. Performance Testing
```bash
# Build and check file sizes
npm run build

# Use browser dev tools to check:
# - CSS bundle size
# - Render performance
# - Layout shifts
```

---

## Performance Guidelines

### 1. CSS Optimization

#### Efficient Selectors
```css
/* Good: Simple, efficient selectors */
.btn-primary { }
.navigation__link { }

/* Avoid: Over-specific selectors */
div.container > .rack > .col-6 > p.text { } /* Too specific */
```

#### Minimize CSS
```bash
# Production build automatically minifies
npm run build
```

### 2. Image Optimization
- Use WebP format when possible
- Compress images before deployment
- Use appropriate image dimensions
- Implement lazy loading for images below fold

### 3. Loading Performance
```html
<!-- Preload critical CSS -->
<link rel="preload" href="dist/output.css" as="style">

<!-- Load non-critical CSS asynchronously -->
<link rel="stylesheet" href="additional.css" media="print" onload="this.media='all'">
```

---

## Common Patterns & Examples

### 1. Header Layout
```html
<header class="rack py-4">
  <div class="col-2">
    <img src="logo.png" alt="Company Logo" class="h-8">
  </div>
  <nav class="col-8">
    <ul class="rail">
      <li class="col-2"><a href="#" class="nav-link">Home</a></li>
      <li class="col-2"><a href="#" class="nav-link">Products</a></li>
      <li class="col-2"><a href="#" class="nav-link">About</a></li>
      <li class="col-2"><a href="#" class="nav-link">Contact</a></li>
    </ul>
  </nav>
  <div class="col-2 text-right">
    <button class="btn-primary">Get Started</button>
  </div>
</header>
```

### 2. Hero Section
```html
<section class="rack section-spacing bg-gray-50">
  <div class="col-6 offset-3 text-center">
    <h1 class="h1 mb-4">Welcome to Our Product</h1>
    <p class="s1 mb-8">Discover amazing features that will transform your workflow.</p>
    <button class="btn-primary">Start Free Trial</button>
  </div>
</section>
```

### 3. Feature Grid
```html
<section class="rack section-spacing">
  <div class="col-12 text-center mb-12">
    <h2 class="h2">Our Features</h2>
  </div>
  
  <div class="col-4">
    <div class="feature-card">
      <h3 class="h3">Fast Performance</h3>
      <p class="b1">Lightning-fast loading times for optimal user experience.</p>
    </div>
  </div>
  
  <div class="col-4">
    <div class="feature-card">
      <h3 class="h3">Secure Platform</h3>
      <p class="b1">Enterprise-grade security to protect your data.</p>
    </div>
  </div>
  
  <div class="col-4">
    <div class="feature-card">
      <h3 class="h3">24/7 Support</h3>
      <p class="b1">Round-the-clock assistance when you need it most.</p>
    </div>
  </div>
</section>
```

### 4. Card Layout with Rail
```html
<section class="section-spacing">
  <div class="rack mb-8">
    <div class="col-12 text-center">
      <h2 class="h2">Latest Products</h2>
    </div>
  </div>
  
  <div class="rail">
    <div class="col-3">
      <div class="product-card">
        <img src="product1.jpg" alt="Product 1" class="w-full">
        <h3 class="h4">Product Name</h3>
        <p class="b2">Product description...</p>
        <button class="btn-secondary">Learn More</button>
      </div>
    </div>
    
    <div class="col-3">
      <div class="product-card">
        <img src="product2.jpg" alt="Product 2" class="w-full">
        <h3 class="h4">Product Name</h3>
        <p class="b2">Product description...</p>
        <button class="btn-secondary">Learn More</button>
      </div>
    </div>
    
    <!-- More products... -->
  </div>
</section>
```

---

## Troubleshooting

### Common Issues

#### 1. Columns Not Aligning
```html
<!-- Problem: Missing container -->
<div class="col-6">Content</div> <!-- Wrong -->

<!-- Solution: Wrap in rack/rail -->
<div class="rack">
  <div class="col-6">Content</div> <!-- Correct -->
</div>
```

#### 2. Typography Not Scaling
```css
/* Problem: Using fixed sizes */
.heading {
  font-size: 24px; /* Wrong */
}

/* Solution: Use typography classes */
.heading {
  @apply h3; /* Correct - uses responsive sizing */
}
```

#### 3. Layout Breaking on Mobile
```html
<!-- Problem: Not considering mobile -->
<div class="rack">
  <div class="col-3">Too narrow on mobile</div>
</div>

<!-- Solution: Use responsive sizing -->
<div class="rack">
  <div class="col-12 md:col-6 lg:col-3">Responsive width</div>
</div>
```

### Debug Mode
```html
<!-- Enable debug mode to visualize grid -->
<script src="/plugins/psp-layout/scripts/debug-mode.js"></script>

<!-- Or conditionally in Ruby/Sinatra -->
<% if @body_class == "debug" %>
  <script src="/plugins/psp-layout/scripts/debug-mode.js"></script>
<% end %>
```

---

## Version History

### v1.0.0 (Current)
- CSS Grid (Rack) + Flexbox (Rail) layout system
- Traditional grid-column-start offset positioning
- Tailwind CSS v4 integration with @theme and @utility syntax
- 60 passing tests with TDD methodology
- Integrated debug functionality within plugin
- Mobile-first responsive design with intelligent breakpoints

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Grid Layout Module](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Performance Best Practices](https://web.dev/performance/)

---

*For questions or contributions, please refer to the project repository or contact the development team.* 