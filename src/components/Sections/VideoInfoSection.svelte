<script>

import TextContainer from '../Containers/TextContainer.svelte'
import ArrowButton from '../Buttons/ArrowButton.svelte'

$:toggled=true;

function toggle(){
   toggled = !toggled;
}

function Show(){
   toggled = false;
}



</script>
<!-- 
    section with a solid color used for any kind of content, using content containers
    
 -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section class="
    grid
    z-10
    border-3xthick
    border-transparent
    overflow-x-hidden 
    relative
    {$$props.class}
"

>

    <ArrowButton  
    {toggled} 
    on:click={toggle} 
    class="absolute right-0 top-0" 
    />
    <TextContainer 
    class=" { !toggled ? "!line-clamp-[100] " : "[&>*]:cursor-pointer   select-none" } [&>*]:transition-all  line-clamp-4 transition-all duration-500 "
    on:click={Show}
    >

        <slot />

    </TextContainer>
</section>