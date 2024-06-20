/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                primary: {
                    text: "#ffffff",
                    background: "#ffffff",
                    accent: "#ffffff",
                    button: {
                        text: "#ffffff",
                        background: "#ffffff",
                        hover: "#ffffff",
                        selected: "#ffffff",
                    },
                },
                overlay: {
                    text: "#ffffff",
                    background: "#ffffff",
                    accent: "#ffffff",
                    button: {
                        text: "#ffffff",
                        background: "#ffffff",
                        hover: "#ffffff",
                        selected: "#ffffff",
                    },
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