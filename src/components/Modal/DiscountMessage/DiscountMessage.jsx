import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DiscountMessage = ({ user }) => {
  const axiosSecure = useAxiosSecure();
  const { width, height } = useWindowSize();
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate()

  const { data: bookingsData,  isLoading } = useQuery({
    queryKey: ["bookingsCount", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking-count/${user?.email}`);
      return data;
    },
    enabled: !!user?.email, 
  });

  const bookingsCount = bookingsData?.count;
  console.log(bookingsCount);

  useEffect(() => {
    if (bookingsCount > 3) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  }, [bookingsCount]);

  

  return (
    <div className="relative">
      {showMessage && <Confetti width={width} height={height} />}
      {bookingsCount > 3 && (
        <div className="p-4 bg-green-100 border border-[#ed6c33] rounded-md text-center mt-4">
          <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
          <p className="mb-4">You have booked more than 3 times! You get a discount.</p>
          <button onClick={()=>{
            toast.success("Congratulations The discount applied successful!")
            navigate("/dashboard/my-bookings")
            return
          }} className="btn bg-[#ed6c33] text-white px-4 py-2 rounded-md ">
            Apply Discount
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountMessage;
