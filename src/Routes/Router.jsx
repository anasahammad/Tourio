import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/community',
            element: <Community/>
        },
        {
            path: '/blogs',
            element: <Blogs/>
        },
        {
            path: '/about-us',
            element: <AboutUs/>
        },
        
        {
            path: '/contact-us',
            element: <ContactUs/>
        }
    ] 
    }, 
   ]); 