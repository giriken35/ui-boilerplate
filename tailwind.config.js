/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg: '#113a36',
          active: '#1c4a45',
          text: '#98b8b3',
          textActive: '#ffffff',
          logo: '#22c55e',
        },
        primary: {
          DEFAULT: '#22c55e',
          light: '#e8f5e9',
        },
        background: '#f4f7f6',
      },
    },
  },
  plugins: [],
}
