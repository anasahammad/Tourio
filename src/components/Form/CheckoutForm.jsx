import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const CheckoutForm = ({closeModal, booking, user}) => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    

        const price = booking?.price;

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price})
        .then(res=>{
            console.log(res.data);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, price])

    console.log(clientSecret);


    const handleSubmit = async (event)=>{
        event.preventDefault()

        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log(error.message);
            toast.error(error.message)
        }
        else{
            console.log("payment method", paymentMethod);
        }

        if (!clientSecret) {
            toast.error("Client secret not set");
            return;  
          }

          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : card,
                billing_details : {
                    email : user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        console.log(paymentIntent);

        if(confirmError){
            console.log('confirmError', confirmError);
            toast.error(confirmError)
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log(paymentIntent.id);
                toast.success("Payment Successful")
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         <div className='flex mt-2 justify-around'>
                  <button
                    type='submit'
                    disabled={!stripe}
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                  >
                    Pay
                  </button>
                  <button
                  onClick={closeModal}
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                  >
                    No
                  </button>
                </div>
      </form>
        
    );
};

export default CheckoutForm;