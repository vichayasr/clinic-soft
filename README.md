# PSP Asia Dev Template (Sinatra + Tailwind v4 + DaisyUI)

Minimal boilerplate for Sinatra + Tailwind v4 + DaisyUI with responsive grid system and light/dark theme support.

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

## Dependencies
- **Runtime**: Sinatra 4.1.1, Ruby 3.2.8
- **Styling**: Tailwind CSS 4.1.12, DaisyUI 5.0.50
- **Layout**: @psp/layout 1.0.0 (custom grid system)
- **Build**: @tailwindcss/cli 4.1.12
