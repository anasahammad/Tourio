import { useState } from "react";
import { TourTypes } from "../TourTypes/TourTypes";
import { FaPlus } from "react-icons/fa";

const AddPackageForm = ({ handleForm, handleFiles, imagePreview }) => {
  const [days, setDays] = useState([{ day: "", title: "", activity: "" }]);

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
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white shadow-md p-6">
      <form onSubmit={(e) => handleForm(e, days)} className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="destination" className="block text-gray-600 font-medium">
                Destination
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                name="destination"
                id="destination"
                type="text"
                placeholder="Destination"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="types" className="block text-gray-600 font-medium">
                Tour Types
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                name="types"
              >
                {TourTypes?.map((tourType) => (
                  <option value={tourType.label} key={tourType.label}>
                    {tourType.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="border border-gray-300 p-4 rounded-md">
              <h1 className="text-center text-xl mb-4 font-medium">All Images Preview</h1>
              <div className="grid grid-cols-2 gap-2">
                {imagePreview?.map((url, index) => (
                  <img key={index} src={url} alt={`Preview ${index}`} className="w-full h-32 object-cover rounded-md" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="tripTitle" className="block text-gray-600 font-medium">
                Trip Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                name="tripTitle"
                id="tripTitle"
                type="text"
                placeholder="Trip Title"
                required
              />
            </div>

            <div className="p-4 bg-white border border-gray-300 rounded-lg">
              <label className="block text-gray-600 font-medium mb-2">Upload Multiple Images</label>
              <input
                className="hidden"
                type="file"
                name="image"
                id="image"
                multiple={true}
                onChange={handleFiles}
              />
              <label
                htmlFor="image"
                className="block cursor-pointer text-center bg-[#18877b] text-white py-2 px-4 rounded-md  transition"
              >
                Select Files
              </label>
            </div>

            <div className="flex justify-between gap-4">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="price" className="block text-gray-600 font-medium">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm w-full">
                <label htmlFor="size" className="block text-gray-600 font-medium">
                  Group Size
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                  name="size"
                  id="size"
                  type="number"
                  placeholder="Total Group"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="days" className="block text-gray-600 font-medium">
                  Total Days
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                  name="days"
                  id="days"
                  type="number"
                  placeholder="Total Days"
                  required
                />
              </div>

              <div className="space-y-1 text-sm w-full">
                <label htmlFor="description" className="block text-gray-600 font-medium">
                  Short Description
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Short Description"
                  required
                />
              </div>
            </div>

            {days.map((day, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
                <h2 className="text-lg font-medium text-gray-700">Day {index + 1}</h2>
                <div className="space-y-1 text-sm">
                  <label htmlFor={`day-${index}`} className="block  font-medium">
                    Day
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                    name="day"
                    id={`day-${index}`}
                    type="text"
                    placeholder="Day"
                    value={day.day}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor={`title-${index}`} className="block text-gray-600 font-medium">
                    Title
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                    name="title"
                    id={`title-${index}`}
                    type="text"
                    placeholder="Title"
                    value={day.title}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor={`activity-${index}`} className="block text-gray-600 font-medium">
                    Activity Details
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                    name="activity"
                    id={`activity-${index}`}
                    type="text"
                    placeholder="Activity Details"
                    value={day.activity}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddDay}
              className="w-full p-3 mt-2 text-center font-medium text-white flex justify-center items-center gap-2 transition duration-200 rounded-md shadow-md bg-[#f37b63]"
            >
              <FaPlus /> Add More Days
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded-md shadow-md bg-[#18877b] "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;
