import React from "react";
import NavBar from "./components/Partials/NavBar";
import Home from "./routes/home/Home";

// trying to implement React router 
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/home",
    element: <Home/>
  },

])

export default () => {
  return (
<>
    <NavBar
        Pages={["Home","Videos","Posts"]}
        Name={"Username"}
    />
    <RouterProvider router={router} />

</>
  )
}