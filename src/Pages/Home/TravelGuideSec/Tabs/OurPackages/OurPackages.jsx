
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import PackageCard from "./PackageCard";

const OurPackages = () => {
  const axiosSecure = useAxiosSecure()

  const {data: packages = [], isLoading} = useQuery({
    queryKey: ['packages'],
    queryFn: async()=>{
        const {data} = await axiosSecure.get('/packages')
        return data;
    }
  })
  if(isLoading) return <p>Loading hocche</p>
  console.log(packages);
    return (
        <div className="px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {
                    packages.map(item=> <PackageCard item={item} key={item._id}/>)
                }
            </div>
            
        </div>
    );
};

export default OurPackages;