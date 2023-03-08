<script lang=ts >

    export let to;
    export let id;
    import Link from "../../router/Link.svelte";
</script>

<!-- todo: make the tag work -->
<!-- the only use case for this is to display text that have an affect on the current page not necessary to change the whole page.
currently only works as a link-->


<Link 
id={id} 
to={to} 
class=" 
min-w-[6rem] 
w-fit 
place-self-center 
bg-accent 
!text-gold 
px-2 py-1  
font-mono font-extrabold 
text-sm 
duration-300 
uppercase 
rounded-full 
transition-all  
hover:shadow-xl 
hover:bg-highlight
{$$props.class}
">
<slot />
</Link>