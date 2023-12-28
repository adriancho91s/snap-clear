//Next UI
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        dark: {
          colors: {
            background: "#22092C",
            // background: {
            //   default: "#000000",
            //   paper: "#000000",
            // },
            primary: {
              foreground: "#FF0000",
              DEFAULT: "#F05941",
            },

          }
        },
        light: {
          colors:
          {
            background: "#ede7de",
            foreground: "#025a4e",
            // background: {
            //   default: "#FFFFFF",
            //   paper: "#FFFFFF",
            // },
            primary: {
              foreground: "#FF0000",
              DEFAULT: "#CD8D7A",
            },
          }
        }
      }
    }
  )],
}