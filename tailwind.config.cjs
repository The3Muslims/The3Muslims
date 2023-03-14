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
        'phone' : '600px',
        'tablet' : '850px',
        'desktop' : '1200px',
      },
      colors: {


        "accent"     : "#501b1d",
        "card"       : "#501b1de8",
        
        "background" : "#2e1114",
        
        "border"     : "#64485c",
        "highlight"  : "#83677b",

        "gold"       : "#d6b34d",
        "foreground" : "#ADADAD",
        
        "link"       : "#AB381F",
        "visitied"   : "#ffe6aa ",
        

      },
      
      width:{
        "readable"      : "900px",

        "ladingImage"   : "400px",
        
        "Card"     : "150px",
      },
      maxWidth:{
        "readable"      : "900px",

        "Card"     : "250px",
      },
      minWidth:{

        "Card"     : "150px",
      },
      height:{
        "parallaxSection" : "600px",
        "parallaxCard"    : "400px",
        "Logo"            : "50px",
        
        "Card"       : "300px",

        "Card"        : "300px",
      },
      maxHeight:{  
        "Card"      : "500px",
      },
      minHeight:{
        "Card"       : "100px",
      },
      padding:{
        "4xthick" : "5rem",
        "3xthick" : "2.5rem",
        "2xthick" : "1rem",
        "xthick" : ".75rem",
        "thick" : ".5rem",
        "thin"  : ".25rem",
        "xthin"  : ".15rem",
        "2xthin"  : ".10rem",
      },
      borderWidth: {
        "card" : "1rem",
        "4xthick" : "5rem",
        "3xthick" : "2.5rem",
        "2xthick" : "1rem",
        "xthick" : ".75rem",
        "thick" : ".5rem",
        "thin"  : ".25rem",  
        "xthin"  : ".15rem",
        "2xthin"  : ".10rem",
      },
      spacing:{
        "card" : "1rem",
        "landingImage" : "50px",
        "4xthick" : "5rem",
        "3xthick" : "2.5rem",
        "2xthick" : "1rem",
        "xthick" : ".75rem",
        "thick" : ".5rem",
        "thin"  : ".25rem", 
        "xthin"  : ".15rem", 
        "2xthin"  : ".10rem", 
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

