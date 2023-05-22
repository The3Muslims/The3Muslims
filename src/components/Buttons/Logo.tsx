import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom"

interface LogoProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  > {
  replace?: boolean;
  state?: any;
  to: To;
  reloadDocument?: boolean;
  preventScrollReset?: boolean;
  relative?: "route" | "path";
  Class : String,
  Text : String,
}

type To = string | Partial<Path>;

interface Path {
  pathname: string;
  search: string;
  hash: string;
}


const Logo: FunctionComponent<LogoProps> = (props) => {
    return ( 
        <Link 
        to={props.To}
        id={props.ID}

        className={`
        bg-accent
        !text-gold

        w-max
        max-tablet:text-2xl
        text-4xl

        relative 
        grid 
        
        p-thin
        px-2xthick
        transition-all 
        duration-500
        rounded-xl
        place-items-center
        font-bold
        h-fit
        place-self-center
        select-none
        
        
        `+props.Class}
        
        >
            {props.Text ? props.Text : null}
        
        </Link>
     );
}
 
export default Logo;