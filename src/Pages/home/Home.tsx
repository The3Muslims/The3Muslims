import ParallaxSection from "../../components/Section/ParallaxSection";
import ContentSection from "../../components/Section/ContentSection";

import Landing from "../../Data/Landing.json"

function Home(props:Object)
{

    const RenderFunctions = {
        "Parallax" : (section:Object)=>{
            const{Image,Background,Quote}=section.Content
            
            return(<ParallaxSection Quote={Quote} Image={Image} Background={Background} ID="test" />)
        },
        "Content"  : (section:Object)=>{
            console.log(Image)
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