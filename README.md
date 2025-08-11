# PSP Asia Dev Template (Sinatra + Tailwind v4)

Minimal boilerplate for Sinatra + Tailwind v4. Share this folder without `node_modules/`.

## Requirements
- Ruby 3.2.8 (see `.ruby-version`)
- Node.js 18+ (for Tailwind CLI)

## Project structure
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
│     ├─ tailwind.css   # Tailwind input (edit here)
│     └─ app.css        # Built CSS output (do not edit)
└─ views/
   ├─ layout.erb
   └─ index.erb
```

## Running (on any machine)
1) Install Ruby gems
```
bundle install
```

2) Install Node deps
```
npm ci   # or: npm install
```

3) Build CSS (choose one)
```
npm run tailwind:build   # one-off
npm run tailwind:dev     # watch mode
```

4) Start the server
```
ruby app.rb   # or: rackup
```

Open http://localhost:9292/

## Notes
- Edit CSS in `public/css/tailwind.css`; the build writes to `public/css/app.css`.
- Tailwind plugin `psp-layout` is vendored under `plugins/psp-layout/`.
