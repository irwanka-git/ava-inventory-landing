import {nextui} from '@nextui-org/theme'

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      height: {
        'screen-minus-footer': 'calc(100vh - 4rem)', // Adjust `4rem` as per your footer height
      },
    },
  },
  darkMode: "class",
 plugins: [nextui({
   themes: {
     light: {
       colors: {
         background: "#FFFFFF", // or DEFAULT
         foreground: "#11181C", // or 50 to 900 DEFAULT
         primary: {
           foreground: "#FFFFFF",
           DEFAULT: "#202B6D",
         },
         secondary:{
           foreground: "#FFFFFF",
           DEFAULT: "#2d2d33",
         },
         pinklucerna: {
           foreground: "#FFFFFF",
           DEFAULT: "#F8CBF6",
         },
         pink: {
           500: "#F8CBF6",
         },
       },
     },
     dark: {

     },
   }
 })],
}
