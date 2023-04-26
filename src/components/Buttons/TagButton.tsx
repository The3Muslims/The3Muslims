
interface Props{
    Text : String,
    ID:String,
    Class:String,
}


function TagButton(props:Props)
{


    return(
<div 
id="parallax" 
className={`
min-w-[2rem] 
w-fit 
place-self-center 
bg-accent 
!text-gold 
px-2 py-1  
font-mono font-extrabold 
text-sm 
duration-300 
uppercase 
rounded-l 
transition-all  
hover:shadow-xl 
hover:bg-highlight
text-center


`+props.Class}

>
    {props.Text ? <p>{props.Text}</p>: null}

</div>
    )
    


}

export default TagButton;

