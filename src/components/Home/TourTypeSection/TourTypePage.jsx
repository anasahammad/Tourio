import { useQuery } from "@tanstack/react-query";
import useAxiosPub from "../../../hooks/useAxiosPub";
import { Link, useParams } from "react-router-dom";
import CardImageCarosel from "../ImageCarosel/CardImageCarosel";


const TourTypePage = () => {
    const axiosPublic = useAxiosPub()
    const {type} = useParams()

    const {data: tourTypes = []} = useQuery({
        queryKey: ['tourTypes', type],
        queryFn: async ()=>{
            const res = await axiosPublic(`/tour-type/${type}`)
            return res.data;
        }
    })
    console.log(tourTypes);
    return (
        <div>
          <div className="bg-[#FDF0EA] py-6 px-4 text-center">
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl">{type}</h1>
                <p className="font-kaushan-script text-[#F26F73]">Let's Explore More</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-6">
                {
                    tourTypes?.map(pkg=>  <div key={pkg._id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                        {/* <img src={pkg?.packageImages[0]} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" /> */}
                        <CardImageCarosel pkg={pkg}/>
                        <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase ">{pkg.destination}</span>
                            <h2 className="text-xl font-semibold tracking-wide">{pkg.title}</h2>
                        </div>
                        <p className="font-medium mb-2">TK {pkg.price}.</p>

                        <Link to={`/package-details/${pkg._id}`}>
                        <button className="btn bg-[#ed6c33] text-white  rounded-lg">View Details</button>
                        </Link>
                    </div> )
                }

                
            </div>
            {
                    tourTypes.length === 0 && <div className="text-center py-10"><h1 className="font-dm-sans text-3xl font-bold">
                        No Packages Added For this Type
                        </h1></div>
                }
        </div>
    );
};

export default TourTypePage;