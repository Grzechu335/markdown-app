/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            md: '435px',
            lg: '768px',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-robotoRegular)'],
                slab: ['var(--font-robotoSlab)'],
                mono: ['var(--font-robotoMono)'],
            },
            colors: {
                100: '#fff',
                200: '#F5F5F5',
                300: '#E4E4E4',
                400: '#C1C4CB',
                500: '#7C8187',
                600: '#5A6069',
                700: '#35393F',
                800: '#2B2D31',
                900: '#1D1F22',
                1000: '#151619',
                orange: '#E46643',
                orangeHover: '#F39765',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/typography'),
    ],
}
