import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()


    if(loading) return <LoadingSpinner/>
    if(user) return children;
    return <Navigate to='/login' state={location.pathname} replace='true' />
};

export default PrivateRoutes;