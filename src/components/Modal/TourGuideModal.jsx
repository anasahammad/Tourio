import {  Dialog, DialogPanel,  Transition, TransitionChild } from "@headlessui/react";
import TourGuideForm from "../Form/TourGuideForm";


const TourGuideModal = ({isOpen, closeModal, handleRequest}) => {
    return (
        <div>
             <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
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
                <DialogPanel className="w-full max-w-md rounded-xl transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-al   text-black">
                  
                  <TourGuideForm   closeModal={closeModal} handleRequest={handleRequest}/>
                  
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
    );
};

export default TourGuideModal;