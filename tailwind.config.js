/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        screens: {
            phone: '640px',
            // => @media (min-width: 640px) { ... }

            tablet: '768px',
            // => @media (min-width: 768px) { ... }

            spc: '1024px',
            // => @media (min-width: 1024px) { ... }
            mpc: '1150px',
            pc: '1280px',
            // => @media (min-width: 1280px) { ... }

            lpc: '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
