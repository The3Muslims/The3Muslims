<script lang="ts">
    import { route } from "../stores";

    const navigate = (path: string) => {
        window.history.pushState({}, '', path);
        route.set(path);
    };

    export let path: string;
</script>

<button class={$$props.class}
on:click={() => navigate(path)}>
    <slot />
</button>