/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./js/**/*.js",
    "./careers/**/*.html",
    "./learning/**/*.html",
    "./publications/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00f0ff",
        "secondary": "#b76eff",
        "surface": "#090d14",
        "surface-raised": "#0f1522",
        "background": "#090d14",
        "on-background": "#f1f5f9",
      },
      fontFamily: {
        "display": ["Space Grotesk", "Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      }
    }
  },
  plugins: []
}
