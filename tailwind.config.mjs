/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["bg-[#e3d9d0]", "bg-[#f2e8de]"],
  theme: {
    extend: {
      backgroundImage: {
        "red-arm": "url(images/redarm.jpg)",
        "grad-purple":
          "linear-gradient(240deg, #da3931 0%, #e74650 16%, #ee586e 33%, #f46887 50%, #f97a9f 66%, #fc8bb4 83%, #ff9cc6 100%)",
      },
      fontFamily: {
        recife: ["RecifeDisplay-Regular"],
        jet: ["JetBrainsMono-Medium"],
      },
      animation: {
        "reverse-spin": "reverse-spin 5s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/container-queries"),
  ],
};
