/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        lineIncreases: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        loadLine: 'lineIncreases 3s',
      },
      colors: {
        darkBorder: '#262626',
        lightBorder: '#DBDBDB',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      screens: {
        sm: '360px',
        md: '414px',
        lg: '1024px',
        xl: '1920px',
        '2xl': '2560px'
      }
    }
  },
  plugins: []
};
