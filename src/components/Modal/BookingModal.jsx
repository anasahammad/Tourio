import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import BookingForm from "../Form/BookingForm";
import { FaCross } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPub from "../../hooks/useAxiosPub";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import DiscountMessage from "./DiscountMessage/DiscountMessage";



const BookingModal = ({openModal, closeBookingModal, item}) => {

  const {user} = useAuth()
  const axiosPublic = useAxiosPub()
  const axiosSecure = useAxiosSecure()
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate()

  //fetching all tour guides
  const {data: guides = [], isLoading} = useQuery({
    queryKey: ['guides'],
    queryFn: async ()=>{
      const {data} = await axiosPublic.get('/tour-guides')
      return data;
    }
    
  })

  const { data: bookingsData, refetch, isLoading } = useQuery({
    queryKey: ["bookingsCount", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking-count/${user?.email}`);
      return data;
    },
    enabled: !!user?.email, 
  });

//post the booking information on db
const {mutateAsync} = useMutation({
  mutationFn: async (bookingInfo)=>{
    const {data} = await axiosSecure.post('/booking', bookingInfo)
    return data;
  },
  onSuccess: (data)=>{
    console.log("Booking added");
    toast.success("Booking is being confirm! Please Contact with the guide")
  
  }, 
   onError : (error)=>{
    toast.error(error.response?.data?.message || "An error occurred")
   }
})


  const handleBooking = async (e)=>{
      e.preventDefault()
      if(!user){
        toast.error("You have to login first")
        navigate('/login')
        return
      }
      const form = e.target;
      const guideName = form.guideName.value;
      const selectedOption = guides?.find(guide=> guide.name === guideName)
      const guideEmail = selectedOption.email;
      const tourDate = startDate
     

      const bookingInfo = {
        touristName : user?.displayName,
        touristEmail: user?.email,
        touristPhoto: user?.photoURL,
        price : item?.price,
        tourDate,
        guideName,
        guideEmail,
        packageName: item?.title,
        bookingId: item?._id,
        status: 'In Review',
        

      }
      console.log(guideName, tourDate);

      try{
        await mutateAsync(bookingInfo)
        closeBookingModal()
        // navigate('/dashboard/my-bookings')
       
      } catch (error){
        console.log(error.message);
        // toast.error(error.message)
      }
  }

  if(isLoading) return <LoadingSpinner/>
    return (
        <div>
              <Transition appear show={openModal}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeBookingModal}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl  p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-center">
                    Booking Information
                  </DialogTitle>

                  <div className="absolute top-5 right-5">
                  <MdCancel  onClick={closeBookingModal} className="text-2xl cursor-pointer text-red-500" />
                  </div>
                  <div>
                    <h1 className="font-bold">{item?.title}</h1>
                    <h1>Name: {user?.displayName}</h1>
                    <p>Email: {user?.email}</p>
                    <p>Price: Tk {item?.price}</p>

                  </div>
                  <BookingForm
                  setStartDate={setStartDate}
                  startDate={startDate}
                  guides={guides}
                  handleBooking={handleBooking}
                  ></BookingForm>
                  <div className="mt-4">
                      <DiscountMessage user={user}/>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
    );
};

export default BookingModal;