<script>

</script>
<!-- 
    section with a solid color used for any kind of content, using content containers
    
 -->
<section 
id="{$$props.id}"
class="
    bg-background
    grid
    z-10
    border-3xthick
    border-transparent
    overflow-x-hidden 
    {$$props.class}
">
    <slot />
</section>