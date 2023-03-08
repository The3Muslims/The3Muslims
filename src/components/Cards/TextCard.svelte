<script lang=ts >
import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher();
function HandleClick(){
    dispatch("click")
}

</script>

<!--
    this card is suppose to be holding text, currently only used in the parallax section. 
    can be reused anywhere, better used for card container to display different content from different sources.
    
    ensures that a text container does not exceed a readable with 
-->
<div 
id="parallax" 
class=" 
bg-card
pr-thick
min-h-textCard
h-[auto]
rounded-xl 
border-card
border-transparent 
duration-[500ms] 
overflow-auto 


max-w-readable

{$$props.class}
"
on:click={HandleClick}

>
<slot />
</div>