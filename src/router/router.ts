import { writable, get } from "svelte/store";

export const route = writable(window.location.pathname);

export const getParams = (path: string): {[key: string]: string} => {
    const paramRegex = /\/:(\w+)/g;
    const params: {[key: string]: string} = {};
    let match: any[];
    while ((match = paramRegex.exec(path)) !== null) {
        const paramName = match[1];
        const paramValue = match[2];
        params[paramName] = paramValue;
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
  