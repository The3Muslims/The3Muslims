

<script lang=ts >
import Link from "../../router/Link.svelte"

let Image = `/images/background4.png`

function handleImgError (e){
        // e.target.src=`/images/background4.png`
        console.log(e.target.src)
        e.target.src=Image
    }
</script>

<Link 
to={$$props.to}
class=" 
bg-card
h-auto
max-h-Card
min-w-Card
flex
flex-col
gap-4
p-4

rounded-xl 
border-solid
border-thick
border-transparent


items-start
content-start
justify-start

duration-[500ms] 
overflow-auto 

text-start
m-thick
{$$props.class}
">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<img on:error={handleImgError} 
    class=" rounded-xl bg-black object-contain w-full   h-auto place-self-center aspect-[16/9] " 
    src="{$$props.image || Image}" 
    alt="" 
>
<h3 class="place-self-start">{$$props.title === undefined ? "" : $$props.title}</h3>

{#if  $$props.description}
     <p class="place-self-start font-normal line-clamp-5">{$$props.description}</p>
     
{/if}
</Link>