import TextContainer from "../Containers/TextContainer"
import CardContainer from "../Containers/CardContainer"
import { FunctionComponent } from "react"


interface ContentSectionProps {
    Content:Object,
    ID:String,
    Class:String,

}
 
const ContentSection: FunctionComponent<ContentSectionProps> = (props) => {
    const RenderFunctions = {
        "Title" : (Title:String)=>{return(<TextContainer Content={<h1>{Title}</h1>}/>)},
        "Text"  : (Text:String)=>{return(<TextContainer Content={<p>{Text}</p>}/>)},
        "Tags"  : (Tags:any)=>{return(<CardContainer Tags={Tags} ID={""} Class={`!flex flex-wrap justify-around !grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]`}/>)},
        "Image" : ()=>{console.log("Image")},

        "Quotes" : (Quotes:object)=>{console.log("Quotes")},
        "Videos" : ()=>{return(<CardContainer Videos={props.Content.Videos}/>)},
    }
    let Elements = Object.keys(props.Content).map((key)=>{
        return (RenderFunctions[key](props.Content[key]))
    })

    return(
<section 
id={`${props.ID}`}
className={`
    bg-background
    s
    grid
    z-10
    border-3xthick
    border-transparent
    overflow-x-hidden 
    ${props.Class}
`}
>
    {Elements}
</section>
    )
}
 
export default ContentSection;
