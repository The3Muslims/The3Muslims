/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    "./src/**/**/*.svelte",
    "./src/**/**/**/*.svelte",
    "./src/**/**/**/**/*.svelte",
  ],
  theme: {
    extend: {
      screens:{
        'phone' : '640px',
        'tablet' : '768px',
        'desktop' : '1336px',
      },
      colors: {


        "accent"     : "#501b1d",
        
        "background" : "#2e1114",
        
        "border"     : "#64485c",
        "highlight"  : "#83677b",

        "gold"       : "#d6b34d",
        "foreground" : "#ADADAD",
        
        "gradient-1" : "#721E27",
        "gradient-2" : "#500C14",
        "gradient-3" : "#721E27",
        "gradient-4" : "#500C14",

      },
      spacing:{
        "card" : "1rem",
        "landingImage" : "50px"
      },
      width:{
        "readable"      : "900px",
        "cardDesktop"   : "900px",
        "cardTablet"    : "600px",
        "cardPhone"     : "400px",
        "ladingImage"   : "400px",
        
      },
      maxWidth:{
        "readable"      : "900px",


      },
      minWidth:{

      },
      borderWidth: {
        "card" : "1rem"
      },
      height:{
        "parallaxSection": "600px",
        "parallaxCard"   : "400px",
        "Logo"           : "50px",
        
      },
      maxHeight:{
        "parallaxSection": "600px",
      },
      minHeight:{
        "parallaxSection": "600px",
      }
  
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

