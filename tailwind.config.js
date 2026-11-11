/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'var(--color-bg-base)',
          surface: 'var(--color-bg-surface)',
          elevated: 'var(--color-bg-elevated)',
          inset: 'var(--color-bg-inset)',
          header: 'var(--color-bg-header)',
          footer: 'var(--color-bg-footer)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          bright: 'var(--color-border-bright)',
        },
        accent: {
          red: 'var(--color-accent-red)',
          'red-hover': 'var(--color-accent-red-hover)',
          blue: 'var(--color-accent-blue)',
          sky: 'var(--color-accent-sky)',
          pink: 'var(--color-accent-pink)',
          purple: 'var(--color-accent-purple)',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
        pill: '9999px',
      },
      boxShadow: {
        'red-glow': 'var(--shadow-red-glow)',
        'red-card': 'var(--shadow-red-card)',
        'blue-glow': 'var(--shadow-blue-glow)',
        card: 'var(--shadow-card)',
      },
      spacing: {
        section: 'var(--space-section)',
      },
    },
  },
  plugins: [],
};
