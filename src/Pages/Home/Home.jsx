import Banner from "../../components/Home/Banner/Banner";
import TourTypeSection from "../../components/Home/TourTypeSection/TourTypeSection";
import TouristStory from "./TouristStorySec/TouristStory";
import TravelGuideSec from "./TravelGuideSec/TravelGuideSec";
import WhyChoseUs from "./WhyChoseUs";
import WorkWithSec from "./WorkwithSec/WorkWithSec";


const Home = () => {
    return (

        
        <div >
           <Banner/>
           <div className="">
            <WhyChoseUs/>
           <TravelGuideSec/>
           <TourTypeSection/>
           <TouristStory/> 
           <WorkWithSec/>
           
           </div>
           
        </div>
    );
};

export default Home;