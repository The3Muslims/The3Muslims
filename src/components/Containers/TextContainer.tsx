interface Props{
    Content:any
}

function TextContainer(props:Props)
{
    return(
<article 
className="
    max-w-readable 
    mb-5
    overflow-x-hidden
    mx-auto
"
>
        {props.Content}
</article>

    )
    
}

export default TextContainer;

