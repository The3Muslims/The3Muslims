/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
  
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/**/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone' : '600px',
        'tablet' : '850px',
        'desktop' : '1200px',
      },
      colors: {


        "accent"     : "#1D4ECD",
        "card"       : "#0E0C10",
        // 03001C
        "background" : "#0E0C10",
        
        "border"     : "#E9F8F9",
        "highlight"  : "#26282B",

        "gold"       : "#E9F8F9",
        "foreground" : "#D1D4C9",
        
        "link"       : "#E9F8F9",
        "visited"   : "#ffe6aa ",
        

      },
      
      width:{
        "readable"      : "900px",

        "ladingImage"   : "300px",
        
        "Card"          : "150px",
      },
      maxWidth:{
        "readable"      : "900px",

        "Card"          : "250px",
      },
      minWidth:{

        "Card"          : "150px",
      },
      height:{
        "parallaxSection" : "600px",
        "parallaxCard"    : "400px",
        "Logo"            : "50px",
        
        "landingImage"   : "300px",


        "Card"            : "300px",
      },
      maxHeight:{  
        "Card"            : "500px",
      },
      minHeight:{
        "Card"            : "100px",
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