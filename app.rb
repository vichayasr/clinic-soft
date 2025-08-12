# frozen_string_literal: true
require "sinatra"

set :public_folder, File.join(__dir__, "public")
set :views, File.join(__dir__, "views")

helpers do
  def active_class(path)
    request.path_info == path ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
  end
end

get "/" do
  @page_title = "Home"
  @get_styles = ["/css/demo.css"]
  @get_scripts = ["/js/demo.js"]
  erb :index
end



