import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { BsHeart, BsPersonFill } from "react-icons/bs";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import { FaClock, FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import toast from "react-hot-toast";


const PackageCard = ({item}) => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const navigate = useNavigate()
    const {mutateAsync} = useMutation({
        mutationFn: async (wishlistItem)=>{
            const {data} = await axiosSecure.post('/wishlists', wishlistItem)
            return data;
        },
        onSuccess : ()=> {
            console.log("Added to the wish list");
            toast.success("Package Added to the Wishlist")
        },
        onError : (error)=>{
            toast.error(error.response?.data?.message || "An error occurred")
        }
    })
   
    const handleWishlist = async ()=>{
       
        const wishList = {
            title: item.title,
            photo: item.packageImages[1],
            destination: item.destination,
            price : item.price,
            shortDescription: item.shortDescription,
            wishlistId : item._id,
            touristEmail : user?.email
        }
        
        try {
            await mutateAsync(wishList)
            navigate('/dashboard/my-wishlist')
        } catch (error) {
            //
            console.log(error.message);
        }
    }
    
    
    return (
      
    //     <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg ">
    //     <img 
    //       className="object-cover object-center w-full h-56 " 
    //       src={item?.packageImages[1]} 
    //       alt="avatar" 
    //     />
  
    //     <div   className="flex cursor-pointer items-center px-6 py-3 bg-gray-900">
    //       <FaRegHeart onClick={handleWishlist} className="text-white"/>
  
    //       <h1 className="mx-3 text-lg font-semibold text-white">{item.tourTypes}</h1>
    //     </div>
  
    //     <div className="px-6 py-4">
    //         <div className="flex gap-2 items-center mb-1 text-[#ed6c33] font-medium font-sans">
    //             <CiLocationOn className="text-xl"/>
    //             <h3>{item.destination}</h3>
    //         </div>
    //       <h1 className="text-xl hover:text-[#F37B63] font-sans font-bold  dark:text-white">{item.title}</h1>
         
  
    //      <div className="flex mt-6 mb-4 justify-between bg-gray-200 py-2 px-6 rounded-md">
    //         <div className="flex items-center gap-3 ">
    //         <CiClock1 />
    //             <h6>{item.totalDays} days</h6>
    //         </div>
    //         <div className="flex items-center gap-3">
    //         <IoPersonOutline />
    //             <h6>{item.groupSize} Person</h6>
    //         </div>
    //      </div>

    //      <div className="flex justify-between">
    //         <div>
    //             <h3 className="text-gray-400">From <span className="text-black font-bold">Tk {item.price}</span></h3>
    //         </div>
    //         <div>
    //             <Link to={`/package-details/${item._id}`} className="text-[#ed6c33]">View Details</Link>
    //         </div>
    //      </div>
    //     </div>
    //   </div>






    <div className=" p-6 rounded-[20px] border shadow-lg ">
        <div className="relative">

	<img src={item?.packageImages[0]} alt="" className="object-cover object-center w-full rounded-md h-72 " />

    <div onClick={handleWishlist} className=" absolute cursor-pointer right-3 -bottom-4  p-3  bg-white rounded-full ">
        <BsHeart  className="" />
    </div>
        </div>
   
	<div className="mt-6 mb-2 h-[80px]">
		<span className="block text-xs text-[#ED6C33] font-medium tracking-widest uppercase ">{item?.tourTypes}</span>
		<h2 className="text-[19px]  font-semibold tracking-wide">{item?.title}</h2>
	</div>
    <hr className="my-3" />

    <div className="space-y-4">
        <div className="flex justify-between">
        <div className="flex items-center gap-1 ">
          <CiClock1 />
                 <h6 className="font-dm-sans">{item.totalDays} days</h6>
             </div>

             <div>
                <h3 className="text-gray-400 font-dm-sans">From <span className="text-black ">Tk {item.price}</span></h3>
             </div>
             
        </div>
        <hr  />
        <Link to={`/package-details/${item._id}`} className="flex justify-center mt-4">
    <button className="px-6 py-2 font-medium rounded-md tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ed6c33]">
   View Details
</button>
        </Link>
    </div>

    
	
</div>
    );
};

export default PackageCard;