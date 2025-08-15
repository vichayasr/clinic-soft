# PSP Asia Dev Template v2.0 (Sinatra + Tailwind v4 + DaisyUI)

Enhanced boilerplate for Sinatra + Tailwind v4 + DaisyUI with responsive grid system and light/dark theme support.

## 🆕 What's New in v2.0

### Content Comparison (v1 → v2):

| **Your Original (v1)** | **Enhanced Version (v2)** |
|-------------------------|----------------------------|
| ✅ demo-index.erb | ✅ demo.erb (renamed + enhanced) |
| ✅ Basic header | ✅ Header + theme switcher |
| ✅ Simple layout | ✅ Layout + theme JavaScript |
| ✅ Basic app.rb | ✅ app.rb + new routes |
| ✅ Plain tailwind.css | ✅ tailwind.css + DaisyUI |
| ❌ No homepage | ✅ New index.erb homepage |
| ❌ No themes | ✅ Light/dark theme system |

## Features
- ✨ **Light/Dark Theme Switcher** - Persistent theme toggle in navbar
- 🎨 **DaisyUI v5.0.50** - Beautiful UI components and semantic color system
- 📱 **Responsive Grid System** - Rack & Rail layout containers (@psp/layout)
- ⚡ **Tailwind CSS v4.1.12** - Latest utility-first CSS framework
- 🚀 **Sinatra 4.1.1** - Lightweight Ruby web framework

## Requirements
- Ruby 3.2.8 (see `.ruby-version`)
- Node.js 18+ (for Tailwind CLI)

## Project Structure
```
./
├─ .ruby-version
├─ Gemfile
├─ config.ru
├─ app.rb
├─ package.json
├─ tailwind.config.js
├─ public/
│  └─ css/
│     ├─ tailwind.css   # Tailwind input with DaisyUI plugin
│     ├─ app.css        # Built CSS output (do not edit)
│     └─ demo.css       # Demo-specific styles
└─ views/
   ├─ layout.erb        # Main layout with theme switcher
   ├─ _header.erb       # Navbar with theme toggle
   ├─ _footer.erb
   ├─ index.erb         # Homepage
   └─ demo.erb          # Grid system demo
```

## Quick Start

1) **Install Ruby gems**
```bash
bundle install
```

2) **Install Node dependencies**
```bash
npm install
```

3) **Build CSS** (choose one)
```bash
npm run build    # one-off build
npm run dev      # watch mode
```

4) **Start the server**
```bash
ruby app.rb
```

Open http://localhost:4567/

## Available Routes
- `/` - Homepage with project overview
- `/demo` - Grid system demonstration

## Theme System
The template includes a persistent light/dark theme switcher:
- **Light Theme** - Clean, bright interface (default)
- **Dark Theme** - Dark mode for low-light environments
- **Theme Persistence** - User preference saved in localStorage
- **DaisyUI Integration** - Semantic color variables that adapt to themes

## Grid System
Built with @psp/layout for responsive layouts:
- **Rack Container** - Grid with wrapping columns (`.rack`)
- **Rail Container** - Horizontal scrolling rows (`.rail`)
- **Responsive** - Adapts to mobile, tablet, and desktop
- **Offset Support** - Column positioning with `.offset-*`

## Development
- Edit CSS in `public/css/tailwind.css`
- The build process writes to `public/css/app.css`
- DaisyUI themes configured in `tailwind.css` with `@plugin "daisyui"`
- Theme switcher JavaScript included in `layout.erb`

## 🔄 Upgrading from v1 to v2

If you're upgrading from the previous version, follow these steps:

### 1. **Update Dependencies**
```bash
# Install new dependencies
npm install daisyui@^5.0.50 --save-dev

# Update Tailwind to v4.1.12 (if needed)
npm install tailwindcss@^4.1.12 @tailwindcss/cli@^4.1.12 --save-dev
```

### 2. **Update CSS Configuration**
Replace your `public/css/tailwind.css` content with:
```css
@import "tailwindcss";
@import "@psp/layout/grid.css";
@plugin "daisyui" {
  themes: ["light", "dark", "cupcake"];
};

/* Project entry stylesheet. Presets are provided by the plugin preset import above. */
```

### 3. **Update Package Dependencies** 
Add to your `package.json`:
```json
{
  "dependencies": {
    "@psp/debug-mode": "file:../../../psp-designertools/packages/@psp/debug-mode",
    "@psp/layout": "file:../../../psp-designertools/packages/@psp/layout"
  }
}
```

### 4. **Update Routes**
Your `app.rb` will need these changes:
- Add homepage route: `get "/" do`
- Rename demo route to: `get "/demo" do`
- Update asset serving paths for `@psp/debug-mode`

### 5. **Create Missing Files**
- Create `views/index.erb` for homepage
- Rename `demo-index.erb` to `demo.erb`
- Add theme switcher to `_header.erb`

### 6. **Build and Test**
```bash
npm run build
ruby app.rb
```

## Dependencies
- **Runtime**: Sinatra 4.1.1, Ruby 3.2.8
- **Styling**: Tailwind CSS 4.1.12, DaisyUI 5.0.50
- **Layout**: @psp/layout 1.0.0 (custom grid system)
- **Build**: @tailwindcss/cli 4.1.12
