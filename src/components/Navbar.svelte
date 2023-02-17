<script lang="ts">
  import Link from "../router/Link.svelte";

  // import resolveConfig from 'tailwindcss/resolveConfig'
  import NavLinks from './NavLinks.svelte'
  import LinkButton from './Buttons/LinkButton.svelte'
  import Logo from './Logo.svelte'
  import BurgerButton from './Buttons/BurgerButton.svelte'
  // import tailwindConfig from "../../tailwind.config.cjs"

  // const fullConfig = resolveConfig(tailwindConfig)

  $:NavMenu = false;
  const toggle = ()=>{
    NavMenu =!NavMenu
  }

  // close menu when size exceeds the Max mobile view
  const close_Menu_resize  = ()=>{
    if(window.innerWidth > 640)
    {
      NavMenu = false
    }
  }


  window.addEventListener("resize", close_Menu_resize);


</script>

<!-- todo : 
break nav content into components -->
<nav 
class="
  relative 
  flex 
  gap-6 
  h-20 
  pr-2 
  bg-background 
  justify-between  
  content-center
  {$$props.class}
  ">
  <!-- display Logo and link to the landing page -->
  <Logo class="place-self-center left-[calc(49.5%_-_4.5rem)]  h-[50px] m-h-[50px] w-36 phone:w-28 phone:left-2  transition-all duration-500 rounded-full justify-self-center ">
    <Link to="/" class="text-2xl"> T3M </Link>
  </Logo>

  <!-- container for lings to avoid spaghetti code on styling -->
  <NavLinks>
    <Link class=" uppercase" to="/">Home</Link>

    <Link class=" uppercase" to="/videos">Videos</Link>
  </NavLinks>


  <!-- this section contain all "button" like elements that toggle other things likes menu, maybe themes later on 
  todo : make a button to switch themes 
  -->
  <div class=" flex gap-2 w-28 items-center place-content-end justify-content-center">

      <LinkButton to="/" class="absolute right-3 max-phone:right-[-10rem] phone:block uppercase bg-gold w-32 h-11 text-sm font-bold transition-all duration-300 shadow hover:brightness-110 hover:shadow-xl">Donate</LinkButton>

      <!-- Burger button to toggle navigation menu in mobile view 
         pass the "toggle" function and bind the "toggle" variable for the to behave as expected  -->
      <BurgerButton class="      
      absolute
      right-[10%] 
      transition-all  
      delay-[400ms] 
      phone:absolute 
      phone:right-[-3rem] 
      "
      {toggle}
      toggled={NavMenu}
      bind:NavMenu
      ></BurgerButton>
      
      
  </div>

</nav>

<!-- navigation menu  for mobile view  that can be toggled using burger menu-->
<div 
class="NavMenu {NavMenu===true?"active":""} w-full gap-8 py-6 grid grid-cols-1 top-20 auto-rows-max transition-all duration-[300ms] ease-in-out absolute h-[calc(100%_-_5rem)]  align-items-start bg-background  text-foreground z-50">

  <Link class=" uppercase" to="/">Home</Link>

  <Link class=" uppercase" to="/videos">Videos</Link>

  <LinkButton to="/">Donate</LinkButton>
</div>


<style>

  .NavMenu
  {
    right: calc(-100%);
  }
  .NavMenu.active
  {
    right:0px;
  }

</style>