

<script>
import Link from "../../router/Link.svelte"

</script>

<Link 
to={$$props.to}
class=" 
bg-accent

max-h-[600px]

grid
gap-4
p-4

rounded-xl 
border-solid
border-[calc(card/2)]
border-transparent 

items-start
content-start
justify-start

duration-[500ms] 
overflow-auto 

text-start
{$$props.class}
">
<img src="{$$props.image}" class="max-h-[300px]" alt="">
<h3 class="place-self-start">{$$props.title === undefined ? "" : $$props.title}</h3>
<p class="place-self-start font-normal line-clamp-5">{$$props.description === undefined ? "" : $$props.description}</p>
</Link>