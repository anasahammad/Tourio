import { useMutation, useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../LoadingSpinner";

const GuideForm = ({ user }) => {
    const { updateUserProfile} = useAuth()
  const axiosSecure = useAxiosSecure();
  const { data: guide, isLoading, refetch } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tour-guide/${user?.email}`);
      return res.data;
    },
  });




const {mutateAsync} = useMutation({
    mutationFn: async (updatedData)=>{
        const {data} = await axiosSecure.put(`/tour-guide-profile/${user?.email}`, updatedData)
        return data;
    },
    onSuccess: ()=>{
        toast.success("Your Info Have been updated")
        refetch()
    },
    onError : (error)=>{
        toast.error(error.response?.data?.message || "An error occurred")
    }

})
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const education = form.education.value;
    const language = form.language.value;
    const hobby = form.hobby.value;
    const number = form.number.value;
    const photo = form.photo.files[0]
    
    if (!photo) {
        toast.error('Please upload a profile picture.');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', photo);
   
    const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
        formData
      );
      const updateImage = response.data.data.display_url;
      const updateInfo = {
        name, education, language, hobby, number, photo:updateImage  
    }


    try {
       
         await updateUserProfile(
            name, updateImage 
          )
    
          await mutateAsync(updateInfo)
          
    } catch (error) {
        //
    }

    console.log(updateInfo);
  }

if(isLoading) return <LoadingSpinner/>

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Update Your Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={guide?.name}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              defaultValue={guide?.email}
              disabled
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Education:</label>
            <input
              type="text"
              name="education"
              defaultValue={guide?.education}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Languages:</label>
            <input
              type="text"
              name="language"
              defaultValue={guide?.language}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hobby:</label>
            <input
              type="text"
              name="hobby"
              defaultValue={guide?.hobby}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact Number:</label>
            <input
              type="tel"
              name="number"
              defaultValue={guide?.number}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 md:col-span-2">
            <label className="block text-gray-700">Photo:</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Update Info
        </button>
      </form>
    </div>
  );
};

export default GuideForm;
