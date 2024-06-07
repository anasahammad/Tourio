import TouristStory from "./TouristStorySec/TouristStory";
import TravelGuideSec from "./TravelGuideSec/TravelGuideSec";


const Home = () => {
    return (
        <div className="container mx-auto">
           <h1>This is Home</h1>
           <TravelGuideSec/>
           <TouristStory/> 
        </div>
    );
};

export default Home;