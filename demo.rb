# frozen_string_literal: true
# Demo Application - Complete showcase of PSP features
# Run: ruby demo.rb

require "sinatra"

set :public_folder, File.join(__dir__, "public")
set :views, File.join(__dir__, "demo/views")

# Demo homepage - Framework versions showcase
get "/" do
  @page_title = "PSP Template Demo"
  erb :index
end

# Grid demo page
get "/grid" do
  @page_title = "Grid Demo"
  @get_styles = [
    "/npm/@psp-asia/layout/styles/grid.css", 
    "/demo/css/demo.css",
    "/npm/@psp-asia/debug-mode/styles/debug-mode.css"
  ]
  @get_scripts = ["/npm/@psp-asia/debug-mode/scripts/debug-mode.js"]
  erb :grid
end

# DaisyUI demo page with enhanced highlighting
get "/daisyui" do
  @page_title = "DaisyUI Components Demo"
  erb :daisyui
end

# Demo asset serving - CSS, JS, and other assets from demo/
get "/demo/css/*" do
  file_path = File.join(__dir__, "demo/css", params["splat"].first)
  if File.exist?(file_path)
    content_type :css
    send_file file_path
  else
    halt 404
  end
end

# Serve selected node_modules resources under /npm/*
get "/npm/@psp-asia/debug-mode/*" do
  relative = params["splat"].first
  base_dir = File.expand_path(File.join(__dir__, "node_modules", "@psp-asia", "debug-mode"))
  path = File.expand_path(File.join(base_dir, relative))
  halt 404 unless path.start_with?(base_dir) && File.file?(path)
  send_file path
end

get "/npm/@psp-asia/layout/*" do
  relative = params["splat"].first
  base_dir = File.expand_path(File.join(__dir__, "node_modules", "@psp-asia", "layout"))
  path = File.expand_path(File.join(base_dir, relative))
  halt 404 unless path.start_with?(base_dir) && File.file?(path)
  send_file path
end