

const BookingDataRow = ({booking}) => {
    return (
        <tr>
    
     
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      {booking?.bookingId}
      </td>
      <td className="px-4  py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {booking?.touristName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {booking?.guideName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {booking?.packageName}
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

          <h2 className="text-sm font-normal text-emerald-500">
            {booking?.status}
          </h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
      {new Date(booking?.tourDate).toLocaleDateString()}
      </td>
     
    </tr>
    );
};

export default BookingDataRow;