/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      color1: '#e5e5e5',
      color2: '#cdc08d',
      color3: '#746b4b',
      color4: '#1f1a13',
      color5: '#0a0906',
      color6: '#150f03',
      color7: '#999999',
      color8: '#ffffff',
      color9: '#000000',
      color10: '#1c140a',
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 35s linear infinite",
      },
      backgroundImage: {
        bannerImg : "URL('./src/assets/img/bg1.png')",
      },
    },
  },
  plugins: [],
}