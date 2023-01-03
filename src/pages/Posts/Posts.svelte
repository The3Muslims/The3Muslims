<script lang=ts>
    import { getPosts, posts } from '../../api/getPosts';
    import { onMount } from 'svelte';

    onMount(async () => {
        if(!$posts.length) {
            posts.set(await getPosts());
        }
    });
</script>

<h1 class="font-bold">home</h1>

{#each $posts as post}
    <h2>{@html post.title.rendered}</h2>
    <p>{@html post.content.rendered}</p>
{/each}