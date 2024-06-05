import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import StoryForm from "../../../components/Form/StoryForm";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyProfile = () => {
    const {user} = useAuth()
    const [role] = useRole()
    const axiosSecure = useAxiosSecure()

    const {mutateAsync} = useMutation({ 
        mutationFn: async (newStory)=>{
            const {data} = await axiosSecure.post('/story', newStory)
            return data;
        },
        onSuccess: ()=>{
            console.log("Story Posted");
            toast.success("Story Added Successful")
        }
    })
    const handleStory =  async (e)=>{
        e.preventDefault()
        const form = e.target;
        const story = form.story.value;
        console.log(story);

        try {
            const res = await mutateAsync({story, user})
            console.log(res);
        }
        catch (err){
            console.log(err.message);
        }

    }
  return (
    <div>
        
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-center p-6 bg-[#f0d8c4]">
        <img className="w-24 h-24 rounded-full object-cover" src={user?.photoURL} alt={user?.displayName} />
      </div>
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold mb-2">{user?.displayName}</h2>
        <p className="text-gray-600 mb-2">{user?.email}</p>
       <p className="inline-block px-3 py-1 rounded-full text-white bg-red-500">{role?.charAt(0).toUpperCase() + role?.slice(1)}</p>
      </div>
    </div>

        <div>
            {
                role === 'tourist' && (<StoryForm handleStory={handleStory}/>)
            }
        </div>
    </div>
  );
};

export default MyProfile;
