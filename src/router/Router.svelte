<script lang=ts>
    import { route } from "./router";
    
    window.addEventListener('popstate', () => {
        route.set(window.location.pathname);
    });
</script>

<slot />