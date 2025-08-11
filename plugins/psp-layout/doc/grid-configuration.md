# Grid Configuration Documentation

**Last Updated:** 2025-07-29  
**PSP-ENV Version:** 1.0.0

## Overview

This document contains detailed documentation for the Rack & Rail Grid System configuration. The grid system provides responsive CSS Grid (Rack) and Flexbox (Rail) containers with mobile-first design principles, implemented through Tailwind CSS v4.

## System Constants

- **Container Padding**: 1.5rem (24px) - Standard padding for all containers
- **Gap**: 1rem (16px) - Standard gap between columns  
- **Max Columns**: 12 - Maximum number of columns supported
- **Grid Template**: `repeat(12, minmax(0, 1fr))` - CSS Grid column definition

## Viewport Breakpoints

The grid system uses responsive breakpoints aligned with Tailwind CSS v4 standards:

| Breakpoint | Min Width CSS | Description | Implementation |
|------------|---------------|-------------|----------------|
| xs/sm | 0px | Mobile-first (default) | col-1/2 = span 6, col-3+ = span 12 |
| md | 768px | Medium devices | 7-column proportional system |
| lg | 1024px | Large devices | Standard 12-column grid |
| xl | 1280px | Extra large devices | Standard 12-column grid |
| 2xl | 1536px | 2X-Large devices | Standard 12-column grid |

## Current Implementation - CSS Grid Span System

### Rack Columns - Mobile Optimized (xs/sm: 0-767px)

**Current Implementation**: CSS Grid span-based system
```css
.col-1 { grid-column: span 6; }  /* 50% width */
.col-2 { grid-column: span 6; }  /* 50% width */
.col-3 { grid-column: span 12; } /* 100% width */
/* col-4 through col-12 all span 12 (100% width) */
```

**Strategy**: Mobile-first responsive behavior
- **col-1 to col-2**: `span 6` - allows 2 columns per row (50% each)
- **col-3 to col-12**: `span 12` - full width for mobile simplicity
- **Purpose**: Optimized mobile layout with 2-column capability

### Rack Columns - 7-Column Proportional System (md: 768px+)

**Current Implementation**: Proportional 7-column system
```css
.col-1 { grid-column: span 2; }  /* ~16.67% */
.col-2 { grid-column: span 3; }  /* ~25% */
.col-3 { grid-column: span 5; }  /* ~41.67% */
.col-4 { grid-column: span 7; }  /* ~58.33% */
.col-5 { grid-column: span 9; }  /* ~75% */
.col-6 { grid-column: span 10; } /* ~83.33% */
.col-7 { grid-column: span 12; } /* 100% (threshold) */
/* col-8 through col-12 all span 12 (100% width) */
```

**Strategy**: 7-column proportional system where col-7+ = full width
- **Mathematical basis**: Each span calculated as `(col-number / 7) × 12`
- **Threshold behavior**: col-7 and above use full width (span 12)
- **Balanced proportions**: Creates harmonious mid-size layouts

### Rack Columns - Standard 12-Column Grid (lg: 1024px+, xl: 1280px+, 2xl: 1536px+)

**Current Implementation**: Standard CSS Grid system
```css
.col-1 { grid-column: span 1; }   /* 8.33% */
.col-2 { grid-column: span 2; }   /* 16.67% */
.col-3 { grid-column: span 3; }   /* 25% */
/* ... continues linearly ... */
.col-12 { grid-column: span 12; } /* 100% */
```

**Strategy**: Traditional 12-column grid system
- **Linear progression**: Each column spans exactly its number (1-12)
- **Maximum flexibility**: Supports all standard grid combinations
- **Industry standard**: Compatible with Bootstrap and other frameworks

### Rail Columns - Fixed Width System

**Current Implementation**: Consistent fixed widths across all breakpoints
```css
.rail .col-1 { width: 16rem; min-width: 16rem; flex-shrink: 0; }
.rail .col-2 { width: 20rem; min-width: 20rem; flex-shrink: 0; }
.rail .col-3 { width: 24rem; min-width: 24rem; flex-shrink: 0; }
/* ... continues incrementally ... */
.rail .col-12 { width: 100%; min-width: 100%; flex-shrink: 0; }
```

**Strategy**: Fixed-width flexbox columns for horizontal scrolling
- **Purpose**: Image galleries, card carousels, horizontal content
- **Consistent sizing**: Same widths across all breakpoints (16rem to 56rem)
- **Special case**: col-12 uses 100% for slide effect
- **Overflow behavior**: Creates horizontal scroll with hidden scrollbars

### Rail Gaps - Dual Gap System

**Current Implementation**: Two gap modes for different use cases
```css
/* Default rail gap */
.rail { gap: var(--container-padding); } /* 1.5rem */

/* Standard mode (tighter spacing) */
.rail-standard { gap: var(--base-gap) !important; } /* 1rem */

/* Slide mode (seamless transitions) */
.rail-slide { gap: var(--container-padding) !important; } /* 1.5rem */
```

**Strategy**: Context-dependent gap handling
- **Default**: Container padding (1.5rem) for seamless slides
- **Standard mode**: Base gap (1rem) for tighter card layouts
- **Slide mode**: Container padding for full-screen sliding content

### Offset System - Grid Position-Based Centering

**Current Implementation**: Traditional CSS Grid offset approach
```css
.offset-1 { grid-column-start: 2; } /* Start at column 2 (skip 1) */
.offset-2 { grid-column-start: 3; } /* Start at column 3 (skip 2) */
.offset-3 { grid-column-start: 4; } /* Start at column 4 (skip 3) */
/* ... continues through offset-11 */
```

**Strategy**: Traditional grid positioning system
- **Method**: Changes starting position using `grid-column-start`
- **Effect**: Shifts content to the right by n columns
- **Usage**: Combine with .col-X classes for precise positioning
- **Responsive**: Works consistently across all breakpoints

**Usage Examples**:
- `offset-1 col-10`: Content starts at column 2, spans 10 columns
- `offset-2 col-8`: Content starts at column 3, spans 8 columns  
- `offset-3 col-6`: Content starts at column 4, spans 6 columns

**Legacy Support**: Additional `offset-center-X` classes for backward compatibility

**See**: [Complete Offset System Documentation](./offset-system.md) for detailed implementation

## Technical Implementation

### Current Architecture (PSP-ENV v1.0.0)

**Built with**:
- **Tailwind CSS v4.1.11**: CSS-first configuration using `@theme` and `@utility`
- **CSS Grid**: 12-column flexible grid system for `.rack` containers
- **Flexbox**: Fixed-width columns with horizontal scroll for `.rail` containers
- **CSS Custom Properties**: Configurable gaps, padding, and rail column widths
- **Mobile-First**: Responsive breakpoints starting from 0px (xs/sm)

### Core CSS Structure

```css
@theme {
  --grid-columns: 12;
  --base-gap: 1rem;
  --container-padding: 1.5rem;
}

@utility rack {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--base-gap);
  width: 100%;
  padding-inline: var(--container-padding);
  box-sizing: border-box;
}

@utility rail {
  display: flex;
  gap: var(--container-padding);
  overflow-x: auto;
  width: 100%;
  padding-inline: var(--container-padding);
  flex-wrap: nowrap;
  scrollbar-width: none;
}
```

### Quality Assurance

**Test Coverage**: 60 passing Jest tests (100% pass rate)
- **Test Environment**: jsdom for CSS property simulation
- **Coverage Areas**: Rack system, Rail system, Offset system, Responsive behavior
- **TDD Methodology**: Test-driven development with comprehensive edge case coverage

**Browser Support**:
- **Chrome 60+**: Full CSS Grid and Flexbox support
- **Firefox 55+**: Complete grid functionality
- **Safari 12+**: Modern CSS Grid implementation
- **Edge 79+**: Chromium-based full support

### Integration Points

**Ruby/Sinatra Application**:
- **Static Assets**: CSS served from `/public/css/main.css`
- **Build System**: Tailwind CLI compilation with watch mode
- **Demo Integration**: Live demo at `/demo` endpoint
- **API Integration**: Grid information available at `/api/grid-info`

**Development Workflow**:
```bash
npm run build:css    # Compile CSS from tailwind.css to main.css
npm run watch:css    # Watch mode for development
npm run dev          # Concurrent CSS watch + Ruby server
npm test             # Run complete test suite (60 tests)
```

### Key Design Decisions

1. **Span-based Grid System**: Uses `grid-column: span N` instead of fractional widths
2. **Mobile-First Responsive**: Starts with xs/sm (0px) and scales up
3. **7-Column Mid-Tier**: md breakpoint uses proportional 7-column system for balanced layouts
4. **Fixed Rail Widths**: Rail columns use consistent rem values across breakpoints
5. **Traditional Offsets**: Uses `grid-column-start` for predictable positioning behavior