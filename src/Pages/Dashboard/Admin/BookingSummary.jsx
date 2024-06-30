import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BookingDataRow from "../../../components/Table/BookingDataRow";

const BookingSummary = () => {
  const axiosSecure = useAxiosSecure();
  const { data: summary, refetch } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  console.log(summary);
  return (
    <div>

<div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Bookings</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{summary?.length} users</span>
    </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-[#05073c] e">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Booking Id</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <span>Tourist Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <span>Guide Name</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <span>Package Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      <span>Status</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      Booking Date
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {
                            summary?.map(booking=>  <BookingDataRow
                                booking={booking}
                                refetch={refetch}
                                key={booking._id}
                            />)
                        }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
