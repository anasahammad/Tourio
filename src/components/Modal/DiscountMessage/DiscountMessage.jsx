import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti';

const DiscountMessage = ({ user }) => {
  const axiosSecure = useAxiosSecure();
  const { width, height } = useWindowSize();
  const [showMessage, setShowMessage] = useState(false);

  const { data: bookingsData, refetch, isLoading } = useQuery({
    queryKey: ["bookingsCount", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking-count/${user?.email}`);
      return data;
    },
    enabled: !!user?.email, 
  });

  const bookingsCount = bookingsData.count;
  console.log(bookingsCount);

  useEffect(() => {
    if (bookingsCount > 1) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  }, [bookingsCount]);

  useEffect(() => {
    if (user?.email) {
      refetch();
    }
  }, [user, refetch]);

  return (
    <div className="relative">
      {showMessage && <Confetti width={width} height={height} />}
      {bookingsCount > 1 && (
        <div className="p-4 bg-green-100 border border-green-400 rounded-md text-center mt-4">
          <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
          <p className="mb-4">You've booked more than 3 times! You get a discount.</p>
          <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Apply Discount
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountMessage;
