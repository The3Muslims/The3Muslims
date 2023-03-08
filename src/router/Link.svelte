<script lang=ts >
    import { route, params, getParams } from "./router";
    
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();


    function HandleClick(to: string){
        navigate(to)
        dispatch("click")
    }

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        route.set(to);
        params.set(getParams());
    };

    export let to: string;
</script>

<button role="link" id={$$props.id} class="text-1xl  font-bold place-content-center place-items-center text-link {$$props.class}"
on:click={() => HandleClick(to)}>
    <slot />
</button>