/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
    prefix: 'tw-',
    darkMode: ['selector', '[class~="dark"]'],
    content: ['./src/views/**/*.{ts,vue}',
        './src/components/**/*.{ts,vue}',],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                xs: '480px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#f97316',
                accent: '#10b981',
                neutral: '#374151',
                'base-100': '#ffffff',
                info: '#2563eb',
                success: '#16a34a',
                warning: '#f59e0b',
                error: '#dc2626',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            boxShadow: {
                'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
                'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
