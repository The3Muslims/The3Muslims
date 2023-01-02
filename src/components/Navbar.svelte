<script lang="ts">
  import Link from "./Link.svelte";
</script>

<nav class="m-5">
    <Link class="bg-blue-500 hover:bg-blue-400 transition-colors px-3 py-1 text-white rounded-md shadow" 
    to="/">Home</Link>
    <Link class="bg-blue-500 hover:bg-blue-400 transition-colors px-3 py-1 text-white rounded-md shadow"
    to="/videos">Videos</Link>
</nav>