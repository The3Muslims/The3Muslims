import { FunctionComponent } from "react";

interface TextContainerProps {
    Content:any
    
}
 
const TextContainer: FunctionComponent<TextContainerProps> = (props) => {
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
