<script lang="ts">
  import Link from "../router/Link.svelte";
</script>

<nav class="mx-10 flex gap-5">
    <Link to="/" class="font-bold text-foreground text-2xl bg-[rgb(30,11,13)] w-24 h-20 flex items-center justify-center">T3M</Link>
    <div class="flex items-end gap-5 font-bold text-sm">
      <Link class="text-foreground uppercase mb-1" 
      to="/">Home</Link>
      <Link class="text-foreground uppercase mb-1"
      to="/videos">Videos</Link>
    </div>
    <div class="flex flex-col grow justify-center items-end">
      <Link class="uppercase bg-[rgb(151,120,76)] w-32 h-11 text-sm font-bold rounded-full transition-all duration-300 
      shadow hover:brightness-110 hover:shadow-xl"
      to="/">Donate</Link>
    </div>
</nav>