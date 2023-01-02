<script lang="ts">
  import Link from "../router/Link.svelte";
</script>

<nav class="p-5">
    <Link class="bg-blue-500 hover:bg-blue-400 transition-colors px-3 py-1 text-white rounded-md shadow" 
    to="/">Home</Link>
    <Link class="bg-blue-500 hover:bg-blue-400 transition-colors px-3 py-1 text-white rounded-md shadow"
    to="/videos">Videos</Link>
</nav>