import { useQuery } from "@tanstack/react-query";
import StoryCard from "./StoryCard";
import useAxiosPub from "../../../hooks/useAxiosPub";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";


const TouristStory = () => {
    const axiosPublic = useAxiosPub()
    const {data: stories = []} = useQuery({
        queryKey: ['stories'],
        queryFn: async ()=>{
            const {data} = await axiosPublic.get('/stories')
            return data;
        }
    })
    console.log(stories);
    return (
        <div className="my-16">
            <div className="text-center">
                <h4 className="font-kaushan-script text-2xl text-[#F26F73]">Journey Chronicles</h4>
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl"> Tales from Our Travelers</h1>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    stories?.slice(0, 3).map(story=> <StoryCard  story={story} key={story._id}/>)
                }
            </div>
            {
                    stories.length > 3 && <div className="flex justify-center my-4">
                        <Link to={`/all-stories`}>
                        <button className="btn bg-[#18877B] text-white text-xl rounded-3xl">All Stories <FiArrowUpRight/></button>
                        </Link>
                    </div>
                }
        </div>
    );
};

export default TouristStory;