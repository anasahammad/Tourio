import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import noDataAnimation from "../../../../public/No-data-animation.json"

const MyWishList = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: wishlist = [], refetch, isLoading  } = useQuery({
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
    
if(loading || isLoading) return <p>Loading hocche</p>

    return (
<div>

    {
        wishlist?.length > 0 ? (<div className="overflow-x-auto">
        <table className="min-w-full bg-white border  border-gray-200">
          <thead className="bg-[#017b6e] text-white ">
            <tr className="text-sm g">
              <th className="px-4 py-4 border-b ">Package Photo</th>
              <th className="px-4 py-4 border-b">Package Name</th>
              <th className="px-4 py-4 border-b">Package Destination</th>
              <th className="px-4 py-4 border-b">Package Price</th>
              <th className="px-4 py-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map(item => (
              <tr key={item?._id}>
                <td className="px-4 py-2 border-b">
                  <img src={item?.photo} alt={item?.name} className="w-18 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-2 border-b">{item?.title}</td>
                <td className="px-4 py-2 border-b">{item?.destination}</td>
                <td className="px-4 py-2 border-b">Tk -{item?.price}</td>
                <td className="px-4 py-2 border-b ">
                  <div className="flex">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="px-3 py-1 text-xs text-red-400 rounded-full dark:bg-gray-800 bg-red-100/60 mr-2"
                  >
                    Delete
                  </button>
                  <Link to={`/package-details/${item?.wishlistId}`}>
                  <button
                    
                    className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60"
                  >
                     Details
                  </button>
                  </Link>
                  
                  </div>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>) : <>
      {isLoading &&  <div className="w-80 mx-auto flex flex-col justify-center items-center 3">
        <Lottie className=" " loop={true} animationData={noDataAnimation} />
       
        <Link to="/">
           <button className="px-8 btn bg-[#017b6e] mb-4 text-white py-3 font-semibold rounded  ">Back to Home Page</button>
        </Link>
   </div> }
      </> 
    }

</div>
    );
};

export default MyWishList;