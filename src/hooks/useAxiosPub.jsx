import axios from "axios";



const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
   
  })

const useAxiosPub = () => {
    return axiosPublic;
};

export default useAxiosPub;