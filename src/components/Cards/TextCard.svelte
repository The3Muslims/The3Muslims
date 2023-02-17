<script>

</script>

<!--
    this card is suppose to be holding text, currently only used in the parallax section. 
    can be reused anywhere, better used for card container to display different content from different sources.
    
    ensures that a text container does not exceed a readable with 
-->
<div 
id="parallax" 
class=" 
bg-accent/80
absolute
px-4 
h-[auto]

max-w-cardDesktop 
max-h-[calc((theme(height.parallaxSection)/2))] 
tablet:w-[calc(100%_-_theme(width.ladingImage)_-_1rem)] 

rounded-xl 
border-card 
border-transparent 
max-phone:w-cardPhone 
max-tablet:w-cardTablet 

duration-[500ms] 
overflow-auto 


{$$props.class}
">
<slot />
</div>