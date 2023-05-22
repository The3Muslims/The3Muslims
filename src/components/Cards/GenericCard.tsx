import  { FunctionComponent} from 'react'



interface GenericCardProps {
    Content : any,
    ID:String,
    Class:String,

}
 
const GenericCard: FunctionComponent<GenericCardProps> = (props) => {



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

