# frozen_string_literal: true
# Demo Application - Isolated environment for showcasing PSP features
# This file is safe to update - it never overwrites user files

require "sinatra"

# Configure demo environment to use version/ templates
configure do
  set :views, File.join(__dir__, "views")
end

# Demo home page - Framework versions showcase
get "" do  # Matches /demo
  @page_title = "PSP Template Versions - Demo"
  erb :index
end

# Grid demo page
get "/grid" do  # Matches /demo/grid
  @page_title = "Grid Demo"
  @get_styles = [
    "/npm/@psp/layout/styles/grid.css", 
    "/version/css/demo.css",
    "/npm/@psp/debug-mode/styles/debug-mode.css"
  ]
  @get_scripts = ["/npm/@psp/debug-mode/scripts/debug-mode.js"]
  erb :grid
end

# DaisyUI demo page with enhanced highlighting
get "/daisyui" do  # Matches /demo/daisyui
  @page_title = "DaisyUI Components Demo"
  erb :daisyui
end