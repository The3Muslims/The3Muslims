<script lang="ts">
  import { route } from "./stores"
  import Home from './pages/Home/Home.svelte';
  import Videos from './pages/Videos/Videos.svelte';
  import Navbar from "./components/Navbar.svelte";

  let routeValue: string;

  route.subscribe(value => {
    routeValue = value;
  });

  window.addEventListener('popstate', () => {
    route.set(window.location.pathname);
  });
</script>

<Navbar />

<main class="m-5">
  {#if routeValue === '/'}
    <Home />
  {:else if routeValue === '/videos'}
    <Videos />
  {:else}
    <h1>404</h1>
  {/if}
</main>
