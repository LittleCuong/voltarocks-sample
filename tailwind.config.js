/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                urbanist: ['Urbanist', 'sans-serif'],
            },
            colors: {
                'input-color-signup': '#E2E8F0',
                'background-1': '#F5F7FA',
            },
            boxShadow: {
                'custom-shadow': '0px 4px 8px 0px #47556933',
            },
            boxShadow: {
                'admin-sidebar': '4px 0px 6px 0px #0F172A1A;',
                'menu-section': '0px 2px 6px 0px #4755691A',
            },
        },
    },
    plugins: [require('daisyui')],
};
