import { useState } from "react";
import { TourTypes } from "../TourTypes/TourTypes";
import { FaPlus } from "react-icons/fa";

const AddPackageForm = ({ handleForm, handleFiles, imagePreview }) => {
const [days, setDays] = useState([{day: "", title: "", activity: ""}])


  const handleAddDay = () => {
    setDays([...days, { day: "", title: "", activity: "" }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newDays = [...days];
    newDays[index][name] = value;
    setDays(newDays);
  };

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={(e) => handleForm(e, days)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='destination' className='block text-gray-600'>
                Destination
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                name='destination'
                id='destination'
                type='text'
                placeholder='Destination'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='types' className='block text-gray-600'>
                Tour Types
              </label>
              <select
                required
                className='w-full px-4 py-3 border-[#017B6E] focus:outline-[#017B6E]  rounded-md'
                name='types'
              >
                {TourTypes.map((tourType) => (
                  <option value={tourType.label} key={tourType.label}>
                    {tourType.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="image-previews border border-[#017B6E]   p-2 space-y-4">
              <h1 className="text-center text-2xl mb-4 font-medium">All Images preview here</h1>
              <div className="grid grid-cols-2">
                {imagePreview?.map((url, index) => (
                  <img key={index} src={url} alt={`Preview ${index}`} width="150" />
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Trip Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                name='tripTtitle'
                id='tripTtitle'
                type='text'
                placeholder='Trip Title'
                required
              />
            </div>

            <div className='p-4 bg-white w-full m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      multiple={true}
                      onChange={handleFiles}
                      hidden
                    />
                    <div className='bg-rose-500 text-white border  rounded font-semibold cursor-pointer p-1 px-3 border-[#017B6E] focus:outline-[#017B6E] '>
                      Upload Multiple Images
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Group Size
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                  name='size'
                  id='size'
                  type='number'
                  placeholder='Total Group'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='days' className='block text-gray-600'>
                  Total Days
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                  name='days'
                  id='days'
                  type='number'
                  placeholder='Total Days'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='description' className='block text-gray-600'>
                  Short Description
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                  name='description'
                  id='description'
                  type='text'
                  placeholder='Short Description'
                  required
                />
              </div>
            </div>

            {days.map((day, index) => (
              <div key={index} className="mb-4 p-4 border rounded-md">
                <h2 className="text-lg font-medium">Day {index + 1}</h2>
                <div className="space-y-1 text-sm">
                  <label htmlFor={`day-${index}`} className='block text-gray-600'>
                    Day
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                    name='day'
                    id={`day-${index}`}
                    type='text'
                    placeholder='Day'
                    value={day.day}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor={`title-${index}`} className='block text-gray-600'>
                    Title
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E]  rounded-md '
                    name='title'
                    id={`title-${index}`}
                    type='text'
                    placeholder='Title'
                    value={day.title}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor={`activity-${index}`} className='block text-gray-600'>
                    Activity Details
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-[#017B6E] focus:outline-[#017B6E] rounded-md '
                    name='activity'
                    id={`activity-${index}`}
                    type='text'
                    placeholder='Activity Details'
                    value={day.activity}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddDay}
              className="w-full p-2 mt-2 text-center font-medium text-white flex justify-center items-center gap-2 transition duration-200 rounded shadow-md bg-[#F26F73]"
            >
             <FaPlus/> Add More Days
            </button>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#017B6E]'
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;
