import React, { FunctionComponent } from "react";
import TagButton from "../Buttons/TagButton";
import Videos from "../../Data/Videos.json"
import VideoCard from "../Cards/VideoCard";

    


interface CardContainerProps {
    Tags:String,
    Videos:any,
    ID:String,
    Class:String,

}
 
const CardContainer: FunctionComponent<CardContainerProps> = (props) => {
    let Tags = props.Tags ?  props.Tags.map((Tag,index)=>{
        return (<TagButton Text={Tag}/>)
    }): null

    let Vids = props.Videos ?  Videos.map((Video,index)=>{

        
        return(<VideoCard Thump={Video.Content.Thumb} Class={`
                rounded-xl 
                bg-black 
                object-contain 
                w-full
                h-auto 
                place-self-center 
                aspect-[16/9] 
                `}
        Title={Video.Content.Title}
        Description={Video.Content.Description} ID={`Video-${index}`} Tags={undefined}
        to={`/videos/${Video.ID}`}            />
            )
        }
    ):null

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
