import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='w-full  mt-6 text-gray-800 rounded-xl '>
            
          
      <form>
        <div className='grid grid-cols-1 gap-6'>
          

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
            Select Tour Guide
            </label>
            <select
              required
              className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
              name='category'
            >
              {/* {categories.map(category => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))} */}

              <option value="">Anas</option>
            </select>
          </div>

          <div className='space-y-1 w-full'>
            <label htmlFor='location' className='block '>
              Select Tour Date
            </label>
            <div className='w-full  '>
            <DatePicker className='w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

        
         
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
         Book Now
        </button>
      </form>
    </div>
    );
};

export default BookingForm;