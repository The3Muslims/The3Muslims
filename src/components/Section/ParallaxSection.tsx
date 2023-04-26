import TextCard from '../Cards/TextCard'
import React, {useState,useRef} from 'react'

interface Props{
    Content : object,
    Quote:Object,
    Image: any,
    Background: any,
    ID:String,
    Class:String,
}


function ParallaxSection(props:Props)
{



    window.addEventListener('scroll',parallax)
    window.addEventListener('resize',parallax)

    let  Image ;
    Image = useRef()
    
    // let section = this;
    return(
<section
    id={props.ID}
    className="
    grid
    relative
    z-0 
    h-parallaxSection
    overflow-hidden 
    " 
    style={{
        backgroundImage: `url(${props.Background})` ,
        backgroundPosition: "center",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }}>

    {props.Image ?  
    <img src={props.Image} id={"parallax"} 
        className="
            relative
            h-[auto]
            w-ladingImage
            tablet:left-thin 
            left-[calc(50%_-_(theme(width.ladingImage)/2))]
            top-landingImage
            border-transparent 
            border-thick
            rounded-2xl
            transition-[right_,_left,_width] 
            duration-[500ms] 
            overflow-auto 
        "
            ref={Image}
            // style={{top:Top}} 
        />
        : null 
        }
    { props.Quote ? <TextCard Quote={props.Quote} ID={"undefined"} Class={`
    absolute
    h-landingImage
    max-table:w-[calc(50%_+_(theme(width.ladingImage)/2)_-_(theme(spacing.thick)))]

    text-gold
    max-tablet:left-xthick
    desktop:left-[calc(50%_-_(theme(width.readable)/2))]
    right-xthick
    left-[calc(50%_-_(theme(width.ladingImage)/2))]
    top-landingImage
    border-transparent 
    border-card
    rounded-xl
    transition-[right_,_left,_width] 
    duration-[500ms] 
    overflow-auto 
    `}/> : null }

</section>
    )
    

    function parallax(){
        // check if the element dose exist
        if(!Image || !Image.current )
            return

        // section element 
        let section = Image.current.parentElement.getBoundingClientRect() ; 

        // image element inside the section, with class parallax
        let Ypos
        
        // // calculating new position value. 
        Ypos = ( -section.y  + 150 )  ;

        Image.current.style.top =  Ypos* 1.3  + 'px'

    }
}

export default ParallaxSection;

