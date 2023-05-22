import React, {useState,useRef, FunctionComponent} from 'react'


interface TextCardProps {
    Quote : Object,
    ID:String,
    Class:String,
}
 
const TextCard: FunctionComponent<TextCardProps> = (props) => {
   
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

