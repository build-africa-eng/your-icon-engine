import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}', // Matches your tsconfig.json include
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#14b8a6', // Teal accent from the gradient
        'custom-purple': '#a855f7', // Purple from the gradient
        'light-gray': '#d1d5db', // Lighter gray for contrast
        'dark-gray': '#374151', // Adjusted dark gray background
        'medium-gray': '#4b5563', // Medium gray for borders
      },
      spacing: {
        '14': '3.5rem', // Custom spacing for better control
        '18': '4.5rem', // Additional spacing option
      },
      fontSize: {
        '4.5xl': '2.5rem', // Custom size for larger headings
      },
      boxShadow: {
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;