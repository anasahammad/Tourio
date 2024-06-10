import { useState } from "react";
import PaymentModal from "../Modal/PaymentModal";

const MyBookingsForm = ({ booking, handleCancel, user }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = ()=>{
    setIsOpen(false)
  }
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {booking?.
packageName}
              </h2>
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {booking?.
guideName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {new Date(booking?.tourDate).toLocaleDateString()}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
       Tk- {booking?.price}
      </td>

      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap ">
        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800 ${booking?.status === 'Rejected' && 'bg-red-100/60'}`}>
          <span className={`h-1.5 w-1.5 rounded-full bg-emerald-500 ${booking?.status === 'Rejected' && 'bg-red-500'}`}></span>

          <h2 className={`text-sm font-normal text-emerald-500 ${booking?.status === 'Rejected' && 'text-red-500'} `}>{booking?.status}</h2>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <button 
            onClick={()=> handleCancel(booking?._id)}
           className={`px-3 py-1 text-xs text-red-400 rounded-full dark:bg-gray-800 bg-red-100/60 ${booking?.status !== 'In Review'  && 'hidden' }`}>
            Cancel
          </button>
          <button
          disabled={booking?.status !== 'Accepted'}
          onClick={()=>setIsOpen(true)}
           className={`px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60`}>
            Pay
          </button>
          <PaymentModal user={user} booking={booking} closeModal={closeModal} isOpen={isOpen}/>
        </div>
      </td>
    </tr>
  );
};

export default MyBookingsForm;
