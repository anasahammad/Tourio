
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router-dom";


const TourGuideDetails = () => {
    const user = useLoaderData()
    const navigate = useNavigate()
    console.log(user);
    return (
        <div className="container mx-auto">
                <div onClick={()=>navigate(-1)} className="flex items-center font-bold gap-2 my-6">
                <RiLayoutGrid2Fill />
                    <h1>Back to Guide List</h1>
                </div>

                <div className="border">

                </div>
        </div>
    );
};

export default TourGuideDetails;