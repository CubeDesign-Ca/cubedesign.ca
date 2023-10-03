/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cube_blue: "#103558",
        cube_red: "#C83832",
        cube_gray: "#103558",
      },
      spacing: {
        footer_lmargin: "150px",
        footer_tmargin: "100px",
        footer_h: "398px",
        footer_logo_w: "68px",
        footer_logo_h: "68px",
        footer_h_gap: "34px",
        footer_v_gap: "72px",
        footer_v_gap2: "30px",
        footer_linespace: "17px",
        footer_det_icon: "42px",
        footer_sns_icon: "42px",
      },
    },
    fontFamily: {
      footer_font: ["Courier New"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
};
