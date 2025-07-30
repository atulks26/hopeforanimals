/** @type {import('tailwindcss').Config} */
const config = {
    important: true,
    content: ["./src/**/*.{js,jsx,tsx}", "./public/index.html"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                customRed: "#d90429",
            },
            fontFamily: {
                cherry: ['"Cherry Bomb One"', "system-ui"],
                rampart: ['"Rampart One"', "sans-serif"],
                outfit: ["Outfit", "sans-serif"],
                schoolbell: ["Schoolbell", "cursive"],
                modak: ["Modak", "system-ui"],
                lucky: ["Luckiest Guy", "cursive"],
            },
        },
    },
    plugins: [],
};

export default config;
