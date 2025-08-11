/**
 * Rack & Rail Grid System Configuration v1.0.0
 * ==============================================
 * 
 * Modern CSS Grid-based configuration for the responsive grid system.
 * This file contains simplified span-based column definitions.
 * 
 * Architecture:
 * - SYSTEM: Global constants and settings
 * - VIEWPORTS: Responsive breakpoint definitions (simplified)
 * - RACK_COLUMNS: CSS Grid span values for responsive columns
 * - RAIL_COLUMNS: Fixed-width columns for horizontal scrolling
 * - RAIL_GAPS: Special gap handling for rail containers
 * 
 * ==============================================
 * CSS GRID SPAN SYSTEM
 * ==============================================
 * 
 * RACK_COLUMNS now use CSS Grid spans instead of percentages:
 * 
 * 1. SM Breakpoint (Mobile-First):
 *    - col-1, col-2: span 6 (50% width each)
 *    - col-3 to col-12: span 12 (100% width)
 *    - Purpose: Mobile-optimized layout with 2-column capability
 * 
 * 2. MD Breakpoint (7-Column System):
 *    - Based on 7-column grid where col-7+ = 100% width
 *    - col-1: span 2, col-2: span 3, col-3: span 5, etc.
 *    - col-6: span 10 (narrower than 100%)
 *    - col-7+: span 12 (100% width)
 * 
 * 3. LG+ Breakpoints (Standard 12-Column):
 *    - col-1: span 1, col-2: span 2, ..., col-12: span 12
 *    - Standard CSS Grid behavior
 */

// =============================================================================
// SYSTEM CONFIGURATION
// =============================================================================

/**
 * System-wide constants that affect all grid behavior
 */
const SYSTEM = {
  CONTAINER_PADDING: '1.5rem',        // Standard padding for all containers (24px)
  GAP: '1rem',                        // Standard gap between columns (16px)
  DEBUG_MODE_KEY: 'rack-rail-debug-mode',  // localStorage key for debug mode
  
  // Grid validation settings
  MAX_COLUMNS: 12,                    // Maximum number of columns supported
  MIN_VIEWPORT_WIDTH: 320,            // Minimum supported viewport width (px)
  MAX_VIEWPORT_WIDTH: 3420,           // Maximum supported viewport width (px)
};

// =============================================================================
// VIEWPORT BREAKPOINTS
// =============================================================================

/**
 * Simplified responsive breakpoint configuration
 * Aligned with Tailwind CSS breakpoints and current implementation
 */
const VIEWPORTS = {
  sm: {
    viewportWidth: 640,               // Mobile-first breakpoint
    minWidth: '0',                    // Starting from 0px
    containerPadding: 24,             // Container padding (px)
    availableSpace: 592,              // Available space for content
    description: 'Small devices (mobile-first), 0-767px'
  },
  md: {
    viewportWidth: 768,               // Tailwind md breakpoint
    minWidth: '48rem',                // CSS min-width (768px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 704,              // Available space for content
    description: 'Medium devices (tablets), 768px+'
  },
  lg: {
    viewportWidth: 1024,              // Tailwind lg breakpoint
    minWidth: '64rem',                // CSS min-width (1024px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 960,              // Available space for content
    description: 'Large devices (desktops), 1024px+'
  },
  xl: {
    viewportWidth: 1280,              // Tailwind xl breakpoint
    minWidth: '80rem',                // CSS min-width (1280px)
    containerPadding: 32,             // Container padding (px)
    availableSpace: 1216,             // Available space for content
    description: 'Extra large devices (large desktops), 1280px+'
  }
};

// =============================================================================
// RACK COLUMNS (CSS Grid Spans)
// =============================================================================

/**
 * Rack column spans for CSS Grid
 * These values define how many grid columns each .col-X class should span
 * 
 * CSS Grid spans replace the old percentage-based system
 */
const RACK_COLUMNS = {
  sm: {
    1: 'span 6',   // 50% width (6/12 columns)
    2: 'span 6',   // 50% width (6/12 columns)
    3: 'span 12',  // 100% width (12/12 columns)
    4: 'span 12',  // 100% width
    5: 'span 12',  // 100% width
    6: 'span 12',  // 100% width
    7: 'span 12',  // 100% width
    8: 'span 12',  // 100% width
    9: 'span 12',  // 100% width
    10: 'span 12', // 100% width
    11: 'span 12', // 100% width
    12: 'span 12', // 100% width
  },
  md: {
    1: 'span 2',   // ~16.67% width in 7-column system (2/12 of total grid)
    2: 'span 3',   // ~25% width in 7-column system (3/12 of total grid)
    3: 'span 5',   // ~41.67% width in 7-column system (5/12 of total grid)
    4: 'span 7',   // ~58.33% width in 7-column system (7/12 of total grid)
    5: 'span 9',   // ~75% width in 7-column system (9/12 of total grid)
    6: 'span 10',  // ~83.33% width in 7-column system (10/12 of total grid)
    7: 'span 12',  // 100% width (12/12 columns)
    8: 'span 12',  // 100% width
    9: 'span 12',  // 100% width
    10: 'span 12', // 100% width
    11: 'span 12', // 100% width
    12: 'span 12', // 100% width
  },
  lg: {
    1: 'span 1',   // Standard 12-column grid
    2: 'span 2',   // Standard 12-column grid
    3: 'span 3',   // Standard 12-column grid
    4: 'span 4',   // Standard 12-column grid
    5: 'span 5',   // Standard 12-column grid
    6: 'span 6',   // Standard 12-column grid
    7: 'span 7',   // Standard 12-column grid
    8: 'span 8',   // Standard 12-column grid
    9: 'span 9',   // Standard 12-column grid
    10: 'span 10', // Standard 12-column grid
    11: 'span 11', // Standard 12-column grid
    12: 'span 12', // Standard 12-column grid
  },
  xl: {
    1: 'span 1',   // Standard 12-column grid
    2: 'span 2',   // Standard 12-column grid
    3: 'span 3',   // Standard 12-column grid
    4: 'span 4',   // Standard 12-column grid
    5: 'span 5',   // Standard 12-column grid
    6: 'span 6',   // Standard 12-column grid
    7: 'span 7',   // Standard 12-column grid
    8: 'span 8',   // Standard 12-column grid
    9: 'span 9',   // Standard 12-column grid
    10: 'span 10', // Standard 12-column grid
    11: 'span 11', // Standard 12-column grid
    12: 'span 12', // Standard 12-column grid
  }
};

// =============================================================================
// RAIL COLUMNS (Fixed Width)
// =============================================================================

/**
 * Rail column widths as fixed rem values
 * These columns maintain consistent width regardless of container size
 * Ideal for horizontal scrolling layouts and card-based designs
 */
const RAIL_COLUMNS = {
  sm: {
    1: '16rem',     // 256px - Compact card size
    2: '20rem',     // 320px - Standard card size
    3: '24rem',     // 384px - Extended card size
    4: '28rem',     // 448px - Large card size
    5: '32rem',     // 512px - Extra large card
    6: '36rem',     // 576px - Oversized card
    7: '40rem',     // 640px - Banner size
    8: '44rem',     // 704px - Large banner
    9: '48rem',     // 768px - Tablet width
    10: '52rem',    // 832px - Extended tablet
    11: '56rem',    // 896px - Small desktop
    12: '100%',     // Full available width for slide effect
  },
  md: {
    1: '16rem',     // 256px
    2: '20rem',     // 320px
    3: '24rem',     // 384px
    4: '28rem',     // 448px
    5: '32rem',     // 512px
    6: '36rem',     // 576px
    7: '40rem',     // 640px
    8: '44rem',     // 704px
    9: '48rem',     // 768px
    10: '52rem',    // 832px
    11: '56rem',    // 896px
    12: '100%',     // Full available width for slide effect
  },
  lg: {
    1: '16rem',     // 256px
    2: '20rem',     // 320px
    3: '24rem',     // 384px
    4: '28rem',     // 448px
    5: '32rem',     // 512px
    6: '36rem',     // 576px
    7: '40rem',     // 640px
    8: '44rem',     // 704px
    9: '48rem',     // 768px
    10: '52rem',    // 832px
    11: '56rem',    // 896px
    12: '100%',     // Full available width for slide effect
  },
  xl: {
    1: '16rem',     // 256px
    2: '20rem',     // 320px
    3: '24rem',     // 384px
    4: '28rem',     // 448px
    5: '32rem',     // 512px
    6: '36rem',     // 576px
    7: '40rem',     // 640px
    8: '44rem',     // 704px
    9: '48rem',     // 768px
    10: '52rem',    // 832px
    11: '56rem',    // 896px
    12: '100%',     // Full available width for slide effect
  }
};

// =============================================================================
// RAIL GAPS (Special Gap Handling)
// =============================================================================

/**
 * Rail gap configuration for different use cases
 * 
 * SLIDE_MODE: Gap matches container padding for seamless slide transitions
 */
const RAIL_GAPS = {
  // Standard gap for normal rail columns
  STANDARD: '1rem',
  
  // Special gap for slide-mode (matches container padding)
  SLIDE_MODE: {
    sm: '1.5rem',     // Matches sm containerPadding (24px)
    md: '2rem',       // Matches md containerPadding (32px)  
    lg: '2rem',       // Matches lg containerPadding (32px)
    xl: '2rem',       // Matches xl containerPadding (32px)
  }
};

// =============================================================================
// OFFSETS (Systematic Padding-Based Centering)
// =============================================================================

/**
 * Offset configuration for pseudo-centering using systematic calculations
 * 
 * CONCEPT:
 * - offset-n creates equal padding on both sides using formula: (n * column + n * gutter) ÷ 2
 * - Uses CSS custom properties and calc() for systematic scaling
 * - Leverages existing --base-gap and grid system variables
 * 
 * EXAMPLES:
 * - .offset-1 + .col-10 = content spans columns 1-11 with 0.5 column padding each side
 * - .offset-1 + .col-3 + .col-8 = 11 columns centered with balanced spacing
 * 
 * SYSTEMATIC APPROACH:
 * - No hardcoded pixel values
 * - Scales with existing Tailwind CSS responsive system
 * - Uses calc() with CSS custom properties for automatic viewport scaling
 */
const OFFSETS = {
  sm: {
    1: 'calc((1 * var(--offset-base) + 1 * var(--offset-gap)) / 2)',
    2: 'calc((2 * var(--offset-base) + 2 * var(--offset-gap)) / 2)',
    3: 'calc((3 * var(--offset-base) + 3 * var(--offset-gap)) / 2)',
    4: 'calc((4 * var(--offset-base) + 4 * var(--offset-gap)) / 2)',
    5: 'calc((5 * var(--offset-base) + 5 * var(--offset-gap)) / 2)',
    6: 'calc((6 * var(--offset-base) + 6 * var(--offset-gap)) / 2)',
    7: 'calc((7 * var(--offset-base) + 7 * var(--offset-gap)) / 2)',
    8: 'calc((8 * var(--offset-base) + 8 * var(--offset-gap)) / 2)',
    9: 'calc((9 * var(--offset-base) + 9 * var(--offset-gap)) / 2)',
    10: 'calc((10 * var(--offset-base) + 10 * var(--offset-gap)) / 2)',
    11: 'calc((11 * var(--offset-base) + 11 * var(--offset-gap)) / 2)',
  },
  md: {
    1: 'calc((1 * var(--offset-base) + 1 * var(--offset-gap)) / 2)',
    2: 'calc((2 * var(--offset-base) + 2 * var(--offset-gap)) / 2)',
    3: 'calc((3 * var(--offset-base) + 3 * var(--offset-gap)) / 2)',
    4: 'calc((4 * var(--offset-base) + 4 * var(--offset-gap)) / 2)',
    5: 'calc((5 * var(--offset-base) + 5 * var(--offset-gap)) / 2)',
    6: 'calc((6 * var(--offset-base) + 6 * var(--offset-gap)) / 2)',
    7: 'calc((7 * var(--offset-base) + 7 * var(--offset-gap)) / 2)',
    8: 'calc((8 * var(--offset-base) + 8 * var(--offset-gap)) / 2)',
    9: 'calc((9 * var(--offset-base) + 9 * var(--offset-gap)) / 2)',
    10: 'calc((10 * var(--offset-base) + 10 * var(--offset-gap)) / 2)',
    11: 'calc((11 * var(--offset-base) + 11 * var(--offset-gap)) / 2)',
  },
  lg: {
    1: 'calc((1 * var(--offset-base) + 1 * var(--offset-gap)) / 2)',
    2: 'calc((2 * var(--offset-base) + 2 * var(--offset-gap)) / 2)',
    3: 'calc((3 * var(--offset-base) + 3 * var(--offset-gap)) / 2)',
    4: 'calc((4 * var(--offset-base) + 4 * var(--offset-gap)) / 2)',
    5: 'calc((5 * var(--offset-base) + 5 * var(--offset-gap)) / 2)',
    6: 'calc((6 * var(--offset-base) + 6 * var(--offset-gap)) / 2)',
    7: 'calc((7 * var(--offset-base) + 7 * var(--offset-gap)) / 2)',
    8: 'calc((8 * var(--offset-base) + 8 * var(--offset-gap)) / 2)',
    9: 'calc((9 * var(--offset-base) + 9 * var(--offset-gap)) / 2)',
    10: 'calc((10 * var(--offset-base) + 10 * var(--offset-gap)) / 2)',
    11: 'calc((11 * var(--offset-base) + 11 * var(--offset-gap)) / 2)',
  },
  xl: {
    1: 'calc((1 * var(--offset-base) + 1 * var(--offset-gap)) / 2)',
    2: 'calc((2 * var(--offset-base) + 2 * var(--offset-gap)) / 2)',
    3: 'calc((3 * var(--offset-base) + 3 * var(--offset-gap)) / 2)',
    4: 'calc((4 * var(--offset-base) + 4 * var(--offset-gap)) / 2)',
    5: 'calc((5 * var(--offset-base) + 5 * var(--offset-gap)) / 2)',
    6: 'calc((6 * var(--offset-base) + 6 * var(--offset-gap)) / 2)',
    7: 'calc((7 * var(--offset-base) + 7 * var(--offset-gap)) / 2)',
    8: 'calc((8 * var(--offset-base) + 8 * var(--offset-gap)) / 2)',
    9: 'calc((9 * var(--offset-base) + 9 * var(--offset-gap)) / 2)',
    10: 'calc((10 * var(--offset-base) + 10 * var(--offset-gap)) / 2)',
    11: 'calc((11 * var(--offset-base) + 11 * var(--offset-gap)) / 2)',
  }
};

// =============================================================================
// VALIDATION UTILITIES
// =============================================================================

/**
 * Validates the grid configuration for consistency and correctness
 * @returns {Object} Validation result with isValid flag and any errors
 */
function validateGridConfig() {
  const errors = [];
  const warnings = [];

  // Validate breakpoint order
  const breakpointWidths = Object.values(VIEWPORTS).map(vp => vp.viewportWidth);
  const sortedWidths = [...breakpointWidths].sort((a, b) => a - b);
  if (JSON.stringify(breakpointWidths) !== JSON.stringify(sortedWidths)) {
    errors.push('Viewport breakpoints must be in ascending order');
  }

  // Validate column counts
  Object.entries(RACK_COLUMNS).forEach(([breakpoint, columns]) => {
    if (Object.keys(columns).length !== SYSTEM.MAX_COLUMNS) {
      warnings.push(`${breakpoint} has ${Object.keys(columns).length} columns, expected ${SYSTEM.MAX_COLUMNS}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// =============================================================================
// MODULE EXPORTS
// =============================================================================

module.exports = {
  SYSTEM,
  VIEWPORTS,
  RACK_COLUMNS,
  RAIL_COLUMNS,
  RAIL_GAPS,
  OFFSETS,
  validateGridConfig
}; 