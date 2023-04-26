import React, {useState,useRef} from 'react'

interface Props{
    Quote : Object,
    ID:String,
    Class:String,
}


function TextCard(props:Props)
{


    const {Text,Title} = props.Quote
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
    {Title ? <h1> {Title} </h1> : null}
    {Text ? <p>{Text}</p>: null}

</div>
    )
    


}

export default TextCard;

