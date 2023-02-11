const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ['text-lg', 'text-xl', 'text-2xl', 'text-6xl', 'rounded-xl', 'rounded-md'],
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    data: {
      checked: 'checked="true"',
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        lg: '20px',
        xl: '20px',
        '2xl': '20px',
      },
    },
    extend: {
      colors: {
        bg: 'hsl(var(--bg-hsl, 0 0% 100%) / <alpha-value>)',
        text: 'hsl(var(--text-hsl, 0 0% 0%) / <alpha-value>)',
        primary: 'hsl(var(--primary-hsl, 0 0% 0%) / <alpha-value>)',
        secondary: 'hsl(var(--secondary-hsl, 0 0% 100%) / <alpha-value>)',
        black: 'hsl(var(--black-hsl, 0 0% 13%) / <alpha-value>)',
        violet: 'hsl(var(--violet-hsl, 231 100% 90%) / <alpha-value>)',
        backdrop: 'hsl(var(--backdrop-hsl, 231 56% 20%) / <alpha-value>)',
        navy: 'hsl(var(--navy-hsl, 217 41% 44%) / <alpha-value>)',
        'navy-dark': 'hsl(var(--navy-dark-hsl, 216 46% 36%) / <alpha-value>)',
        'navy-light': 'hsl(var(--navy-light-hsl, 217 31% 46%) / <alpha-value>)',
        'violet-light': 'hsl(var(--violet-light-hsl, 231 88% 97%) / <alpha-value>)',
        'green-base': 'hsl(var(--green-base-hsl, 141 60% 78%) / <alpha-value>)',
        'green-dark': 'hsl(var(--green-dark-hsl, 141 70% 42%) / <alpha-value>)',
        'blue-base': 'hsl(var(--blue-base-hsl, 217 93% 48%) / <alpha-value>)',
        'blue-light': 'hsl(var(--blue-light-hsl, 217 88% 56%) / <alpha-value>)',
        'blue-lighter': 'hsl(var(--blue-light-hsl, 217 87% 63%) / <alpha-value>)',
        'blue-dark': 'hsl(var(--blue-dark-hsl, 230 100% 47%) / <alpha-value>)',
        'gray-base': 'hsl(var(--gray-light-hsl, 223 41% 63%) / <alpha-value>)',
        'gray-light': 'hsl(var(--gray-light-hsl, 231 88% 97%) / <alpha-value>)',
        telegram: 'hsl(205 100% 58% / <alpha-value>)',
        whatsapp: 'hsl(133 61% 45% / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.writing-v-rl': {
          writingMode: 'vertical-rl',
        },
        '.writing-v-lr': {
          writingMode: 'vertical-lr',
        },
        '.writing-h-tb': {
          writingMode: 'horizontal-tb',
        },
        '.perspective': {
          perspective: '800px',
        },
        '.pre-3d': {
          'transform-style': 'preserve-3d',
        },
        '.cap-round': {
          'stroke-linecap': 'round',
        },
        '.line-round': {
          'stroke-linejoin': 'round',
        },
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      });
    }),
    // plugin(({ matchUtilities, theme }) => {
    //   matchUtilities(
    //     {
    //       tab: (value) => ({
    //         tabSize: value,
    //       }),
    //     },
    //     { values: theme('tabSize') },
    //   );
    // }),
  ],
};
