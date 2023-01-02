<script lang=ts>
    import { onMount } from "svelte";
    import type { ComponentType } from "svelte";
    import { isRoute, route, pathstring, params, getParams } from "./router"

    export let component: ComponentType;
    export let path: string

    onMount(() => {
        pathstring.set(path);
        params.set(getParams());
    })
</script>

{#if $route && isRoute(path)}
    <svelte:component this={component}>
        <slot />
    </svelte:component>
{/if}