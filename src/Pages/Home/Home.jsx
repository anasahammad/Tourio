import Banner from "../../components/Home/Banner/Banner";
import TourTypeSection from "../../components/Home/TourTypeSection/TourTypeSection";
import TouristStory from "./TouristStorySec/TouristStory";
import TravelGuideSec from "./TravelGuideSec/TravelGuideSec";
import WorkWithSec from "./WorkwithSec/WorkWithSec";


const Home = () => {
    return (

        
        <div >
           <Banner/>
           <div className="container mx-auto">
           <TravelGuideSec/>
           <TourTypeSection/>
           <TouristStory/> 
           <WorkWithSec/>
           
           </div>
           
        </div>
    );
};

export default Home;