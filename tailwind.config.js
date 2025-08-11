const pspLayout = require('./plugins/psp-layout/scripts/twlayout-plugin.js');

module.exports = {
  content: ["./views/**/*.erb", "./public/**/*.html", "./app.rb"],
  plugins: [pspLayout],
};


