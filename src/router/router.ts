import { writable, get, type Writable } from "svelte/store";

export const route = writable(window.location.pathname);
export const pathstring = writable('');
export const params: Writable<Record<string, any>> = writable({});

export const getParams = () => {
    const pathParts = get(pathstring).split('/');
    const routeParts = get(route).split('/');
    const params = {};
    
    for (let i = 0; i < pathParts.length; i++) {
      const pathPart = pathParts[i];
      const routePart = routeParts[i];
      if (pathPart[0] === ':') {
        params[pathPart.slice(1)] = routePart;
      }
    }
    
    return params;
}

export const isRoute = (path: string) => {
  const routeSegments = get(route).split('/');
  const pathSegments = path.split('/');

  for (let i = 0; i < pathSegments.length; i++) {
    const routeSegment = routeSegments[i];
    const pathSegment = pathSegments[i];
    if (routeSegment !== pathSegment && !pathSegment.startsWith(':')) {
      return false;
    }
  }

  if (routeSegments.length !== pathSegments.length && routeSegments.slice(pathSegments.length).some(segment => !segment.startsWith(':'))) {
    return false;
  }

  return true;
}