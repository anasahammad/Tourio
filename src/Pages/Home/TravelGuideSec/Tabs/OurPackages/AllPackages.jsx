import toast from "react-hot-toast";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import PackageCard from "./PackageCard";


const AllPackages = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const navigate = useNavigate()

    
  const {data: packages = [], isLoading} = useQuery({
    queryKey: ['packages'],
    queryFn: async()=>{
        const {data} = await axiosSecure.get('/packages')
        return data;
    }
  })


 

    

    if(isLoading) return <LoadingSpinner/>
    return (
        
        <div>
            <div className="bg-[#EFEEDB] py-6 px-4 text-center">
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl">All Packages</h1>
                <p className="font-kaushan-script text-[#F26F73]">Let's Explore Our All Packages</p>
            </div>
            <div className="container mx-auto px-4 md:px-0 my-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {
                packages.map(item=> <PackageCard key={item._id} item={item} />)
            }
            </div>
            </div>
           
        </div>
    );
};

export default AllPackages;