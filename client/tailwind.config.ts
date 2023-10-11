import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#76a713',
        'primary-dark': '#4d8526',
        secondary: '#ff7800',
      },
    },
  },
  plugins: [],
};
export default config;
