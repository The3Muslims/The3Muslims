<script lang="ts">
    import { route, params, getParams } from "./router";
    
    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        route.set(to);
        params.set(getParams());
    };

    export let to: string;
</script>

<button role="link" id={$$props.id} class={$$props.class}
on:click={() => navigate(to)}>
    <slot />
</button>