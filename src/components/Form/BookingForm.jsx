
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({guides, startDate, setStartDate,handleBooking }) => {
  
    
    return (
        <div className='w-full  mt-6 text-gray-800 rounded-xl '>
            
          
      <form onSubmit={handleBooking}>
        <div className='grid grid-cols-1 gap-6'>
          

          <div className='space-y-1 text-sm'>
            <label htmlFor='guideName' className='block text-gray-600'>
            Select Tour Guide
            </label>
            <select
              required
              className='w-full px-4 py-3 border border-[#18877B] focus:outline-[#18877B] rounded-md'
              name='guideName'
            >
              {guides?.map(guide => (
                <option value={guide.name} key={guide.name} data-email={guide.email}>
                  {guide.name}
                </option>
              ))}

             
            </select>
          </div>

          <div className='space-y-1 w-full'>
            <label htmlFor='location' className='block '>
              Select Tour Date
            </label>
            <div className='  '>
            <DatePicker className='w-full  border py-3 rounded-lg' selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

        
         
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#18877B]'
        >
         Book Now
        </button>
      </form>
    </div>
    );
};

export default BookingForm;