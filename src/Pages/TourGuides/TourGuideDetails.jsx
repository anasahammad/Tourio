import { useLoaderData } from "react-router-dom";


const TourGuideDetails = () => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            <h1>{user?.name}</h1>
        </div>
    );
};

export default TourGuideDetails;