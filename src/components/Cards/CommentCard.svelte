<script lang=ts >

    import TextContainer from '../Containers/TextContainer.svelte'
    import ArrowButton from '../Buttons/ArrowButton.svelte'

    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();
    function HandleClick(){
        dispatch("click")
    }


    $:toggled=true;

    function toggle(){
    toggled = !toggled;
    }

    function Show(){
    toggled = false;
    }

    
</script>

<!--
    can be reused anywhere, better used for card container to display different content from different sources.
    
    ensures that a text container does not exceed a readable with 
-->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
class=" 
bg-card
pr-thick
min-h-Card
h-[auto]
rounded-xl 
border-card
border-transparent 
duration-[500ms] 
overflow-auto 
relative

max-w-readable

{$$props.class}
"
on:click={HandleClick}

>
    <ArrowButton {toggled} on:click={toggle} class="top-0 right-0 absolute "/>
    <TextContainer 
    class=" { !toggled ? "!line-clamp-[100] " : "[&>*]:cursor-pointer " } [&>*]:transition-all  line-clamp-4 transition-all duration-500 "
    on:click={Show}
    >
        <slot />
    </TextContainer>
</div>