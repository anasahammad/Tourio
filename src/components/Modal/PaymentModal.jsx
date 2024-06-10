import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Fragment } from "react";
import CheckoutForm from "../Form/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_CLIENT_SECRET);

const PaymentModal = ({isOpen, closeModal, booking}) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
  
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium text-center leading-6 text-gray-900'
                  >
                    Review Info Before Payment
                  </DialogTitle>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Package: {booking?.
packageName}
                    </p>
                  </div>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Guide Name: {booking?.
guideName}
                    </p>
                  </div>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Guide email: {booking?.guideEmail}
                    </p>
                  </div>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Date: {new Date(booking?.
tourDate).toLocaleString()}
                    </p>
                  </div>
  
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Price: Tk {booking?.price}
                    </p>
                  </div>
                  <hr className='mt-8 ' />
                 
                  <Elements stripe={stripePromise}>
                     <CheckoutForm booking={booking} closeModal={closeModal}/>
                  </Elements>
  
               
                
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
};

export default PaymentModal;