
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import PackageCard from "./PackageCard";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../../../components/LoadingSpinner";


const OurPackages = () => {
  const axiosSecure = useAxiosSecure()

  const {data: packages = [], isLoading} = useQuery({
    queryKey: ['packages'],
    queryFn: async()=>{
        const {data} = await axiosSecure.get('/packages')
        return data;
    }
  })

  if(isLoading) return <LoadingSpinner/>
  
    return (
        <div className="px-6">
           
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {
                    packages.slice(0, 3).map(item=> <PackageCard item={item} key={item._id}/>)
                }
            </div>
                {
                    packages.length > 3 && <div className="flex justify-center my-4">
                        <Link to={`/all-package`}>
                        <button className="btn bg-[#18877B] text-white text-xl rounded-3xl">All Packages <FiArrowUpRight/></button>
                        </Link>
                    </div>
                }
              
        </div>
    );
};

export default OurPackages;