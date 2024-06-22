/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                primary: {
                    text: "#1A1A1A",
                    tooltip: "#555555",
                    background: "#F0F0F0",
                    border: "#C9C9C9",
                    accent: "#EB9623",
                },
                offset: {
                    text: "#F9F9F9",
                    tooltip: "#555555",
                    background: "#181718",
                    border: "#C9C9C9",
                    accent: "#EB9623",
                },
                note: {
                    text: "#000000",
                    tooltip: "#555555",
                    background: "#FCE8B1",
                    border: "#EB9623",
                }
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
    darkMode: 'class',
}