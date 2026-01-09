import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        black: '#050505',
        'grey-dark': '#404040',
        'grey-medium': '#737373',
        'grey-light': '#a3a3a3',
        'off-white': '#fafafa',
        'accent-blue': '#2563eb',
        primary: '#050505',
        accent: '#2563eb',
      },
      boxShadow: {
        elevated: '0 0 0 1px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        'elevated-hover': '0 0 0 1px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.08)',
        glow: '0 0 40px rgba(255,255,255,0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
