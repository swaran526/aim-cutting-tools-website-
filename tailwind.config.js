/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#F8FAFC", // Machined Metallic Silver Background
          900: "#FFFFFF", // Pure White Card Surface
          800: "#E2E8F0", // Crisp Silver Border
          700: "#CBD5E1", // Metallic Silver Border Highlight
          400: "#64748B", // Crisp Subtext
          300: "#334155", // High Contrast Dark Body Text
          200: "#1E293B", // Crisp Heading Subtext
          100: "#0F172A", // Dark Heading Text
        },
        act: {
          red: {
            DEFAULT: "#E31E24",
            dark: "#B81217",
            light: "#FF3B42",
            glow: "rgba(227, 30, 36, 0.15)",
          },
          navy: {
            DEFAULT: "#151B28",
            dark: "#0F1420",
            deep: "#0B0D12",
            surface: "#1A2234",
          },
          steel: {
            DEFAULT: "#475569",
            light: "#94A3B8",
            dark: "#334155",
            bg: "#F8FAFC",
            border: "#E2E8F0",
          },
          accent: "#00E5FF", // precision cyan highlight
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'metal-pattern': "radial-gradient(circle at 50% 50%, rgba(27, 42, 74, 0.95) 0%, rgba(15, 23, 42, 1) 100%)",
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'card-gradient': "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)",
        'red-gradient': "linear-gradient(135deg, #E31E24 0%, #B81217 100%)",
        'navy-gradient': "linear-gradient(135deg, #1B2A4A 0%, #0F172A 100%)",
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        'badge': 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)',
      },
      boxShadow: {
        'act-glow': '0 0 25px rgba(227, 30, 36, 0.25)',
        'act-card': '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'act-hover': '0 20px 40px -15px rgba(227, 30, 36, 0.2), 0 10px 15px -3px rgba(15, 23, 42, 0.1)',
      }
    },
  },
  plugins: [],
}
