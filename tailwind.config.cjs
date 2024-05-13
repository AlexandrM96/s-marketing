/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: "#000",
            dark: "#030D1C",
            arrow_dark: "#151433",
            tint: "#00000012",
            white: "#fff",
            border_white: "#FFFFFF66",
            border_blue: "#222458",
            border_opacity_blue: "rgba(34, 36, 88, 0.12)",
            opacity_blue: "rgba(34, 36, 88, 0.5)",
            opacity_gray: "rgba(238, 243, 255, 0.5)",
            light_blue: "#EEF3FF",
            violet: "#6624FA",
        },
        fontFamily: {
            sans: ["SB Sans Display", "sans-serif"],
            serif: ["SB Sans Display", "serif"],
        },
        extend: {
            spacing: {
                4.5: "18px",
                12.5: "50px",
            },
            screens: {
                mobile: { max: "460px" },
                tablet: { min: "461px" },
                // => @media (max-width: 460px) { ... }
            },
        },
    },
    plugins: [],
};
