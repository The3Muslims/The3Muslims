<script lang=ts >

</script>
<!-- contains all kinds of cards like elements/content  -->
<!-- elements are sorted from left to right, and cant exceed the width specified in the "minmax" value  -->
<div
class="
grid 
grid-cols-[repeat(auto-fill,minmax(theme(maxWidth.Card),1fr))] 
gap-2xthick

border-2xthick
border-transparent

mb-3xthick

{$$props.class} 
">
    <slot></slot>
</div>