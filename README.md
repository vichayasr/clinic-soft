# PSP Dev Template

Modern development template for Sinatra + Tailwind CSS + DaisyUI with built-in demo system.

## Features
- 🚀 **Sinatra 4.1.1** - Lightweight Ruby web framework
- ⚡ **Tailwind CSS v4.1.12** - Latest utility-first CSS framework
- 🎨 **DaisyUI v5.0.50** - Beautiful UI components and semantic color system
- 📱 **Responsive Grid System** - Rack & Rail layout containers (@psp/layout)
- 🛠️ **Debug Tools** - Development helpers (@psp/debug-mode)
- 📋 **Demo System** - Complete showcase in `version/` directory

## Requirements
- Ruby 3.2.8 (see `.ruby-version`)
- Node.js 18+ (for Tailwind CLI)

## Project Structure
```
./
├─ app.rb              # Your Sinatra application (minimal starter)
├─ demo.rb             # Demo application (run: ruby demo.rb)
├─ package.json        # Node.js dependencies
├─ public/css/         # CSS assets
│  ├─ tailwind.css     # Tailwind input with DaisyUI
│  └─ app.css          # Built CSS output (auto-generated)
├─ views/              # Your templates (empty, customize freely)
│  └─ .gitkeep         # Directory placeholder
└─ demo/               # Complete demo system (examples & showcase)
   ├─ css/demo.css     # Demo styles
   └─ views/           # Demo templates (DaisyUI showcase, grid examples)
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

For development:
```bash
ruby app.rb              # Your minimal app (customize freely)
```

For demos:
```bash
ruby demo.rb             # Complete demo showcase
```

Open http://localhost:4567/

## Usage

### Your Application
- Start with minimal `app.rb` (single route)
- Create templates in empty `views/` directory  
- Customize everything for your project needs

### Demo System  
- Run `ruby demo.rb` to see complete examples
- Enhanced DaisyUI showcase with interactive highlighting
- Grid system demonstrations with @psp/layout
- All demo content isolated in `demo/` directory

### Grid System
- **Rack Container** - Grid with wrapping columns (`.rack`)
- **Rail Container** - Horizontal scrolling rows (`.rail`) 
- **Responsive** - Mobile, tablet, desktop breakpoints
- **Debug Mode** - Visual grid overlay for development

## Development
- Edit CSS in `public/css/tailwind.css`
- Build process outputs to `public/css/app.css`
- DaisyUI themes: light, dark, cupcake available
- PSP packages provide layout and debug utilities

## Dependencies
- **Runtime**: Sinatra 4.1.1, Ruby 3.2.8
- **Styling**: Tailwind CSS 4.1.12, DaisyUI 5.0.50
- **Layout**: @psp/layout 1.0.0 (custom grid system)
- **Build**: @tailwindcss/cli 4.1.12
