# Offset System Documentation

**Last Updated:** 2025-07-29  
**PSP-ENV Version:** 1.0.0

## Overview

The offset system provides grid positioning capabilities for the Rack & Rail grid system. This implementation uses traditional CSS Grid positioning methods that shift element starting positions within the 12-column grid.

## Core Concept

### Current Implementation
The offset system uses `grid-column-start` to position elements within the CSS Grid:

```css
.offset-1 { grid-column-start: 2; } /* Start at column 2 (skip 1) */
.offset-2 { grid-column-start: 3; } /* Start at column 3 (skip 2) */
.offset-3 { grid-column-start: 4; } /* Start at column 4 (skip 3) */
/* ... continues through offset-11 */
```

### Key Principles
1. **Grid positioning**: Changes the starting position of elements within the CSS Grid
2. **Traditional approach**: Uses standard CSS Grid `grid-column-start` property
3. **Predictable behavior**: Shifts content to the right by exactly n columns
4. **Responsive consistency**: Works identically across all breakpoints

## Implementation

### Primary Offset Classes
```css
.offset-1 { grid-column-start: 2; }  /* Skip 1 column, start at 2 */
.offset-2 { grid-column-start: 3; }  /* Skip 2 columns, start at 3 */
.offset-3 { grid-column-start: 4; }  /* Skip 3 columns, start at 4 */
.offset-4 { grid-column-start: 5; }  /* Skip 4 columns, start at 5 */
.offset-5 { grid-column-start: 6; }  /* Skip 5 columns, start at 6 */
.offset-6 { grid-column-start: 7; }  /* Skip 6 columns, start at 7 */
.offset-7 { grid-column-start: 8; }  /* Skip 7 columns, start at 8 */
.offset-8 { grid-column-start: 9; }  /* Skip 8 columns, start at 9 */
.offset-9 { grid-column-start: 10; } /* Skip 9 columns, start at 10 */
.offset-10 { grid-column-start: 11; }/* Skip 10 columns, start at 11 */
.offset-11 { grid-column-start: 12; }/* Skip 11 columns, start at 12 */
```

### Legacy Offset-Center Classes (Backward Compatibility)
```css
.offset-center-1 { grid-column: 6 / span 1; }   /* Column 6, span 1 */
.offset-center-2 { grid-column: 6 / span 2; }   /* Column 6, span 2 */
.offset-center-3 { grid-column: 5 / span 3; }   /* Column 5, span 3 */
.offset-center-4 { grid-column: 5 / span 4; }   /* Column 5, span 4 */
/* ... continues with pre-calculated centered positions */
```

## Usage Examples

### Basic Grid Positioning
```html
<!-- Element positioned to start at column 2, span 10 columns -->
<div class="rack">
  <div class="offset-1 col-10">Content starts at column 2, spans 10 columns</div>
</div>

<!-- Element positioned to start at column 3, span 8 columns -->
<div class="rack">
  <div class="offset-2 col-8">Content starts at column 3, spans 8 columns</div>
</div>
```

### Multi-Element Layouts
```html
<!-- Layout with offset element + regular element -->
<div class="rack">
  <div class="offset-1 col-3">First element (starts at column 2, spans 3)</div>
  <div class="col-8">Second element (spans 8 columns normally)</div>
  <!-- Total: First element uses columns 2-4, second uses columns 5-12 -->
</div>
```

### Centered Layouts Using Legacy Classes
```html
<!-- Using offset-center classes for pre-calculated centering -->
<div class="rack">
  <div class="offset-center-6">6-column element centered in grid</div>
</div>

<div class="rack">
  <div class="offset-center-4">4-column element centered in grid</div>
</div>
```

## Technical Details

### Responsive Behavior
The offset system works consistently across all responsive breakpoints:
- **xs/sm (0-767px)**: Offset positioning works with mobile column spans
- **md (768px+)**: Offset positioning works with 7-column proportional system  
- **lg+ (1024px+)**: Offset positioning works with standard 12-column grid
- **Consistent behavior**: `grid-column-start` values remain constant across breakpoints

### Integration with CSS Grid
The offset system leverages CSS Grid's built-in positioning capabilities:
- **Grid lines**: Uses CSS Grid's numbered grid lines (1-13 for 12-column grid)
- **Automatic spanning**: Combined with `.col-X` classes for precise element placement
- **No JavaScript required**: Pure CSS Grid positioning

### Calculation Logic

For any `offset-N` class:
- **Starting position**: Column N + 1 (skip N columns)
- **Grid line targeting**: `grid-column-start: N + 1`
- **Compatible with spans**: Works with any `.col-X` class for width control

Example: `offset-3 col-6`
- Starts at column 4 (skip 3 columns)
- Spans 6 columns from starting position
- Occupies grid columns 4-9

## Current vs Legacy Approach

| Current Implementation | Legacy offset-center |
|----------------------|---------------------|
| `grid-column-start: N+1` | `grid-column: start / span width` |
| Flexible positioning | Pre-calculated centering |
| Combine with any .col-X | Fixed width+position combinations |
| Standard CSS Grid behavior | Custom centered positioning |

## Browser Support

- **Chrome 60+**: Full CSS Grid support
- **Firefox 55+**: Complete grid-column-start support
- **Safari 12+**: Modern CSS Grid implementation
- **Edge 79+**: Chromium-based full support
- **No polyfills required**: Uses standard CSS Grid properties

## Current Implementation in tailwind.css

```css
/* Primary offset utilities */
@utility offset-1 { grid-column-start: 2; }
@utility offset-2 { grid-column-start: 3; }
@utility offset-3 { grid-column-start: 4; }
/* ... continues through offset-11 */

/* Legacy offset-center utilities (backward compatibility) */
@utility offset-center-1 { grid-column: 6 / span 1; }
@utility offset-center-2 { grid-column: 6 / span 2; }
/* ... pre-calculated centered positions */
```

## Best Practices

1. **Use with .rack containers**: Offset system requires CSS Grid `.rack` containers
2. **Combine with .col-X classes**: Use offsets for positioning, columns for width
3. **Plan grid overflow**: Ensure offset + column span doesn't exceed 12 columns
4. **Test responsive behavior**: Verify layouts work across all breakpoints

## Common Usage Patterns

### Sidebar Layouts
```html
<div class="rack">
  <div class="col-3">Sidebar</div>
  <div class="offset-1 col-8">Main content with gap</div>
</div>
```

### Centered Content
```html
<div class="rack">
  <div class="offset-2 col-8">Centered content block</div>
</div>
```

### Asymmetric Layouts
```html
<div class="rack">
  <div class="offset-3 col-6">Offset content</div>
  <div class="col-3">Side element</div>
</div>
```

## Quality Assurance

**Test Coverage**: Offset system covered in comprehensive test suite
- **Integration tests**: Verify offset + column combinations work correctly
- **Responsive tests**: Confirm consistent behavior across breakpoints  
- **Edge case tests**: Test boundary conditions (offset-11, etc.)
- **CSS property tests**: Validate `grid-column-start` values are applied correctly