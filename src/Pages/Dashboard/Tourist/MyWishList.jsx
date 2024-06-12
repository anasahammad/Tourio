import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import noDataAnimation from "../../../../public/No-data-animation.json";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

const MyWishList = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [wishlistCount, setWishlistCount] = useState(0);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: wishlist = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["wishlist", currentPage, itemsPerPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/wishlist/${user?.email}?page=${currentPage}&size=${itemsPerPage}`);
      return data;
    },
  });

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/wish/${id}`);

      if (res.status === 200) {
        // console.log("data has been deleted");
        toast.success("The Package is successfully deleted from the wishlist");
        refetch();
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Something went wrong! Please try again");
    }
  };

  //pagination
  useEffect(() => {
    const fetchBookingCount = async () => {
      try {
        const response = await axiosSecure.get(
          `/wishlist-count/${user?.email}`
        );
        const { count } = response.data;
        setWishlistCount(count);
      } catch (error) {
        console.error("Error fetching booking count:", error);
      }
    };

    fetchBookingCount();
  }, [user?.email, axiosSecure]);

  const numbersOfPage = Math.ceil(wishlistCount / itemsPerPage);
  const pages = [...Array(numbersOfPage).keys()];

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < numbersOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  if ( isLoading) return <LoadingSpinner/>

  return (
    <div>
      {wishlist?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border  border-gray-200">
            <thead className="bg-[#05073c] text-white ">
              <tr className="text-sm g">
                <th className="px-4 py-4 border-b ">Package Photo</th>
                <th className="px-4 py-4 border-b">Package Name</th>
                <th className="px-4 py-4 border-b">Package Destination</th>
                <th className="px-4 py-4 border-b">Package Price</th>
                <th className="px-4 py-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item?._id}>
                  <td className="px-4 py-2 border-b">
                    <img
                      src={item?.photo}
                      alt={item?.name}
                      className="w-18 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border-b">{item?.title}</td>
                  <td className="px-4 py-2 border-b">{item?.destination}</td>
                  <td className="px-4 py-2 border-b">Tk -{item?.price}</td>
                  <td className="px-4 py-2 border-b ">
                    <div className="flex">
                      <button
                        onClick={() => handleDelete(item?._id)}
                        className="px-3 py-1 text-xs text-red-400 rounded-full dark:bg-gray-800 bg-red-100/60 mr-2"
                      >
                        Delete
                      </button>
                      <Link to={`/package-details/${item?.wishlistId}`}>
                        <button className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">
                          Details
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Page{" "}
              <span className="font-medium text-gray-700 dark:text-gray-100">
                {currentPage} of {pages.length}
              </span>
            </div>

            <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
              <button
                disabled={currentPage === 1}
                onClick={handlePrev}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>previous</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <span>Next</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:-scale-x-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {!isLoading && (
            <div className="w-80 mx-auto flex flex-col justify-center items-center 3">
              <Lottie
                className=" "
                loop={true}
                animationData={noDataAnimation}
              />

              <Link to="/">
                <button className="px-8 btn bg-[#05073c] mb-4 text-white py-3 font-semibold rounded  ">
                  Back to Home Page
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyWishList;
