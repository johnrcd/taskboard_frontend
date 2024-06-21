/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                primary: {
                    text: "#000000",
                    background: "#F0F0F0",
                    border: "#C9C9C9",
                    accent: "#EB9623",
                },
                offset: {
                    text: "#F9F9F9",
                    background: "#181718",
                    accent: "#EB9623",
                },
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
    darkMode: 'class',
}