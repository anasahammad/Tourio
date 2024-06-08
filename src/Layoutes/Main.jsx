import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import ScrollTop from "../components/Shared/ScrollTop";


const Main = () => {
    
    return (
        <div>
            <ScrollTop/>
         <div >
         <Navbar/>
           <div style={{paddingTop: '60px'}}>
           <Outlet/>
           </div>
           <Footer/>
         </div>
        </div>
    );
};

export default Main;