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
import StoryDetails from "../Pages/Home/TouristStorySec/StoryDetails";
import AllStories from "../Pages/Home/TouristStorySec/AllStories";
import AllPackages from "../Pages/Home/TravelGuideSec/Tabs/OurPackages/AllPackages";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import TouristRoute from "./TouristRoute";
import TourGuideRoute from "./TourGuideRoute";
import TourTypePage from "../components/Home/TourTypeSection/TourTypePage";
import ErrorPage from "../Pages/ErrorPage";
import BookingSummary from "../Pages/Dashboard/Admin/BookingSummary";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main/>,
    errorElement: <ErrorPage/>,
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
            path: "/tour-type/:type",
            element: <TourTypePage/>,
            // loader: ({params})=> fetch(`${import.meta.env.VITE_API_KEY}/tour-type/${params.type}`)
        },
         {
            path: "/story-details/:id",
            element: <StoryDetails/>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_KEY}/story/${params.id}`)
        },
         {
            path: "/all-stories",
            element: <AllStories/>,
          
        },
         {
            path: "/all-package",
            element: <AllPackages/>,
          
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
                element: <PrivateRoutes><MyProfile/></PrivateRoutes>
                
            },
            {
                path: "add-package",
                element: <PrivateRoutes>
                    <AdminRoute><AddPackage/></AdminRoute>
                </PrivateRoutes>
            },

            // admin routes
            {
                path: "manage-users",
                element: <PrivateRoutes>
                    <ManageUsers/>
                </PrivateRoutes>,
                loader: ()=>fetch(`${import.meta.env.VITE_API_KEY}/user-count`)
            },
            {
                path: "booking-summary",
                element: <PrivateRoutes>
                    <BookingSummary/>
                </PrivateRoutes>,
                // loader: ()=>fetch(`${import.meta.env.VITE_API_KEY}/user-count`)
            },


            //tourist routes
            {
                path: 'my-bookings',
                element: <PrivateRoutes>
                    <TouristRoute><MyBookings/></TouristRoute>
                </PrivateRoutes>,
               
            },
            {
                path: 'my-wishlist',
                element: <PrivateRoutes>
                    <TouristRoute><MyWishList/></TouristRoute>
                </PrivateRoutes>
            },
           
            //tour guide route
            {
                path: 'assign-tour',
                element: <PrivateRoutes>
                    <TourGuideRoute><MyAssignTour/></TourGuideRoute>
                </PrivateRoutes>
            }

        ]
      }
   ]); 

  