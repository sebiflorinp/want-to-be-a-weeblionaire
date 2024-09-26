/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "game-image-big": "url(./assets/Game_BG_Big.png)",
        "game-image-small": "url(./assets/Game_BG_Small.png)",
        "title-image": "url(./assets/Alter_Title_Screen.png)",
      },
    },
  },
  plugins: [],
};
