<script>
window.addEventListener('scroll',parallax)
window.addEventListener('resize',parallax)
function parallax(){
    let Yaxies = window.scrollY;

    let Moving = document.documentElement.querySelectorAll(`#parallax`);
    let counter = 1;

    for(let i = 0,j=-1 ; i < Moving.length-1 ; i+=2,j++)
    {
        let parent = Moving[i].parentElement.getBoundingClientRect();
        let Ypos = 100 ;
        
        if(i>0)
        {
            Ypos = ( parent.y + Moving[i].getBoundingClientRect().height * counter ) *0.5  ;
            Moving[i].style.top   = -Ypos + 200+ Yaxies *0.05  + "px"
            counter ++;
        }
        else
        {
            Moving[i].style.top   = -Ypos+ 150 + Yaxies *0.7  + "px"
        }
    }
}
</script>


<!-- this section have a minimum height , it requires a background image, that image will be "fixed"  
it will have a parallax effect when the user scrolls-->

<section
class="
grid
relative
z-0 
min-h-parallaxSection
overflow-hidden 
{$$props.class}
" 
style='
    background-image: url("{$$props.image}");
    background-position: center;background-size:cover;
    background-repeat: no-repeat;background-attachment: fixed;
'>

    <slot/>

</section>