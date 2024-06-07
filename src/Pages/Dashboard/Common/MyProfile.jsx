import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import StoryForm from "../../../components/Form/StoryForm";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import GuideForm from "../../../components/Form/GuideForm";
import axios from "axios";

const MyProfile = () => {
    const {user} = useAuth()
    const [role] = useRole()
    const axiosSecure = useAxiosSecure()
    const [images, setImages] = useState([])

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



    const handleImage = (e)=>{
        const files = [...e.target.files]
        setImages(files)
    }


    const handleStory =  async (e)=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const content = form.content.value;
        const date = form.date.value;
        const destination = form.destination.value;

        const storyImages = []
       
        try {
             // uploading multiple images
      for (const image of images) {
        const formData = new FormData();
        formData.append('image', image);
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        ); 
        storyImages.push(response.data.data.display_url);
    }

       

        const story = {
            title, description, content, date, destination, storyImages,
             author: user?.displayName,             
             authorImage: user?.photoURL

        }
            const res = await mutateAsync(story)
            console.log(res);
            if(res.data.insertedId
                > 0){
                form.reset()
            }
        }
    
        catch (err){
            console.log(err.message);
        }

    }

    console.log(user);
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
                role === 'tourist' && (<StoryForm handleImage={handleImage} handleStory={handleStory}/>)
            }
        </div>
        <div>
            {
                role === 'guide' && (<GuideForm 
                    user={user}
                    handleStory={handleStory}/>)
            }
        </div>
    </div>
  );
};

export default MyProfile;
