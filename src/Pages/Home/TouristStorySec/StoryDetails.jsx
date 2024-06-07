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


            <div className="container flex flex-col md:flex-row justify-between px-4 md:px-0  mx-auto my-10">
                <div>
                    <StoryDetailsInformation story={story}/>
                </div>
                <div>
                <div className="flex  md:h-[450px] mx-auto md:w-full mb-8 sm:px-4  ">
				<div className="flex flex-grow justify-center flex-col p-6 space-y-4  rounded shadow sm:p-8 bg-[#18877b]">
					<div className="space-y-6  py-10 ">
						<h4 className="text-2xl text-[#f37b63]  font-medium ">20% Off</h4>
						<span className="text-4xl text-white font-bold font-dm-sans ">The Best Travel Adventure
							
						</span>
					</div>
					
                    <div className="flex justify-center">
                        <button className="btn rounded-3xl bg-[#f37b63] hover:bg-white hover:text-[#f37b63]">Booking Now</button>
                    </div>
				</div>
			</div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;