module.exports = {
  content: ["./views/**/*.erb", "./public/**/*.html", "./app.rb"],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
 plugins: [require("daisyui")],
};


