/**
 * Rack & Rail Grid System Demo Script
 * Handles interactive elements for the demo page (column info updates and container toggles)
 * Viewport controls are now handled by debug-mode.js
 */

// Define constants locally since we can't import in browser
const VIEWPORTS = {
  sm: {
    viewportWidth: 375,
    minWidth: '23.4375rem',
    containerPadding: 24,
    availableSpace: 327,
    description: 'Mobile devices'
  },
  md: {
    viewportWidth: 768,               // Updated to match Tailwind's standard md breakpoint
    minWidth: '48rem',                // Updated to match Tailwind's standard (48rem = 768px)
    containerPadding: 32,
    availableSpace: 704,              // Updated: 768px - 64px (32px padding on each side)
    description: 'Tablets and small laptops'
  },
  lg: {
    viewportWidth: 1024,              // Standard Tailwind lg breakpoint
    minWidth: '64rem',                // Updated to match Tailwind's standard (64rem = 1024px)
    containerPadding: 32,
    availableSpace: 960,              // Updated: 1024px - 64px
    description: 'Desktop and large laptops'
  },
  xl: {
    viewportWidth: 1280,              // Updated to match Tailwind's standard xl breakpoint
    minWidth: '80rem',                // Updated to match Tailwind's standard (80rem = 1280px)
    containerPadding: 32,
    availableSpace: 1216,             // Updated: 1280px - 64px
    description: 'Large desktop screens'
  }
};

const RACK_COLUMNS = {
  sm: {
    1: '49.24%', 2: '100%', 3: '100%', 4: '100%', 5: '100%', 6: '100%',
    7: '100%', 8: '100%', 9: '100%', 10: '100%', 11: '100%', 12: '100%'
  },
  md: {
    1: '16.29%',    // Perfect harmonic: 1/6 of 690px available space (115px)
    2: '32.58%',    // Perfect harmonic: 2/6 of 690px available space (230px)
    3: '48.87%',    // Perfect harmonic: 3/6 of 690px available space (345px)
    4: '48.87%',    // Perfect harmonic: 3/6 of 690px available space (345px) - EQUAL to col-3
    5: '65.16%',    // Perfect harmonic: 4/6 of 690px available space (460px)
    6: '81.44%',    // Perfect harmonic: 5/6 of 690px available space (575px)
    7: '100%',      // Full width on md+ for simplified layout
    8: '100%',      // Full width on md+ for simplified layout
    9: '100%',      // Full width on md+ for simplified layout
    10: '100%',     // Full width on md+ for simplified layout
    11: '100%',     // Full width on md+ for simplified layout
    12: '100%'      // Full width on md+ for simplified layout
  },
  lg: {
    1: '6.75%',     // Optimized: 64.8px (base) = 64.8/960
    2: '15.18%',    // Optimized: 145.6px (64.8×2 + 16px gap) = 145.6/960
    3: '23.60%',    // Optimized: 226.4px (64.8×3 + 32px gaps) = 226.4/960
    4: '32.02%',    // Optimized: 307.2px (64.8×4 + 48px gaps) = 307.2/960
    5: '40.44%',    // Optimized: 388px (64.8×5 + 64px gaps) = 388/960
    6: '48.86%',    // Optimized: 468.8px (64.8×6 + 80px gaps) = 468.8/960
    7: '57.28%',    // Optimized: 549.6px (64.8×7 + 96px gaps) = 549.6/960
    8: '65.70%',    // Optimized: 630.4px (64.8×8 + 112px gaps) = 630.4/960
    9: '74.12%',    // Optimized: 711.2px (64.8×9 + 128px gaps) = 711.2/960
    10: '82.54%',   // Optimized: 792px (64.8×10 + 144px gaps) = 792/960
    11: '90.96%',   // Optimized: 872.8px (64.8×11 + 160px gaps) = 872.8/960
    12: '100%'      // Full width regardless of gaps
  },
  xl: {
    1: '7.06%',     // Optimized: 85.8px (base) = 85.8/1216
    2: '15.43%',    // Optimized: 187.6px (85.8×2 + 16px gap) = 187.6/1216
    3: '23.81%',    // Optimized: 289.4px (85.8×3 + 32px gaps) = 289.4/1216
    4: '32.18%',    // Optimized: 391.2px (85.8×4 + 48px gaps) = 391.2/1216
    5: '40.56%',    // Optimized: 493px (85.8×5 + 64px gaps) = 493/1216
    6: '48.93%',    // Optimized: 594.8px (85.8×6 + 80px gaps) = 594.8/1216
    7: '57.31%',    // Optimized: 696.6px (85.8×7 + 96px gaps) = 696.6/1216
    8: '65.68%',    // Optimized: 798.4px (85.8×8 + 112px gaps) = 798.4/1216
    9: '74.06%',    // Optimized: 900.2px (85.8×9 + 128px gaps) = 900.2/1216
    10: '82.43%',   // Optimized: 1002px (85.8×10 + 144px gaps) = 1002/1216
    11: '90.81%',   // Optimized: 1103.8px (85.8×11 + 160px gaps) = 1103.8/1216
    12: '100%'      // Full width
  }
};

const RAIL_COLUMNS = {
  sm: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  },
  md: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  },
  lg: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  },
  xl: {
    1: '16rem', 2: '20rem', 3: '24rem', 4: '28rem', 5: '32rem', 6: '36rem',
    7: '40rem', 8: '44rem', 9: '48rem', 10: '52rem', 11: '56rem', 12: '100%'
  }
};

const RAIL_GAPS = {
  STANDARD: '1rem',
  SLIDE_MODE: {
    sm: '1.5rem',     // Matches container padding for seamless slides
    md: '2rem',       // Matches container padding for seamless slides  
    lg: '2rem',       // Matches container padding for seamless slides
    xl: '2rem',       // Matches container padding for seamless slides
  }
};

const OFFSETS = {
  sm: {
    0: '0%', 1: '0%', 2: '0%', 3: '0%', 4: '0%', 5: '0%',
    6: '0%', 7: '0%', 8: '0%', 9: '0%', 10: '0%', 11: '25.38%'
  },
  md: {
    0: '0%',        // No offset - col-12 full width
    1: '0%',        // No offset - col-11 full width  
    2: '0%',        // No offset - col-10 full width
    3: '0%',        // No offset - col-9 full width
    4: '0%',        // No offset - col-8 full width
    5: '0%',        // No offset - col-7 full width
    6: '9.28%',     // (100% - 81.44%) ÷ 2 = 9.28% - CENTERED col-6 (perfect harmonic)
    7: '17.42%',    // (100% - 65.16%) ÷ 2 = 17.42% - CENTERED col-5 (perfect harmonic)
    8: '25.57%',    // (100% - 48.87%) ÷ 2 = 25.57% - CENTERED col-4 (perfect harmonic)
    9: '25.57%',    // (100% - 48.87%) ÷ 2 = 25.57% - CENTERED col-3 (perfect harmonic)
    10: '33.71%',   // (100% - 32.58%) ÷ 2 = 33.71% - CENTERED col-2 (perfect harmonic)
    11: '41.86%'    // (100% - 16.29%) ÷ 2 = 41.86% - CENTERED col-1 (perfect harmonic)
  },
  lg: {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.39%',    // Half of 6 column offset - Maintaining style
    7: '29.165%',   // Half of 7 column offset - Maintaining style
    8: '33.335%',   // Half of 8 column offset - Maintaining style
    9: '37.5%',     // Half of 9 column offset - Maintaining style
    10: '41.665%',  // Half of 10 column offset - Maintaining style
    11: '45.835%'   // Half of 11 column offset - Maintaining style
  },
  xl: {
    0: '0%',        // No offset
    1: '4.165%',    // Half of 1 column offset - Maintaining style for small offsets
    2: '8.335%',    // Half of 2 column offset - Maintaining style for small offsets
    3: '12.5%',     // Half of 3 column offset - Maintaining style for small offsets
    4: '16.665%',   // Half of 4 column offset - Maintaining style for small offsets
    5: '20.835%',   // Half of 5 column offset - Maintaining style for small offsets
    6: '25.23%',    // (100% - 49.54%) ÷ 2 = 25.23% - CENTERED col-6 (original)
    7: '29.43%',    // (100% - 41.13%) ÷ 2 = 29.43% - CENTERED col-5 (original)
    8: '33.64%',    // (100% - 32.72%) ÷ 2 = 33.64% - CENTERED col-4 (original)
    9: '37.84%',    // (100% - 24.31%) ÷ 2 = 37.84% - CENTERED col-3 (original)
    10: '42.05%',   // (100% - 15.90%) ÷ 2 = 42.05% - CENTERED col-2 (original)
    11: '46.26%'    // (100% - 7.49%) ÷ 2 = 46.26% - CENTERED col-1 (original)
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  setupContainerToggle();
  updateAllInfo();
});

// Update when window resizes
window.addEventListener('resize', updateAllInfo);
window.addEventListener('load', updateAllInfo);

// Get current breakpoint based on window width
function getCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width >= VIEWPORTS.xl.viewportWidth) return 'xl';
  if (width >= VIEWPORTS.lg.viewportWidth) return 'lg';
  if (width >= VIEWPORTS.md.viewportWidth) return 'md';
  return 'sm';
}

// Format pixel values
function formatPx(px) {
  return Math.round(px) + 'px';
}

// Convert rem to pixels
function remToPx(rem) {
  return parseFloat(rem) * 16;
}

// Update all information displays
function updateAllInfo() {
  updateColumnInfo();
  updateOffsetInfo();
}

// Enhanced column information update
function updateColumnInfo() {
  const breakpoint = getCurrentBreakpoint();
  const firstContainer = document.querySelector('.rack, .rail');
  if (!firstContainer) return;
  
  const containerType = firstContainer.classList.contains('rack') ? 'rack' : 'rail';
  
  // Update all info elements in the column-info-section
  const allInfoElements = document.querySelectorAll('[id*="col-"][id*="info"]');
  
  allInfoElements.forEach(infoElement => {
    // Extract column size from the ID
    const idParts = infoElement.id.split('-');
    let columnSize;
    
    // Handle both formats: "col-X-info" and "responsive-col-X-info-Y"
    if (infoElement.id.startsWith('responsive-col-')) {
      columnSize = idParts[2]; // responsive-col-X-info-Y
    } else {
      columnSize = idParts[1]; // col-X-info
    }
    
    if (!columnSize || !columnSize.match(/^\d+$/)) return;
    
    // Find the corresponding column element in the container
    const columnElement = firstContainer.querySelector(`.col-${columnSize}`);
    if (!columnElement) return;
    
    // Calculate actual width
    const computedWidth = window.getComputedStyle(columnElement).width;
    const widthInPx = parseInt(computedWidth);
    
    if (containerType === 'rack') {
      // For rack columns, compute percentage dynamically from container inner width
      const containerStyle = window.getComputedStyle(firstContainer);
      const pl = parseFloat(containerStyle.paddingLeft) || 0;
      const pr = parseFloat(containerStyle.paddingRight) || 0;
      const innerWidth = firstContainer.clientWidth - pl - pr;
      const percentValue = innerWidth > 0 ? ((widthInPx / innerWidth) * 100).toFixed(2) + '%' : 'auto';
      const remValue = (widthInPx / 16).toFixed(2) + 'rem';
      infoElement.innerHTML = `${percentValue} / ${formatPx(widthInPx)} / ${remValue}`;
    } else {
      // For rail columns, show fixed width
      const fixedWidth = RAIL_COLUMNS[breakpoint] && RAIL_COLUMNS[breakpoint][columnSize]
        ? RAIL_COLUMNS[breakpoint][columnSize]
        : 'auto';
      
      const fixedPxWidth = fixedWidth !== 'auto' ? remToPx(fixedWidth) : widthInPx;
      
      infoElement.innerHTML = `${fixedWidth} / ${formatPx(fixedPxWidth)}`;
    }
  });
}

// Update offset information
function updateOffsetInfo() {
  const breakpoint = getCurrentBreakpoint();
  
  for (let offsetNum = 0; offsetNum <= 11; offsetNum++) {
    const infoElement = document.getElementById(`offset-${offsetNum}-info`);
    if (!infoElement) continue;
    
    // For lg/xl with 24-track grid, show grid-start and dynamic column width
    if (breakpoint === 'lg' || breakpoint === 'xl') {
      const demoItem = infoElement.closest('[class*="offset-"]');
      const start = demoItem ? window.getComputedStyle(demoItem).gridColumnStart : 'auto';
      const colNumber = 12 - offsetNum;
      // Find the column element for width calculation (this span sits inside it)
      const columnElement = infoElement.closest(`.col-${colNumber}`);
      let percentValue = 'auto';
      let pxValue = '';
      if (columnElement) {
        const computedWidth = window.getComputedStyle(columnElement).width;
        const widthInPx = parseInt(computedWidth);
        const rack = columnElement.closest('.rack');
        if (rack) {
          const rs = window.getComputedStyle(rack);
          const pl = parseFloat(rs.paddingLeft) || 0;
          const pr = parseFloat(rs.paddingRight) || 0;
          const inner = rack.clientWidth - pl - pr;
          percentValue = inner > 0 ? ((widthInPx / inner) * 100).toFixed(2) + '%' : 'auto';
          pxValue = formatPx(widthInPx);
        }
      }
      infoElement.innerHTML = `start ${start} + col-${colNumber} (${percentValue} / ${pxValue})`;
      continue;
    }

    // For sm/md retain percentage-based display
    const offsetPercentage = OFFSETS[breakpoint] && OFFSETS[breakpoint][offsetNum]
      ? OFFSETS[breakpoint][offsetNum]
      : '0%';
    const availableSpace = VIEWPORTS[breakpoint].availableSpace;
    const offsetPx = Math.round((parseFloat(offsetPercentage) / 100) * availableSpace);
    if (breakpoint === 'sm') {
      if (offsetNum === 11) {
        infoElement.innerHTML = `${formatPx(offsetPx)} (positions col-1 in second half)`;
      } else {
        infoElement.innerHTML = `${formatPx(offsetPx)} (no offset for mobile layout)`;
      }
    } else {
      const colNumber = 12 - parseInt(offsetNum);
      const colPercent = RACK_COLUMNS[breakpoint] && RACK_COLUMNS[breakpoint][colNumber]
        ? RACK_COLUMNS[breakpoint][colNumber]
        : 'auto';
      infoElement.innerHTML = `${formatPx(offsetPx)} (${offsetPercentage}) + col-${colNumber} (${colPercent})`;
    }
  }
}

// Setup container toggle functionality
function setupContainerToggle() {
  const rackToggle = document.getElementById('rack-toggle');
  const railToggle = document.getElementById('rail-toggle');
  const rackCodeBlock = document.getElementById('rack-code-block');
  const railCodeBlock = document.getElementById('rail-code-block');
  
  // Container switching
  if (rackToggle) {
    rackToggle.addEventListener('change', function() {
      if (this.checked) {
        const container = document.querySelector('.rack, .rail');
        if (container) {
          container.className = 'rack';
          updateColumnInfo();
        }
        
        if (rackCodeBlock) rackCodeBlock.style.display = 'block';
        if (railCodeBlock) railCodeBlock.style.display = 'none';
      }
    });
  }
  
  if (railToggle) {
    railToggle.addEventListener('change', function() {
      if (this.checked) {
        const container = document.querySelector('.rack, .rail');
        if (container) {
          container.className = 'rail';
          updateColumnInfo();
        }
        
        if (rackCodeBlock) rackCodeBlock.style.display = 'none';
        if (railCodeBlock) railCodeBlock.style.display = 'block';
      }
    });
  }
} 