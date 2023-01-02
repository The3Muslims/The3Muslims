<script lang=ts>
    import { route, params } from "./router";
    
    window.addEventListener('popstate', () => {
        route.set(window.location.pathname);
        
        for (const key in $params) {
            if ($params.hasOwnProperty(key)) {
                route.set($route.replace(`:${key}`, $params[key]));
            }
        }
    });
</script>

<slot />