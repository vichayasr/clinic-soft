/**
 * Demo Interactive Features
 * Combined JavaScript functionality for PSP demo pages
 */

// ================================
// BADGE HIGHLIGHTING SYSTEM
// ================================

function highlightTags(componentElement, tagIds) {
  // Remove all existing highlights and restore ghost state
  document.querySelectorAll('.badge').forEach(badge => {
    badge.classList.remove('badge-warning');
    badge.classList.remove('tag-highlight');
    if (!badge.classList.contains('badge-ghost')) {
      badge.classList.add('badge-ghost');
    }
  });

  // Highlight relevant tags using both old and new methods
  if (tagIds && tagIds.length > 0) {
    tagIds.forEach(tagId => {
      const tag = document.getElementById(tagId);
      if (tag) {
        tag.classList.remove('badge-ghost');
        tag.classList.add('badge-warning');
        tag.classList.add('tag-highlight');
      }
    });
  }
}

function clearHighlights() {
  document.querySelectorAll('.badge').forEach(badge => {
    badge.classList.remove('badge-warning');
    badge.classList.remove('tag-highlight');
    // Restore original badge colors - all use badge-ghost for subtle appearance
    if (!badge.classList.contains('badge-ghost')) {
      badge.classList.add('badge-ghost');
    }
  });
}

// ================================
// THEME SWITCHER SYSTEM
// ================================

function initThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (!themeToggle) return; // Exit if theme toggle not found
  
  // Get saved theme or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply theme on load
  setTheme(currentTheme);
  
  // Toggle theme on button click (cycle: light → dark → light)
  themeToggle.addEventListener('click', function() {
    const current = document.documentElement.getAttribute('data-theme');
    let newTheme;
    if (current === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = 'light';
    }
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    } else {
      if (moonIcon) moonIcon.classList.add('hidden');
      if (sunIcon) sunIcon.classList.remove('hidden');
    }
  }
}

// ================================
// DAISYUI DOCUMENTATION LINKS
// ================================

// Map DaisyUI components to their documentation URLs
const daisyUIDocMap = {
  // Actions
  'btn': 'https://daisyui.com/components/button/',
  'button': 'https://daisyui.com/components/button/',
  'dropdown': 'https://daisyui.com/components/dropdown/',
  'modal': 'https://daisyui.com/components/modal/',
  'swap': 'https://daisyui.com/components/swap/',
  'theme-controller': 'https://daisyui.com/components/theme-controller/',
  
  // Data display
  'accordion': 'https://daisyui.com/components/accordion/',
  'avatar': 'https://daisyui.com/components/avatar/',
  'badge': 'https://daisyui.com/components/badge/',
  'card': 'https://daisyui.com/components/card/',
  'carousel': 'https://daisyui.com/components/carousel/',
  'chat': 'https://daisyui.com/components/chat/',
  'collapse': 'https://daisyui.com/components/collapse/',
  'countdown': 'https://daisyui.com/components/countdown/',
  'diff': 'https://daisyui.com/components/diff/',
  'kbd': 'https://daisyui.com/components/kbd/',
  'stat': 'https://daisyui.com/components/stat/',
  'table': 'https://daisyui.com/components/table/',
  'timeline': 'https://daisyui.com/components/timeline/',
  
  // Data input
  'checkbox': 'https://daisyui.com/components/checkbox/',
  'file-input': 'https://daisyui.com/components/file-input/',
  'input': 'https://daisyui.com/components/input/',
  'radio': 'https://daisyui.com/components/radio/',
  'range': 'https://daisyui.com/components/range/',
  'rating': 'https://daisyui.com/components/rating/',
  'select': 'https://daisyui.com/components/select/',
  'textarea': 'https://daisyui.com/components/textarea/',
  'toggle': 'https://daisyui.com/components/toggle/',
  
  // Layout
  'artboard': 'https://daisyui.com/components/artboard/',
  'divider': 'https://daisyui.com/components/divider/',
  'drawer': 'https://daisyui.com/components/drawer/',
  'footer': 'https://daisyui.com/components/footer/',
  'hero': 'https://daisyui.com/components/hero/',
  'indicator': 'https://daisyui.com/components/indicator/',
  'join': 'https://daisyui.com/components/join/',
  'mask': 'https://daisyui.com/components/mask/',
  'stack': 'https://daisyui.com/components/stack/',
  
  // Navigation
  'breadcrumbs': 'https://daisyui.com/components/breadcrumbs/',
  'bottom-navigation': 'https://daisyui.com/components/bottom-navigation/',
  'link': 'https://daisyui.com/components/link/',
  'menu': 'https://daisyui.com/components/menu/',
  'navbar': 'https://daisyui.com/components/navbar/',
  'pagination': 'https://daisyui.com/components/pagination/',
  'steps': 'https://daisyui.com/components/steps/',
  'tab': 'https://daisyui.com/components/tab/',
  
  // Feedback
  'alert': 'https://daisyui.com/components/alert/',
  'loading': 'https://daisyui.com/components/loading/',
  'progress': 'https://daisyui.com/components/progress/',
  'radial-progress': 'https://daisyui.com/components/radial-progress/',
  'skeleton': 'https://daisyui.com/components/skeleton/',
  'toast': 'https://daisyui.com/components/toast/',
  'tooltip': 'https://daisyui.com/components/tooltip/'
};

function openDaisyUIDocumentation(componentName) {
  // Clean component name (remove modifiers, numbers, etc.)
  const cleanName = componentName
    .replace(/^tag-/, '') // Remove tag- prefix
    .replace(/-\d+$/, '') // Remove trailing numbers
    .replace(/-[a-z]+$/, '') // Remove modifiers like -sm, -lg, -primary, etc.
    .replace(/-outline$|_success$|-info$|-warning$|-error$|-ghost$|-link$/, ''); // Remove color/style variants
  
  const docUrl = daisyUIDocMap[cleanName];
  if (docUrl) {
    window.open(docUrl, '_blank');
    return true;
  }
  return false;
}

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme switcher
  initThemeSwitcher();
  
  // Initialize badge highlighting system
  const highlightElements = document.querySelectorAll('[data-highlight-tags]');
  highlightElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      const tagIds = this.getAttribute('data-highlight-tags').split(',').map(s => s.trim()).filter(s => s);
      highlightTags(this, tagIds);
    });

    element.addEventListener('mouseleave', function() {
      clearHighlights();
    });
  });
  
  // Initialize DaisyUI documentation links for demo components
  const demoComponents = document.querySelectorAll('.demo-hover[data-highlight-tags]');
  demoComponents.forEach(component => {
    component.style.cursor = 'pointer';
    component.addEventListener('click', function() {
      const tagIds = this.getAttribute('data-highlight-tags').split(',').map(s => s.trim()).filter(s => s);
      
      // Try to open documentation for the first recognized component
      for (const tagId of tagIds) {
        const cleanTagId = tagId.replace('tag-', '');
        if (openDaisyUIDocumentation(cleanTagId)) {
          break; // Stop after first successful match
        }
      }
    });
  });
  
  // Initialize documentation links for badges
  const badges = document.querySelectorAll('.badge[id^="tag-"]');
  badges.forEach(badge => {
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', function() {
      const componentName = this.id;
      openDaisyUIDocumentation(componentName);
    });
  });
});