import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        border: 'border-spin 5s linear infinite',
      },
      keyframes: {
        'border-spin': {
          '0%': { '--border-angle': '0deg' },
          '50%': { '--border-angle': '180deg' },
          '100%': { '--border-angle': '360deg' },
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: '#FD0053',
      },

      container: {
        center: true,
        screens: {
          '2xl': '1920px', // Set container width to 1920px for 2xl screens
        },
      },
      borderRadius: {
        primary: '10px', // Define a primary border-radius of 10px
      },
    },
  },
  plugins: [],
}
export default config
