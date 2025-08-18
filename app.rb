# frozen_string_literal: true
require "sinatra"

set :public_folder, File.join(__dir__, "public")
set :views, File.join(__dir__, "views")

# Homepage routing
# By default, "/" redirects to "/version" to show framework versions
# Users can customize by changing this route to serve :index instead
# Note: views/index.erb is gitignored to prevent template updates from overwriting user customizations
get "/" do
  # Redirect to /version as default (users can change this)
  @get_styles = ["/npm/@psp/debug-mode/styles/debug-mode.css"]
  @get_scripts = ["/npm/@psp/debug-mode/scripts/debug-mode.js"]
  erb :index
  # redirect "/version"
end

get "/version" do
  @page_title = "PSP Template Versions"
  erb :version
end

get "/grid" do
  @page_title = "Grid"
  @get_styles = ["/npm/@psp/layout/styles/grid.css", "/css/demo.css", "/npm/@psp/debug-mode/styles/debug-mode.css"]
  @get_scripts = ["/npm/@psp/debug-mode/scripts/debug-mode.js"]
  erb :grid
end

get "/daisyui" do
  @page_title = "DaisyUI"
  erb :daisyui
end


# Serve selected node_modules resources under /npm/*
get "/npm/@psp/debug-mode/*" do
  relative = params["splat"].first
  base_dir = File.expand_path(File.join(__dir__, "node_modules", "@psp", "debug-mode"))
  path = File.expand_path(File.join(base_dir, relative))
  halt 404 unless path.start_with?(base_dir) && File.file?(path)
  send_file path
end

get "/npm/@psp/layout/*" do
  relative = params["splat"].first
  base_dir = File.expand_path(File.join(__dir__, "node_modules", "@psp", "layout"))
  path = File.expand_path(File.join(base_dir, relative))
  halt 404 unless path.start_with?(base_dir) && File.file?(path)
  send_file path
end
