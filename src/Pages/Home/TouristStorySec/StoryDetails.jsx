import { useLoaderData } from "react-router-dom";
import StoryDetailsInformation from "../../../components/Home/StoryDetailsInformation";


const StoryDetails = () => {
    const story = useLoaderData()
    console.log(story);
    return (
        <div>
           <div className="bg-[#EFEEDB] py-6 px-4 text-center">
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl">Story Details</h1>
                <p className="font-kaushan-script text-[#F26F73]">Let's Know travelers experience</p>
            </div>


            <div className="container mx-auto my-10">
                <div>
                    <StoryDetailsInformation story={story}/>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;