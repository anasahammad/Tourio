import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hooks/useRole";


const TourGuideRoute = ({children}) => {
    const [role, isLoading] = useRole()

    if(isLoading) return <LoadingSpinner/>
    if(role === 'guide') return children
    return  <Navigate to="/dashboard"></Navigate>
};

export default TourGuideRoute;