/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        md: '768px',
        lg: '1024px',
      },
      width: {
        auto: 'auto',
        '1/12': '8.33%',
        '2/12': '16.66%',
        '3/12': '25%',
        '4/12': '33.33%',
        '5/12': '41.66%',
        '6/12': '50%',
        '7/12': '58.33%',
        '8/12': '66.66%',
        '9/12': '75%',
        '10/12': '83.33%',
        '11/12': '91.66%',
        full: '100%',
        screen: '100vw',
        400: '400px',
      },
      colors: {
        black: '#121212',
        white: '#ffffff',
        grey: '#d9d9d9',
        'grey-light': '#f1f1f1',
        blue: '#0970e6',
        'blue-dark': '#004e9b',
        red: '#d30d1f',
      },
      fontSize: {
        10: ['0.625rem', { lineHeight: '0.75rem' }],
        12: ['0.75rem', { lineHeight: '0.875rem' }],
        14: ['0.875rem', { lineHeight: '1.063rem' }],
        16: ['1rem', { lineHeight: '1.188rem' }],
        20: ['1.25rem', { lineHeight: '1.5rem' }],
        24: ['1.5rem', { lineHeight: '1.813rem' }],
        32: ['2rem', { lineHeight: '2.375rem' }],
      },
      borderRadius: {
        1: '0.063rem',
        2: '0.125rem',
        3: '0.188rem',
        4: '0.25rem',
        5: '0.313rem',
        6: '0.375rem',
        7: '0.438rem',
        8: '0.5rem',
        9: '0.563rem',
        9: '0.625rem',
      },
      boxShadow: {
        light: '0 0.125rem 0.375rem 0 rgba(18, 18, 18, 0.05)', // Custom shadow for the header
      },
    },
  },
  plugins: [],
};
