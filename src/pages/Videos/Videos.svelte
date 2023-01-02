<script lang=ts>
    import Link from "../../router/Link.svelte";
    import { params } from "../../router/router";
</script>

<h1 class="font-bold">videos</h1>

<div class="flex">
    <Link to="/videos/1">Video 1</Link>
    <Link to="/videos/2">Video 2</Link>
    <Link to="/videos/3">Video 3</Link>
</div>

<br/>

<div>
    <h2>Video</h2>
</div>

<br/>
{$params.id}