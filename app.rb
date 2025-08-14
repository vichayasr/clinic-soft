# frozen_string_literal: true
require "sinatra"

set :public_folder, File.join(__dir__, "public")
set :views, File.join(__dir__, "views")

get "/" do
  @page_title = "Home"
  @get_styles = ["/css/demo.css", "/npm/@psp/debug-mode/styles/debug-mode.css"]
  @get_scripts = ["/npm/@psp/debug-mode/scripts/debug-mode.js"]
  erb :"demo-index"
end

# Serve selected node_modules resources under /npm/*
get "/npm/@psp/debug-mode/*" do
  relative = params["splat"].first
  base_dir = File.expand_path(File.join(__dir__, "node_modules", "@psp", "debug-mode"))
  path = File.expand_path(File.join(base_dir, relative))
  halt 404 unless path.start_with?(base_dir) && File.file?(path)
  send_file path
end
