import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import { Fragment } from "react";
import CheckoutForm from "../Form/CheckoutForm";

const stripePromise = loadStripe('pk_test_51PQ7D1BRNhZy5M0OZ1HUzF5NK5j0JAzaDNEpBlC4gkw4bx4gBFvL4mTs4B1lAFQc7xlLxc29AWoSQiv0b2uzUaFX00Hqg8FEfV');

const PaymentModal = ({isOpen, closeModal, booking, user}) => {
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
                     Payment The Tour Guide
                  </DialogTitle>
                 
                  <hr className='mt-8 ' />
                 
                  <Elements stripe={stripePromise}>
                     <CheckoutForm user={user} booking={booking} closeModal={closeModal}/>
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