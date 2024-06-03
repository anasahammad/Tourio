import { useQuery } from "@tanstack/react-query";
import UserDataRows from "../../../components/Table/UserDataRows";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} =useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    console.log(users);
    
    return (
        <div>
            <h1>This is manage users route</h1>

            <div>
                <UserDataRows
                    users={users}
                    refetch={refetch}
                
        
                />
            </div>
        </div>
    );
};

export default ManageUsers;