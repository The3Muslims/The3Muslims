# Svelte Client Router
For those who are tired of SvelteKit pushing SSR down their throats, 
and do not want a hash-router.

Svelte Client Router introduces a React Router-like means
for your Single Page Application.

## Installation
Using yarn:
```bash
yarn add svelte-client-router
```

Using npm:
```bash
npm install svelte-client-router
```

## Examples
`App.svelte`
```svelte
<script>
    import { Router, Route, Link } from "svelte-client-router";
</script>

<Router>
    <Route path="/" component={Home}/>
    <Route path="/posts/:id" component={Posts}/>
    <Route path="/posts/:id/author-details" component={PostsAuthorDetails}/> 
</Router>

<Link to="/">Home</Link>
<Link to="/posts">All posts</Link>
<Link to="/posts/1">Post number 1</Link>
<Link to="/posts/1/author-details">Author details</Link>
```

## API
### Route
* `path: string`
* `component: ComponentType`

### Link
* `to: string`

### getParams(path: string)
returns an object containing key-value pairs of paramName:paramValue.
```js
// path string: /posts/:id
// URL: www.example.com/posts/1
const params = getParams()
console.log(params) // { id: 1 }
```