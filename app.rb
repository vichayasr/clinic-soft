# frozen_string_literal: true
require "sinatra"

set :public_folder, File.join(__dir__, "public")
set :views, File.join(__dir__, "views")

get "/" do
  "Hello PSP Template! Create your views/ templates to get started."
end
