<script lang=ts >


import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher();
function HandleClick(){
    dispatch("click")
}

</script>

<!-- Contains text and can't expand beyond readable length set in the tailwind config -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article 
class="
    max-w-readable 
    mb-5
    overflow-x-hidden
    mx-auto
    {$$props.class} 
"
on:click={HandleClick}
>
<slot />
</article>