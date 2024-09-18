/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "game-image": "url(./assets/Game_BG.png)",
        "title-image": "url(./assets/Alter_Title_Screen.png)",
      },
    },
  },
  plugins: [],
};
