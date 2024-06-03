
import { useLoaderData } from "react-router-dom";
import Gallery from "../../../../../components/OurPackage/Gallery";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import TourPlanDetails from "./TourPlanDetails";
import { FaPeopleGroup } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import GuideListModal from "../../../../../components/Modal/GuideListModal";
import BookingModal from "../../../../../components/Modal/BookingModal";




const PackageDetails = () => {
    const item = useLoaderData()
    const [isOpen, setIsOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    // console.log(item);

    const closeModal = ()=>{
        setIsOpen(false)
    }

    const closeBookingModal = ()=>{
        setOpenModal(false)
    }
    return (
        <div className="">
            <div className="bg-[#EFEEDB] py-6 px-4 text-center">
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl">Tour Details</h1>
                <p className="font-kaushan-script text-[#F26F73]">Let's Know About the tour</p>
            </div>

            <div>
                <Gallery item={item}/>
            </div>

            <div className="container mx-auto px-4">
                <div>
                <h1 className="text-2xl md:text-4xl text-black font-dm-sans font-bold">Tourio Travel - {item.title}</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 font-dm-sans">
              <div className="flex  gap-2 items-center mb-1 text-[#18877B] font-medium md:text-2xl">
                <CiLocationOn className="text-xl"/>
                <h3>{item.destination}</h3>
            </div>
            <div className="h-6 hidden md:block w-px bg-gray-500"></div>
          
            <div className="flex items-center gap-3 md:text-[18px]">
            <CiClock1 />
                <h6>{item.totalDays} days</h6>
            </div>
            <div className="flex items-center gap-3 md:text-[18px]">
            <IoPersonOutline />
                <h6>{item.groupSize} Person in group</h6>
            </div>
            
            
              </div>
              <div>
                <h1>From <span className="text-2xl md:text-4xl font-dm-sans font-bold">Tk {item.price}</span></h1>
              </div>
                </div>
            
            </div>

            <div className="divider container mx-auto"></div>

            <div className="flex justify-between container mx-auto">
                {/* for the tour plan details */}
                <div className="container mx-auto">
                    <TourPlanDetails item={item}/>
                </div>
                {/* For the booking  */}
                <div className="bg-[#EAEBEE] h-[400px] px-4 py-6 rounded-[10px] w-[500px]">
                    <div className="">
                    <div>
                <h1>From <span className="text-2xl md:text-3xl font-dm-sans font-bold">Tk {item.price}</span></h1>
                <p>Price varies by group size</p>
                <div className="divider"></div>
                    <div className="bg-white px-4 py-4 rounded-md mb-6">
                        <div onClick={()=>setIsOpen(true)} className="flex justify-between">
                       <div className="flex items-center gap-3">
                       <SlPeople />
                        Available Tour Guide
                       </div>
                        <div>
                            <FaChevronDown className="flex justify-end"/> 
                        </div>
                        </div>
                        <GuideListModal isOpen={isOpen} closeModal={closeModal}></GuideListModal>
                    </div>
                <div >
                    <button onClick={()=>setOpenModal(true)} className="btn bg-[#18877B] text-white  w-full">Book This Plan</button>
                </div>
                    <BookingModal openModal={openModal} closeBookingModal={closeBookingModal}></BookingModal>
                <div className="px-3 py-4">
                    <h2 className="font-dm-sand text-[17px] font-semibold">Free Cancellation</h2>
                    <p>Up to 24 hours in advance</p>
                </div>
              </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;