import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const GuideForm = ({user}) => {

    const axiosPublic = useAxiosSecure()
    const {data: guide , isLoading} = useQuery({
      queryKey: ['guide'],
      queryFn: async ()=>{
        const res = await axiosPublic.get(`/tour-guide/${user?.email}`)
        return res.data;
      }
    })

    console.log(guide);
    return (
        <div>
              <form className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Your Info</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
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
        <label className="block text-gray-700">Photo:</label>
        <input
          type="file"
          accept="image/*"
        //   onChange={handlePhotoUpload}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {/* {photoPreview && */}
        
        <img 
        // src={photoPreview} 
        alt="Preview" className="mt-4 w-24 h-24 object-cover rounded-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Role:</label>
        <select
        //   value={role}
        //   onChange={(e) => setRole(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Guide
      </button>
    </form>
        </div>
    );
};

export default GuideForm;