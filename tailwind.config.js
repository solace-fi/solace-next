const BKPT_1 = 380;
const BKPT_NAVBAR = 600;
const BKPT_2 = 770;
const BKPT_3 = 900;
const BKPT_4 = 1060;
const BKPT_5 = 1232;
const BKPT_6 = 1370;
const BKPT_7 = 1640;

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: BKPT_1,
        sm: BKPT_2,
        md: BKPT_3,
        lg: BKPT_4,
        xl: BKPT_5,
        '2xl': BKPT_6,
        '3xl': BKPT_7
      },
    }
  },
};
