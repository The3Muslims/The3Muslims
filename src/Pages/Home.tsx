import ParallaxSection from "../components/Section/ParallaxSection"
import ContentSection from "../components/Section/ContentSection"

import Landing from "../Data/Landing.json"

import { FunctionComponent } from "react"


interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = (props) => {
    // functions used for rendering content based on values of the section type
    const RenderFunctions = {
        Parallax : (section:Object)=>{
            const{Image,Background,Quote}=section.Content
            
            return(<ParallaxSection Quote={Quote} Image={Image} Background={Background} ID="test" />)
        },
        Content  : (section:Object)=>{
            return(<ContentSection 
                ID={"12"}
                Content={section.Content}
            />)
        },
        
    }
    let Elements = Landing.map(section=>{
        // console.log(section)
        return (RenderFunctions[section.Type](section))
        
    })
    return(
<>

    {Elements}
</>
    )
}
 
export default Home;

