<script lang="ts">
    import { route } from "../stores";

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        route.set(to);
    };

    export let to: string;
</script>

<button role="link" id={$$props.id} class={$$props.class}
on:click={() => navigate(to)}>
    <slot />
</button>