import React from "react";
import TagButton from "../Buttons/TagButton";
import GenericCard from "../Cards/GenericCard";
import Videos from "../../Data/Videos.json"


interface Props{
    Tags:String,
    Videos:any,
    ID:String,
    Class:String,
}



function CardContainer(props:Props)
{
    let Tags = props.Tags ?  props.Tags.map((Tag,index)=>{
        return (<TagButton Text={Tag}/>)
    }): null

    let Vids = props.Videos ?  Videos.map((Video,index)=>{

        
        return(<GenericCard Content={
            <>
                <img src={Video.Content.Thumb} className={`
                rounded-xl 
                bg-black 
                object-contain 
                w-full
                h-auto 
                place-self-center 
                aspect-[16/9] 
                `}></img>
                <h3>{Video.Content.Title}</h3>
                {Video.Content.Description ? <p className="place-self-start font-normal line-clamp-3">{Video.Content.Description}</p> : null } 
            </>
        }
        Class={`
        bg-card
        h-auto
        max-h-Card
        min-w-Card
        flex
        flex-col
        gap-4
        p-4
        
        rounded-xl 
        border-solid
        border-thick
        border-transparent
        
        
        items-start
        content-start
        justify-start
        
        duration-[500ms] 
        overflow-auto 
        
        text-start
        m-thick`} />)
    }): null

    return(
<div
className={`
grid 
grid-cols-[repeat(auto-fill,minmax(theme(maxWidth.Card),1fr))] 
gap-2xthick

border-2xthick
border-transparent

mb-xthick

${props.Class}`}
>
    {Tags}
    {Vids}
</div>
    )
    
}

export default CardContainer;

