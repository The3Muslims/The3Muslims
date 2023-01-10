<script lang=ts>
    import { route, params, getParams } from "./router";
    
    const setParams = () => {
        route.set(window.location.pathname);
        params.set(getParams());
        
        for (const key in $params) {
            if ($params.hasOwnProperty(key)) {
                route.set($route.replace(`:${key}`, $params[key]));
            }
        }
    }
    window.addEventListener('popstate', setParams);
</script>

<slot />