import Banner from "../../components/Home/Banner/Banner";
import TourTypeSection from "../../components/Home/TourTypeSection/TourTypeSection";
import TouristStory from "./TouristStorySec/TouristStory";
import TravelGuideSec from "./TravelGuideSec/TravelGuideSec";


const Home = () => {
    return (

        
        <div >
           <Banner/>
           <div className="container mx-auto">
           <TravelGuideSec/>
           <TouristStory/> 
           <TourTypeSection/>
           </div>
           
        </div>
    );
};

export default Home;