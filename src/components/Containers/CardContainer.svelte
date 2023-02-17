<script>

</script>
<!-- contains all kinds of cards like elements/content  -->
<!-- elements are sorted from left to right, and cant exceed the width specified in the "minmax" value  -->
<div
class="
grid 
grid-cols-[repeat(auto-fill,minmax(300px,1fr))] 
gap-x-4
gap-y-8
{$$props.calss} 
">

<slot></slot>
</div>