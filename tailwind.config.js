/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        tritary: "var(--color-bg-tritary)",
        shadow: "var(--color-bg-shadow)",
        contPrimary: "var(--color-bg-cont-primary)",
        accent1: "var(--color-bg-accent1)",
        accent1sh1: "var(--color-bg-accent1sh1)",
        accent2: "var(--color-bg-accent2)",
        cover:"var(--color-bg-cover)"
      },
      textColor: {
        primary: "var(--color-txt-primary)",
        secondary: "var(--color-txt-secondary)",
        contPrimary: "var(--color-txt-cont-primary)",
        accent1: "var(--color-bg-accent1)",
        accent2: "var(--color-bg-accent2)",
        accent1sh1: "var(--color-bg-accent1sh1)",
        onAccent1: "var(--color-txt-onAccent1)",
        shadow: "var(--color-txt-shadow)",
      },
      borderColor: {
        primary: "var(--color-txt-primary)",
        secondary: "var(--color-txt-secondary)",
        contPrimary: "var(--color-txt-cont-primary)",
        accent1: "var(--color-txt-accent1)",
        accent2: "var(--color-bg-accent2)", 
        accent1sh1: "var(--color-border-accent1sh1)",
        shadow: "var(--color-txt-shadow)",
      },
    },
  },
  plugins: [],
};
