<script>


export let toggle;
export let toggled=true
// function for handilling input, "toggle" have to be passed form the parent element
// toggled needs to be passed and bind with parent element for the button to behave correctly. 
const handleToggle=()=>{
    toggle()
}
// export let toggle= false
</script>

<!-- Burger menu button, to toggle option/actions menu for navigation bar for example , or additional actions on other elements -->


<button class="grid place-items-center w-[40px] h-[40px] duration-500 stroke-gold
        burger
        {$$props.class}
        {toggled === true ? "active" : ""}
      "
      on:click={handleToggle}>
      <svg
      class=" " viewBox="0 0 10.583333 10.583333" version="1.1"
      
      >
          <g   
          id="layer1">
          <path
          style="fill:none;stroke-width:1.53458333;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;:active"
          d="m 1.0421742,1.3567929 c 8.4947034,0 8.4947034,0 8.4947034,0 L 9.517214,5.2916666 H 1.1798199 V 9.2419227 H 9.4975502 L 1.5927569,1.3371292 V 9.2615863 L 9.4778866,1.3764565"
          id="path1061" />
          </g>
      </svg>
      
</button>

<style>
  /* couldnt find any other way for editing the the way the button well animate when clicking on it */
    .burger
    {
      stroke-dasharray:8.44020831,3.98991666,8.28674998,3.98991666,8.28674998,76.72916651;
      stroke-dashoffset:0;
      transition: all 0.5s ease;
    }
    .burger.active
    {
      stroke-dasharray:0 41.1 11.1 8 11.1  ;
      stroke-dashoffset: 8.0;
    }
  
    
  
</style>