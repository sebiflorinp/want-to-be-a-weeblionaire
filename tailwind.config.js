/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "game-image": "url(./src/assets/Game_BG.png)",
        "title-image": "url(./src/assets/Alter_Title_Screen.png)",
      },
    },
  },
  plugins: [],
};
