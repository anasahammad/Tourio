

const MyAssignForm = ({tours, handleStatus}) => {
    return (
        <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {tours?.
packageName}
              </h2>
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {tours?.
touristName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {new Date(tours?.tourDate).toLocaleDateString()}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
       Tk- {tours?.price}
      </td>

      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
      <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800 ${tours?.status === 'Rejected' && 'bg-red-100/60'}`}>
          <span className={`h-1.5 w-1.5 rounded-full bg-emerald-500 ${tours?.status === 'Rejected' && 'bg-red-500'}`}></span>

          <h2 className={`text-sm font-normal text-emerald-500 ${tours?.status === 'Rejected' && 'text-red-500'} `}>{tours?.status}</h2>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <button 
            onClick={()=>handleStatus(tours?.bookingId, 'Rejected')}
          className={`px-3 py-1 text-xs text-red-400 rounded-full dark:bg-gray-800 bg-red-100/60  `}>
            Reject
          </button>
          <button onClick={()=>handleStatus(tours?.bookingId
, 'Accepted')} className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">
            Accept
          </button>
        </div>
      </td>
    </tr>
    );
};

export default MyAssignForm;