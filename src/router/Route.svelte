<script lang=ts>
    import { isRoute, route } from "./router"

    export let component: any
    export let path: string
</script>

{#if $route && isRoute(path)}
    <svelte:component this={component}>
        <slot />
    </svelte:component>
{/if}