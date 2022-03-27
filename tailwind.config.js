const BKPT_1 = 380;
const BKPT_NAVBAR = 600;
const BKPT_2 = 770;
const BKPT_3 = 900;
const BKPT_4 = 1060;
const BKPT_5 = 1232;
const BKPT_6 = 1370;
const BKPT_7 = 1640;

module.exports = {
  // content: [],
  // mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    theme: {
      screens: {
        xs: BKPT_1 + "px",
        sm: BKPT_2 + "px",
        md: BKPT_3 + "px",
        lg: BKPT_4 + "px",
        xl: BKPT_5 + "px",
        '2xl': BKPT_6 + "px",
        '3xl': BKPT_7 + "px",
      }
    },
    extend: {},
  },
  plugins: [],
}
