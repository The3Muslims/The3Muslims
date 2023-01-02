<script lang=ts>
    import { onMount } from "svelte";
    import type { ComponentType } from "svelte";
    import { isRoute, route, pathstring } from "./router"

    export let component: ComponentType;
    export let path: string

    onMount(() => {
        pathstring.set(path);
    })
</script>

{#if $pathstring && $route && isRoute(path)}
    <svelte:component this={component}>
        <slot />
    </svelte:component>
{/if}