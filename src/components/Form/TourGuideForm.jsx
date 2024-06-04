import { useState } from "react";
import ReactDatePicker from "react-datepicker";


const TourGuideForm = ({handleRequest, setStartDate, startDate}) => {
   
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Tour Guide Form</h2>

    <form onSubmit={handleRequest}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          

            
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="education">Education</label>
                <input name="education" id="education" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="hobby">Hobby</label>
                <input name="hobby" id="hobby" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="number">Contact Number</label>
                <input name="number" id="number" type="number"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="language">Language</label>
                <input name="language" id="language" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="birthday">Birth Day</label>
                <input name="birthday" id="birthday" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>

                
            </div>
            
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="about">About Me</label>
                <input name="about" id="about" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-between mt-6">
            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#017B6E] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Request</button>

            {/* <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</button> */}
        </div>
    </form>
</section>
    );
};

export default TourGuideForm;