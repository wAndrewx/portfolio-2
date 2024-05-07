/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["bg-[#e3d9d0]", "bg-[#f2e8de]"],
  theme: {
    extend: {
      backgroundImage: { "red-arm": "url(images/redarm.jpg)" },
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
