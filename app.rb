# frozen_string_literal: true
require "sinatra"

set :public_folder, File.join(__dir__, "public")
set :views, File.join(__dir__, "views")


get "/" do
  @page_title = "Home"
  @get_styles = [
    "node_modules/@psp-asia/layout/debug.css"
  ]
  @get_scripts = ["node_modules/@psp-asia/layout/debug.js"]
  erb :"index"
end

get "/daisyui" do
  @page_title = "DaisyUI Components"
  erb :"demo/daisyui"
end

# Serve assets from the template-level plugins directory at /plugins/*
get "/plugins/*" do
  relative = params["splat"].first
  base_dir = File.expand_path(File.join(__dir__, "plugins"))
  path = File.expand_path(File.join(base_dir, relative))
  halt 404 unless path.start_with?(base_dir) && File.file?(path)
  send_file path
end
