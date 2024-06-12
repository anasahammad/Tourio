import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MyAssignForm from "../../../components/Form/MyAssignForm";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const MyAssignTour = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [touristCount, setTouristCount] = useState(0);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);


  const { data: assignTours = [], refetch } = useQuery({
    queryKey: ["assignTours"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/assign-tours/${user?.email}?page=${currentPage}&size=${itemsPerPage}`);
      return res.data;
    },
  });


  
  const handleStatus = async (bookingId, newStatus)=>{
        try{
            const res = await axiosSecure.patch(`/update-status/${bookingId}`,  {status: newStatus})
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                toast.success(`Status Updated to ${newStatus}`)
                refetch()
            }

        }
        catch (err){
            toast.error(err.message)
        }
  } 

  //pagination
  useEffect(() => {
    const fetchBookingCount = async () => {
      try {
        const response = await axiosSecure.get(
          `/tour-count/${user?.email}`
        );
        const { count } = response.data;
        setTouristCount(count);
      } catch (error) {
        console.error("Error fetching booking count:", error);
      }
    };

    fetchBookingCount();
  }, [user?.email, axiosSecure]);

  const numbersOfPage = Math.ceil(touristCount / itemsPerPage);
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

;
  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            My Assign Tours
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {assignTours?.length}
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className=" bg-[#05073c] text-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Package Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        {" "}
                        Tourist Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400 mr-4 "
                      >
                        Tour Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        Tour Price
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {assignTours?.map((tours) => (
                      <MyAssignForm key={tours.bookingId} tours={tours} handleStatus={handleStatus} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        
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
      </section>
    </div>
  );
};

export default MyAssignTour;
