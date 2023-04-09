import React from "react";
import NavBar from "./components/Partials/NavBar";
import Home from "./Pages/home/Home";
export default () => {
  return (
<>
    <NavBar
        Pages={["Home","Videos","Posts"]}
        Name={"Username"}
    />
    <Home></Home>
</>
  )
}