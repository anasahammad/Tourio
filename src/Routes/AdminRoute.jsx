import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole()
    const {loading} = useAuth()

    if(isLoading) return <LoadingSpinner/>
    if(role === 'admin') return children
    return  <Navigate to="/dashboard"></Navigate>
    
};

export default AdminRoute;