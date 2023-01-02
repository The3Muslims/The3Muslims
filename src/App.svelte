<script lang=ts>
  import Home from './pages/Home/Home.svelte';
  import Videos from './pages/Videos/Videos.svelte';
  import Navbar from "./components/Navbar.svelte";
  import { Router, Route } from "./router/index";
</script>

<Navbar />

<main class="p-5">
  <Router>
    <Route path="/" component={Home} />
    <Route path="/videos/:id" component={Videos} />
  </Router>
</main>