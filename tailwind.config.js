module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "c-gray": {
          "100": "#f7f6f9",
          "200": "#c0bacf",
          "300": "#8c81a7",
          "400": "#5a5072",
          "500": "#2d2839",
          "600": "#262130",
          "700": "#211d2a",
          "800": "#1c1924",
          "900": "#18151e"
        },
        "c-yellow": {
          "100": "#fef8f1",
          "200": "#fbe5cb",
          "300": "#f8d3a5",
          "400": "#f5c07f",
          "500": "#f2ad59",
          "600": "#ed8d17",
          "700": "#af660e",
          "800": "#724209",
          "900": "#2f1c04"
        },
        "c-green": {
          "100": "#f1fdfb",
          "200": "#adf5e9",
          "300": "#65ecd5",
          "400": "#20e4c3",
          "500": "#14a38c",
          "600": "#108470",
          "700": "#0d6859",
          "800": "#09493e",
          "900": "#062d27"
        },
        "c-red": {
          "100": "#fff0f0",
          "200": "#ffd1d1",
          "300": "#ffb3b3",
          "400": "#ff8f8f",
          "500": "#ff7070",
          "600": "#ff2424",
          "700": "#d10000",
          "800": "#850000",
          "900": "#330000"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
