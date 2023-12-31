/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // Add font family name here
      sans: `var(--theme-font-primary, 'Sora', sans-serif)`,
      algolia: ['Sora', 'sans-serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        algolia: {
          xenon: '#003DFF',
          xenonDark: '#022EB9',
          red: '#F4495D',
          gray: {
            800: '#36395a',
          },
        },
        // Change the color theme of the demo here
        colorBp: {
          primary: 'var(--theme-color-primary, #003DFF)',
          white: '#ffffff',
          black: '#000000',
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          refinementBadge: '#E9E9F0',
          refinementBadgeTextColor: '#2A286A',
          clearRefinementButtonColor: '#003EFF',
        },
      },
      boxShadow: {
        custom: '0 8px 32px rgba(0, 0, 0, 0.27)',
        cta: '0px 2px 8px rgba(45, 35, 66, 0.3), inset 0px -3px 0px 0px rgba(0, 0, 0, 0.05), inset 0px -3px 0px 0px #F2F4FF',
        ctaHover:
          '0px 4px 8px rgba(45, 35, 66, 0.4), 0px 7px 13px -3px rgba(45, 35, 66, 0.3), inset 0px -3px 0px #F2F4FF',
      },
      backdropBlur: {
        xs: '1px',
      },
      keyframes: {
        flicker: {
          '0%': { fill: 'black' },
          '50%': { fill: 'var(--theme-color-primary, #003DFF)' },
          '100%': { fill: 'black' },
        },
        fillIn: {
          '0%': { height: '0', opacity: 0 },
          '100%': { height: '23px', opacity: 1 },
        },
        gradient: {
          '0%': { fill: '#1E59FF' },
          '30%': { fill: '#0DB7EB' },
          '50%': { fill: '#CEFF00' },
          '80%': { fill: '#0DB7EB' },
          '100%': { fill: '#1E59FF' },
        },
      },
      animation: {
        flicker: 'flicker 2s ease-in-out infinite',
        fillIn: 'fillIn 0.3s ease-in-out forwards',
        gradient: 'gradient 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    '@marcreichel/tailwind-css-properties',
    '@tailwindcss/container-queries',
    'prettier-plugin-tailwindcss',
  ],
}
