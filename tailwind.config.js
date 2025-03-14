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
        none: '0px',
        sm: '2px',       // 0.125rem -> 2px
        DEFAULT: '4px',  // 0.25rem -> 4px
        md: '6px',       // 0.375rem -> 6px
        lg: '8px',       // 0.5rem -> 8px
        xl: '12px',      // 0.75rem -> 12px
        '2xl': '16px',   // 1rem -> 16px
        '3xl': '24px',   // 1.5rem -> 24px
        full: '9999px',  // fully rounded
      },
      screens: {
        "xs": "400px",
        "2xs": "375px",
        "3xs": "390px",
        "4xs": "350px",
        "3.5xs":"420px",
        "4xs": "430px",
        "4sm": "490px",
        "3sm": "465px",
        "2sm": "620px",
        "2md": "820px",
        '3md': '992px',
        '4md': '1078px',
        '5md':"1650px",
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
        xs: '320px',   // 20rem
        sm: '384px',   // 24rem
        md: '448px',   // 28rem
        lg: '512px',   // 32rem
        xl: '576px',   // 36rem
        '2xl': '672px', // 42rem
        '3xl': '768px', // 48rem
        '4xl': '896px', // 56rem
        '5xl': '1024px',// 64rem
        '6xl': '1152px',// 72rem
        '7xl': '1280px',// 80rem
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
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
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "1" }],
        "6xl": ["60px", { lineHeight: "1" }],
        "7xl": ["72px", { lineHeight: "1" }],
        "8xl": ["96px", { lineHeight: "1" }],
        "9xl": ["128px", { lineHeight: "1" }],
      },
      spacing: {
        px: "1px",
        0: "0px",
        1: "4px",  // 0.25rem
        2: "8px",  // 0.5rem
        3: "12px", // 0.75rem
        4: "16px", // 1rem
        5: "20px", // 1.25rem
        6: "24px", // 1.5rem
        7: "28px", // 1.75rem
        8: "32px", // 2rem
        9: "36px", // 2.25rem
        10: "40px", // 2.5rem
        11: "44px", // 2.75rem
        12: "48px", // 3rem
        14: "56px", // 3.5rem
        16: "64px", // 4rem
        20: "80px", // 5rem
        24: "96px", // 6rem
        28: "112px", // 7rem
        32: "128px", // 8rem
        36: "144px", // 9rem
        40: "160px", // 10rem
        44: "176px", // 11rem
        48: "192px", // 12rem
        52: "208px", // 13rem
        56: "224px", // 14rem
        60: "240px", // 15rem
        64: "256px", // 16rem
        72: "288px", // 18rem
        80: "320px", // 20rem
        96: "384px", // 24rem
      }
      
      
    },
  },
  plugins: [],
}
