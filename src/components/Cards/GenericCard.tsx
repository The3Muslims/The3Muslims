import React, {useState,useRef} from 'react'

interface Props{
    Content : any,
    ID:String,
    Class:String,
}


function GenericCard(props:Props)
{


    return(
<div 
id="parallax" 
className={`
bg-card
pr-xthick
min-h-Card
h-[auto]
rounded-xl 
border-card
border-transparent 
duration-[500ms] 
overflow-auto 


max-w-readable



`+props.Class}

>
    {props.Content ? props.Content: null}

</div>
    )
    


}

export default GenericCard;

