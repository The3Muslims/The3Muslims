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
        
        "videoCard"     : "350px",
      },
      maxWidth:{
        "readable"      : "900px",

        "videoCard"     : "350px",
        "videoCardImage": "400px",
      },
      minWidth:{

        "videoCard"       : "220px",
        "videoCardImage"  : "200px",
      },
      height:{
        "parallaxSection" : "600px",
        "parallaxCard"    : "400px",
        "Logo"            : "50px",
        
        "videoCard"       : "300px",
        "videoCardImage"  : "300px",

        "textCard"        : "300px",
      },
      maxHeight:{
        "parallaxSection": "600px",
        
        "videoCard"      : "500px",
        "videoCardImage" : "300px",
      },
      minHeight:{
        "parallaxSection": "600px",

        "videoCardImage" : "150px",

        "textCard"       : "100px",
      },
      padding:{
        "4xthick" : "5rem",
        "3xthick" : "2.5rem",
        "2xthick" : "1rem",
        "xthick" : ".75rem",
        "thick" : ".5rem",
        "thin"  : ".25rem",      
      },
      borderWidth: {
        "card" : "1rem",
        "4xthick" : "5rem",
        "3xthick" : "2.5rem",
        "2xthick" : "1rem",
        "xthick" : ".75rem",
        "thick" : ".5rem",
        "thin"  : ".25rem",  
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
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

