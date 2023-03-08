<script lang=ts >
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();


    function HandleClick(){
        dispatch("click")
    }
    
    import Link from "../../router/Link.svelte";
</script>


<Link 
to={$$props.to} 
class="
min-w-[8rem] 
w-fit 
place-self-center 
bg-gold 
!text-background 
py-2 
px-3  
font-mono 
font-extrabold 
text-xl 
hover:brightness-120 
duration-200 
uppercase 
rounded-full 
transition-all  
hover:shadow-xl 
{$$props.class}
"
on:click={HandleClick}> 
<slot />
</Link>
