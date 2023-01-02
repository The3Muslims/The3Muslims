<script lang=ts>
  import Home from './pages/Home/Home.svelte';
  import Videos from './pages/Videos/Videos.svelte';
  import Navbar from "./components/Navbar.svelte";
  import Router from './router/Router.svelte';
  import Route from './router/Route.svelte';
</script>

<Navbar />

<main class="p-5">
  <Router>
    <Route path="/" component={Home} />
    <Route path="/videos/:id/:test" component={Videos} />
  </Router>
</main>