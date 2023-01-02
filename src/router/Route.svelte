<script lang=ts>
    import type { ComponentType } from "svelte";
    import { isRoute, route } from "./router"

    export let component: ComponentType;
    export let path: string
</script>

{#if $route && isRoute(path)}
    <svelte:component this={component}>
        <slot />
    </svelte:component>
{/if}