import { FunctionComponent } from "react";

import Link from '../Buttons/Link'


interface VideoCardProps {
    ID : String,
    Thump : String,
    Title : String,
    Description : String,
    Tags : String,
    Class :String,
    to : to,
}

type to = string | Partial<Path>;

interface Path {
  pathname: string;
  search: string;
  hash: string;
}
 
const VideoCard: FunctionComponent<VideoCardProps> = (props) => {

    const Thump = props.Thump ? 
    <img src={`${props.Thump}`} className={`
        rounded-xl 
        bg-black 
        object-contain 
        w-full
        h-auto 
        place-self-center 
        aspect-[16/9] 
        `}
    /> : 
    <img className={`
        rounded-xl 
        bg-black 
        object-contain 
        w-full
        h-auto 
        place-self-center 
        aspect-[16/9] 
        `}
        src="/Images/MainBG.png" alt="" 
    />;
    const Title = props.Title ? <h3>{props.Title}</h3> : <h3>No Title</h3>;
    const Description = props.Description ? <p className={`place-self-start font-normal line-clamp-3`}>{props.Description}</p> : <p>No description</p>
    const Tags  = props.Tags && props.Tags.length > 0 ? props.Tags : undefined

        
        
    return (
        <Link 
        to={`${props.to}`} 
        relative={"path"}
        Class={`
        bg-card
        h-auto
        max-h-Card
        min-w-Card
        flex
        flex-col
        gap-4
        p-4
        
        rounded-xl 
        border-solid
        border-thick
        border-transparent
        
        
        items-start
        content-start
        justify-start
        
        duration-[500ms] 
        overflow-auto 
        
        text-start
        m-thick
        cursor-pointer`} 
        Content={
            <>
                {Thump}
                {Title}
                {Description}
                {/* <CardContainer Tags={Tags} ID={""} Class={`!flex overflow-hidden                                                    e justify-around !grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]`}/> */}
            </>
        }        />
      );
}
 
export default VideoCard;