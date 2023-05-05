
import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom"

interface LinkProps
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
  Content : any,
}

type To = string | Partial<Path>;

interface Path {
  pathname: string;
  search: string;
  hash: string;
}


const LinkButton: FunctionComponent<LinkProps> = (props) => {
    return(
<Link 
  to={props.to}
  reloadDocument={props.reloadDocument}
  preventScrollReset={props.preventScrollReset}
  relative={props.relative}

  id="parallax" 

  className={`
  max-tablet:text-lg
  text-xl
  font-bold
  place-content-center 
  place-items-center 
  text-link

  ${props.Class}`}
  >
    {props.Content}
</Link>
    )
}
 
export default LinkButton;


