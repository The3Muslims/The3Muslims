<script>

import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher();
function HandleClick(){
    dispatch("click")
}
export let toggled;
// function for handilling input, "toggle" have to be passed form the parent element
// toggled needs to be passed and bind with parent element for the button to behave correctly. 

</script>

<!-- Burger menu button, to toggle option/actions menu for navigation bar for example , or additional actions on other elements -->


<button class="grid place-items-center w-[30px] h-[30px] duration-500 stroke-gold
        arrow
        {$$props.class}
        {toggled ? "active" : ""}
        "
        on:click={HandleClick}>
        <svg

        viewBox="0 0 92.604162 92.604169"
        version="1.1"
        
        >
     
       <defs
          id="defs2" />
     
         <path
            style="fill:none;fill-opacity:1;stroke-width:5.29167;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:254, 275.167;stroke-opacity:1"
            d="M 11.374541,82.369955 H 86.433749 L 47.469322,14.881596 8.4469549,82.470323 H 46.42069 L 88.077795,10.318102 H 4.7106328 L 46.265281,82.292858"
            id="path2441" />
     </svg>
               
</button>

<style>
    /* couldnt find any other way for editing the the way the button well animate when clicking on it */
    .arrow
    {
      stroke-dashoffset:0;
      transition: all 0.5s ease;
    }
    .arrow.active
    {
      
      stroke-dashoffset:258.762;
    }
    
</style>