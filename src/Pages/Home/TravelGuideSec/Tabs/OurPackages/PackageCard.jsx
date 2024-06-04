import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
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
      
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img 
          className="object-cover object-center w-full h-56 " 
          src={item?.packageImages[1]} 
          alt="avatar" 
        />
  
        <div  onClick={handleWishlist} className="flex cursor-pointer items-center px-6 py-3 bg-gray-900">
          <FaRegHeart className="text-white"/>
  
          <h1 className="mx-3 text-lg font-semibold text-white">{item.tourTypes}</h1>
        </div>
  
        <div className="px-6 py-4">
            <div className="flex gap-2 items-center mb-1 text-[#18877B] font-medium font-sans">
                <CiLocationOn className="text-xl"/>
                <h3>{item.destination}</h3>
            </div>
          <h1 className="text-xl hover:text-[#F37B63] font-sans font-bold  dark:text-white">{item.title}</h1>
         
  
         <div className="flex mt-6 mb-4 justify-between bg-gray-200 py-2 px-6 rounded-md">
            <div className="flex items-center gap-3 ">
            <CiClock1 />
                <h6>{item.totalDays} days</h6>
            </div>
            <div className="flex items-center gap-3">
            <IoPersonOutline />
                <h6>{item.groupSize} Person</h6>
            </div>
         </div>

         <div className="flex justify-between">
            <div>
                <h3 className="text-gray-400">From <span className="text-black font-bold">Tk {item.price}</span></h3>
            </div>
            <div>
                <Link to={`/package-details/${item._id}`} className="text-[#18877B]">View Details</Link>
            </div>
         </div>
        </div>
      </div>
     
    );
};

export default PackageCard;