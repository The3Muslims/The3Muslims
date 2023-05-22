import React, { FunctionComponent } from "react";
import LinkButton from "../Buttons/Link";

import Logo from "../Buttons/Logo";


interface NavBarProps {
    Pages : String[],
}
 
const NavBar: FunctionComponent<NavBarProps> = (props) => {
    let NavLinks;
    let [Toggled,setToggled] = React.useState(false);

    NavLinks = (props.Pages) ? props.Pages.map((page,index)=>{
        return(<LinkButton id={`NavLink-${index}`} Content={page} to={`${page.toLocaleLowerCase()}`} Class="max-phone:text-xl text-3xl transition-all  font-bold text-center place-items-center text-link"/>)
    }) : [];

    
    return(
    <>
    <nav className=" 
    relative 
    gap-6 
    h-20
    max-h-20 
    p-thick
    grid
    grid-cols-[1fr_4fr_1fr]
    place-items-center
    bg-background
    backdrop:blur-xl
    
    
    
    ">
        
        <Logo to={"/home"} Class={``} Text={`T3M`}>

        </Logo>
        
        <div className="flex align-center  [&>p]:text-link [&>p]:text-xl  select-none font-bold text-foreground relative text-sm   left-0 top-0 max-phone:top-[-6rem] max-phone:left-[-1rem] items-center transition-all duration-500  gap-2xthick justify-between w-full">

            {NavLinks}
        </div>
        <div className="flex relative gap-xthic place-items-center justify-around align-center ">

        <svg className=" 
        stroke-gold 
        absolute
        right-[10%] 
        transition-all  
        delay-[400ms] 
        
        top-[-20px]
        phone:top-[-10rem] 
        " width="40" height="40" viewBox="0 0 10.583 10.583" onClick={Toggle}>
            <g>
                <path
                fill="none"
                className="transition-all duration-500"
                strokeDasharray={ Toggled ? "0 41.1 11.1 8 11.1" : "8.44020831,3.98991666,8.28674998,3.98991666,8.28674998,76.72916651"}
                strokeDashoffset={ Toggled ? "8.0" : "0"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="1"
                strokeWidth="1.535"
                d="M1.042 1.357h8.495l-.02 3.935H1.18v3.95h8.318L1.593 1.337v7.925l7.885-7.886"
                ></path>
            </g>
            </svg>
        </div>
    </nav>

    <div className={`w-full gap-8 py-6 grid grid-cols-1 top-20 auto-rows-max transition-all duration-[300ms] ease-in-out absolute h-[calc(100%_-_5rem)]  align-items-start bg-background  text-foreground z-50 ${Toggled ? "left-0": "left-full"} `}>
        {NavLinks}
    </div>
    </>
    )

    function Toggle()
    {
        setToggled(!Toggled)
    }
}
 
export default NavBar;

