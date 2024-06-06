import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import DashboardLayout from "../Layoutes/DashboardLayout";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import PackageDetails from "../Pages/Home/TravelGuideSec/Tabs/OurPackages/PackageDetails";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import TourGuideDetails from "../Pages/TourGuides/TourGuideDetails";
import MyBookings from "../Pages/Dashboard/Tourist/MyBookings";
import MyWishList from "../Pages/Dashboard/Tourist/MyWishList";
import MyProfile from "../Pages/Dashboard/Common/MyProfile";
import MyAssignTour from "../Pages/Dashboard/TourGuide/MyAssignTour";

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
        },
         {
            path: "/package-details/:id",
            element: <PackageDetails/>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_KEY}/package/${params.id}`)
        },
         {
            path: "/guide-details/:email",
            element: <TourGuideDetails/>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_KEY}/tour-guide/${params.email}`)
        },
        
    ] 
    }, 
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/sign-up",
        element: <SignUp/>
    },
    
   
    
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: "my-profile",
                element: <MyProfile/>
                
            },
            {
                path: "add-package",
                element: <AddPackage/>
            },

            // admin routes
            {
                path: "manage-users",
                element: <ManageUsers/>,
                loader: ()=>fetch(`${import.meta.env.VITE_API_KEY}/user-count`)
            },


            //tourist routes
            {
                path: 'my-bookings',
                element: <MyBookings/>
            },
            {
                path: 'my-wishlist',
                element: <MyWishList/>
            },
           
            //tour guide route
            {
                path: 'assign-tour',
                element: <MyAssignTour/>
            }

        ]
      }
   ]); 

  