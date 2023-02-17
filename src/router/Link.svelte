<script lang="ts">
    import { route, params, getParams } from "./router";
    
    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        route.set(to);
        params.set(getParams());
    };

    export let to: string;
</script>

<button role="link" id={$$props.id} class="text-1xl  font-bold place-content-center place-items-center text-gold {$$props.class}"
on:click={() => navigate(to)}>
    <slot />
</button>