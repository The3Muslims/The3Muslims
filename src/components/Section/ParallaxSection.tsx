import TextCard from '../Cards/TextCard'
import React, {useState,useRef, FunctionComponent} from 'react'



interface ParallaxSedctionProps {
    Content : object,
    Quote:Object,
    Image: any,
    Background: any,
    ID:String,
    Class:String,
}
 
const ParallaxSection: FunctionComponent<ParallaxSedctionProps> = (props) => {
    
    window.addEventListener('scroll',parallax)
    window.addEventListener('resize',parallax)

    let  Image ;
    Image = useRef()
    
    // let section = this;
    return(
<section
    id={props.ID}
    className={`
    grid
    relative
    z-0 
    h-parallaxSection
    max-phone:h-[calc(theme(height.parallaxSection)*0.6)]
    max-tablet:h-[calc(theme(height.parallaxSection)*0.8)]
    overflow-hidden
    transition-all 
    
    bg-cover
    
    bg-center

    bg-no-repeat
    bg-fixed

    bg-[url(${props.Background})]

    backdrop:blur-2xl
    `}
    style={{
        backgroundImage: `url(${props.Background})`,
        
    }}
    
    >

    {props.Image ?  
    <img src={props.Image} id={"parallax"} 
        className="
            relative
            h-[auto]
            max-phone:w-[calc(((theme(width.ladingImage)*0.6)))]
            max-tablet:w-[calc(((theme(width.ladingImage)*0.8)))]
            w-ladingImage
            
            
            max-phone:left-[calc(50%-((theme(width.ladingImage)*0.6))/2)]
            max-tablet:left-[calc(50%-((theme(width.ladingImage)*0.8))/2)]

            tablet:left-thin 
            left-[calc(50%_-_((theme(width.ladingImage))/2))]
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

    max-phone:top-[calc(50%-(theme(height.landingImage)*0.7)/2)]
    max-tablet:top-[calc(50%-(theme(height.landingImage)*0.8)/2)]
    top-[calc(50%-(theme(height.landingImage))/2)]
    

    max-phone:h-[calc(((theme(width.ladingImage)*0.7)))]
    max-tablet:h-[calc(((theme(width.ladingImage)*0.8)))]
    h-landingImage

    max-table:w-[calc(50%_+_(theme(width.ladingImage)/2)_-_(theme(spacing.thick)))]
    

    text-gold
    left-[calc(50%_-_(theme(width.ladingImage)/2))]
    max-tablet:left-xthick
    desktop:left-[calc(50%_-_(theme(width.readable)/2))]
    right-xthick
    border-transparent 
    border-card
    rounded-xl
    transition-all 
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

        let ImgPos =Image.current.getBoundingClientRect()
    
        if(!section && !Image || !Image.current && !ImgPos)
            return
        // image element inside the section, with class parallax
        let Ypos
        
        // // calculating new position value. 
        Ypos = ( -section.y + (ImgPos.height*1.6)   )  ;

        let bottom = (section.height *0.8 )/Ypos


        
        Image.current.style.top = 150+(  -section.y  *   bottom ) + 'px'

    }
}
 

export default ParallaxSection