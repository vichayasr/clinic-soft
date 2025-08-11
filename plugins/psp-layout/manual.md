# PSP Layout Plugin Manual

**Last Updated:** 2025-07-29

## Overview

PSP Layout Plugin is a comprehensive layout system that combines CSS Grid (Rack) and Flexbox (Rail) containers with integrated visual debugging tools. This modern grid system provides responsive behavior, perfect centering utilities, and mobile-first design principles.

## What It Is For

The PSP Layout Plugin is designed for:

- **Modern Responsive Layouts**: CSS Grid-based 12-column system with mobile-first approach
- **Horizontal Scrolling Interfaces**: Flexbox-based rail system for carousels and galleries
- **Visual Debugging**: Built-in debugging tools for development and testing
- **Perfect Centering**: Systematic offset utilities for precise positioning
- **Developer Productivity**: Comprehensive testing suite and clear documentation

## Key Features

### Core Layout Systems
- **Rack System**: CSS Grid with 12-column responsive behavior
- **Rail System**: Flexbox with fixed-width columns and horizontal scrolling
- **Mobile-First Design**: col-1/2 = 50%, col-3+ = 100% on mobile
- **Grid Positioning**: offset-* utilities using grid-column-start for precise positioning

### Visual Debugging Tools
- **Debug Mode Toggle**: Enable/disable visual debugging
- **Element Inspector**: Real-time element highlighting with detailed tooltips
- **Viewport Controls**: Breakpoint reference and viewport width indicator
- **Territory Lines**: Visual container and column boundaries
- **Responsive Indicators**: Live breakpoint and width display

### Technical Implementation
- **Tailwind v4 Compatible**: Uses modern @theme and @utility syntax
- **CSS Custom Properties**: Configurable gaps, padding, and column widths
- **Test-Driven Development**: 60 passing Jest tests for reliability
- **Cross-Browser Support**: Modern browser compatibility with graceful degradation

## Installation

### 1. Copy Plugin Files
Copy the entire `psp-layout/` directory to your project's plugin folder:

```
your-project/
├── plugins/
│   └── psp-layout/
│       ├── scripts/
│       │   ├── twlayout-plugin.js
│       │   ├── grid-config.js
│       │   └── debug-mode.js
│       ├── styles/
│       │   └── debug-mode.css
│       └── manual.md
```

### 2. CSS Integration (Tailwind v4)
Add the plugin import to your main CSS file:

```css
@import "tailwindcss";
@import "../plugins/psp-layout/styles/debug-mode.css";
```

### 3. JavaScript Integration
Add the debug script to your HTML template:

```html
<!-- Include debug functionality (optional) -->
<script src="/plugins/psp-layout/scripts/debug-mode.js"></script>
```

### 4. Tailwind Plugin Configuration
If using Tailwind config file, add the plugin:

```javascript
// tailwind.config.js
const pspLayoutPlugin = require('./plugins/psp-layout/scripts/twlayout-plugin.js');

module.exports = {
  plugins: [
    pspLayoutPlugin
  ]
}
```

## Usage Examples

### Basic Rack Layout (CSS Grid)
```html
<div class="rack">
  <div class="col-6">Left content (50% width)</div>
  <div class="col-6">Right content (50% width)</div>
</div>

<div class="rack">
  <div class="col-4">Card 1 (33% width)</div>
  <div class="col-4">Card 2 (33% width)</div>
  <div class="col-4">Card 3 (33% width)</div>
</div>
```

### Rail Layout (Horizontal Scroll)
```html
<div class="rail">
  <div class="col-3">Fixed width item</div>
  <div class="col-3">Fixed width item</div>
  <div class="col-3">Fixed width item</div>
  <div class="col-3">Fixed width item</div>
  <!-- Scrolls horizontally if content exceeds viewport -->
</div>
```

### Grid Positioning with Offsets
```html
<div class="rack">
  <div class="offset-2 col-8">Content starts at column 3, spans 8 columns</div>
</div>

<div class="rack">
  <div class="offset-1 col-3">Left element (starts at column 2, spans 3)</div>
  <div class="col-8">Right element (spans 8 columns normally)</div>
</div>
```

### Debug Mode Usage
The debug functionality is automatically available once the script is loaded:

1. **Toggle Debug Mode**: Click the "Debug Mode" button in the bottom-left corner
2. **Element Inspector**: Hover over elements to see detailed information
3. **Viewport Controls**: Click the viewport indicator to see breakpoint reference
4. **Visual Boundaries**: See rack/rail containers and column outlines

## Responsive Behavior

### Breakpoint System
- **sm (0-767px)**: Mobile-first behavior
  - col-1, col-2 = 50% width (span 6)
  - col-3+ = 100% width (span 12)
- **md (768px+)**: 7-column proportional system
- **lg (1024px+)**: Standard 12-column grid
- **xl (1280px+)**: Standard 12-column grid

### Column Behavior
```html
<!-- Responsive example -->
<div class="rack">
  <div class="col-4">
    <!-- Mobile: 100% width -->
    <!-- Tablet: ~57% width (7/12) -->
    <!-- Desktop: 33% width (4/12) -->
  </div>
</div>
```

## Configuration

### CSS Custom Properties
```css
@theme {
  --grid-columns: 12;
  --base-gap: 1rem;
  --container-padding: 1.5rem;
}
```

### Debug Settings
```javascript
// Debug mode persistence key
const DEBUG_MODE_KEY = 'twlayout-debug-mode';

// Viewport configurations
const VIEWPORTS = {
  sm: { viewportWidth: 640, description: 'Small devices' },
  md: { viewportWidth: 768, description: 'Medium devices' },
  lg: { viewportWidth: 1024, description: 'Desktop' },
  xl: { viewportWidth: 1280, description: 'Large screens' }
};
```

## Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

### Test Coverage
- **60 passing tests** covering all grid functionality (100% pass rate)
- **4 test files**: rack-system, rail-system, responsive-behavior, offset-system
- **jsdom environment** for CSS testing
- **TDD implementation** ensuring reliability

## Browser Support

### Modern Browsers
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### Required Features
- CSS Grid support
- Flexbox support
- CSS Custom Properties
- Local Storage (for debug mode)

## Uninstalling

### Remove Plugin Files
1. Delete the `plugins/psp-layout/` directory
2. Remove CSS import from your main stylesheet:
   ```css
   /* Remove this line */
   @import "../plugins/psp-layout/styles/debug-mode.css";
   ```
3. Remove debug script from HTML templates:
   ```html
   <!-- Remove this line -->
   <script src="/plugins/psp-layout/scripts/debug-mode.js"></script>
   ```
4. Remove Tailwind plugin configuration if used
5. Clear localStorage debug settings:
   ```javascript
   localStorage.removeItem('twlayout-debug-mode');
   ```

### Clean Up CSS Classes
Replace PSP Layout classes with standard alternatives:
- `.rack` → `.grid grid-cols-12`
- `.rail` → `.flex overflow-x-auto`
- `.col-6` → `.col-span-6`
- `.offset-2` → `.col-start-3`

## Technical Documentation

### Grid Configuration
The system uses mathematical precision for column calculations:

- **Mobile**: Mobile-first responsive behavior with 2-column maximum
- **Tablet**: 7-column proportional system where col-7+ = full width
- **Desktop**: Standard 12-column grid with full flexibility

### Offset System
Traditional CSS Grid positioning using grid-column-start:
```css
.offset-1 { grid-column-start: 2; } /* Start at column 2 (skip 1) */
.offset-2 { grid-column-start: 3; } /* Start at column 3 (skip 2) */
```

### Debug Implementation
- **Element Inspector**: Smart positioning algorithm for tooltips
- **Viewport Detection**: Real-time breakpoint calculation
- **Persistent State**: localStorage for debug mode preference
- **Performance**: Efficient event delegation and throttling

## Troubleshooting

### Common Issues

1. **Debug mode not working**:
   - Ensure debug-mode.js is loaded
   - Check browser console for errors
   - Verify CSS import path is correct

2. **Columns not responsive**:
   - Confirm Tailwind CSS v4 compatibility
   - Check CSS compilation process
   - Verify breakpoint values

3. **Rail not scrolling**:
   - Ensure content exceeds container width
   - Check for conflicting CSS overflow properties
   - Verify rail column fixed widths

### Debug Commands
```bash
# Build CSS
npm run build:css

# Watch CSS changes
npm run watch:css

# Start development server
npm run dev
```

## Support

For issues and questions:
- Check the comprehensive test suite for expected behavior
- Review the offset system documentation for centering issues
- Examine the grid configuration for responsive behavior details

---

*Created by Pattaya Upara (everysundays@gmail.com)*  
*Part of the PSP (Pattaya Studio Project) plugin ecosystem*