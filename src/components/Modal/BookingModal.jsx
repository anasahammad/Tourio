import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import BookingForm from "../Form/BookingForm";
import { FaCross } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


const BookingModal = ({openModal, closeBookingModal}) => {
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
                    Tourist Information
                  </DialogTitle>

                  <div className="absolute top-5 right-5">
                  <MdCancel  onClick={closeBookingModal} className="text-2xl cursor-pointer text-red-500" />
                  </div>
                  <div>
                    <h1>Name: Anas</h1>
                    <p>Email: anas ahammad sarker</p>
                    <p>Price: Tk 1000</p>
                  </div>
                  <BookingForm></BookingForm>
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