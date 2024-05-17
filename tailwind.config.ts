import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        headerGradient: 'radial-gradient(circle at 70% 60%, #020365 0%, #01041F 99.95%);',
      },
      colors: {
        light: '#FFFFFF',
        dark: '#000000',
        offwhite: '#EFEFF8',
        primary: '#0E1527',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', ...fontFamily.serif],
        fira: ['var(--font-fira-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
});

export default config;
