import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const MyWishList = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: wishlist = [], refetch  } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async ()=>{
            const {data} = await axiosSecure.get(`/wishlist/${user?.email}`)
            return data;
        }
    })
 

    const handleDelete = async (id) => {
        try{
            const res = await axiosSecure.delete(`/wish/${id}`);
           
           if(res.status === 200){
            // console.log("data has been deleted");
            toast.success("The Package is successfully deleted from the wishlist")
            refetch()
           }
        }
        catch (err) {
            console.log(err.message);
            toast.error("Something went wrong! Please try again")
        }
    }
    
    return (

        <div className="my-6">

            <div className="flex flex-col gap-6">
            {
                wishlist.map(item=> <div key={item.wishlistId} className="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
               <img src={item.photo} className="w-[300px]" alt="" />
            
                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{item.title || "Tour Plan Title"}</h1>
            
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.shortDescription}</p>
            
                    <div className="flex mt-2 item-center">
                        <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
            
                        <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
            
                        <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
            
                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
            
                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                    </div>
            
                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Tk {item?.price}</h1>

                       <Link to={`/package-details/${item.wishlistId}`}>
                       <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Visit Details</button>
                       </Link>
                        <button 
                        onClick={()=> handleDelete(item?._id)}
                        className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Delete</button>
                    </div>
                </div>
            </div>)
            }
        
            </div>
           

</div>
    );
};

export default MyWishList;