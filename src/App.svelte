<script lang=ts>
  import Home from './pages/Home/Home.svelte';
  import Posts from './pages/Posts/Posts.svelte';
  import Videos from './pages/Videos/Videos.svelte';
  import Navbar from "./components/Navbar.svelte";
  import { Router, Route } from "./router/index";
</script>

<Navbar />

<main class=" overflow-x-hidden">
  <Router>
    <Route path="/" component={Home} />
    <Route path="/posts/:id" component={Posts} />
    <Route path="/videos/:id" component={Videos} />
  </Router>
</main>