/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        geist: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        "xs": "400px",
        "2xs": "375px",
        "3xs": "390px",
        "3.5xs":"420px",
        "4xs": "430px",
        "4sm": "490px",
        "3sm": "465px",
        "2sm": "620px",
        "2md": "820px",
        '3md': '992px',
        '4md': '1078px',
        "3xl": "2000px",
        "4xl": "2700px",
        "5xl": "3500px",
      },
      zIndex: {
        '-15': '-15',
        '-20': '-20',
        '-25': '-25',
      },
      maxWidth: {
        '8xl': '1450px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #0C0D0F 100%, #111214 75%)',
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [],
}
