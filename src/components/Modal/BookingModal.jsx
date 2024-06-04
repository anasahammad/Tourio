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


const BookingModal = ({openModal, closeBookingModal, item}) => {

  const {user} = useAuth()
  const axiosPublic = useAxiosPub()
  const axiosSecure = useAxiosSecure()
  const [startDate, setStartDate] = useState(new Date());

  //fetching all tour guides
  const {data: guides = [], isLoading} = useQuery({
    queryKey: ['guides'],
    queryFn: async ()=>{
      const {data} = await axiosPublic.get('/tour-guides')
      return data;
    }
    
  })

//post the booking information on db
const {mutateAsync} = useMutation({
  mutationFn: async (bookingInfo)=>{
    const {data} = await axiosSecure.put('/booking', bookingInfo)
    return data;
  },
  onSuccess: ()=>{
    console.log("Booking added");
    toast.success("Booking is being confirm! Please Contact with the guide")
  }, 
   
})


  const handleBooking = async (e)=>{
      e.preventDefault()
      const form = e.target;
      const guideName = form.guideName.value;
      const tourDate = startDate

      const bookingInfo = {
        touristName : user?.displayName,
        touristEmail: user?.email,
        touristPhoto: user?.photoURL,
        price : item?.price,
        tourDate,
        guideName,
        bookingId: item?._id

      }
      console.log(guideName, tourDate);

      try{
        await mutateAsync(bookingInfo)
        closeBookingModal()
       
      } catch (error){
        
        toast.error(error.message)

      }
  }
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