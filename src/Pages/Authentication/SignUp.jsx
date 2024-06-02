import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";


const SignUp = () => {
    const { createUser, updateUserProfile, signInWithGoogle, signInWithTwitter} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate()
      
      const handleForm = async (data) => {
        const { email, password, name } = data;
        const image = data.photo[0];
        
        if (!image) {
          toast.error('Please upload a profile picture.');
          return;
        }
    
        const formData = new FormData();
        formData.append('image', image);
    
        try {
          const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
            formData
          );
    
          const photo = response.data.data.display_url;
          const user = { name, email, password, photo };
    
          try {
            const result = await createUser(email, password);
            console.log(result);
    
            // Save username and photo in firebase
            await updateUserProfile(name, photo);
            navigate('/');
            toast.success('Signup Successful');
          } catch (err) {
            console.error(err);
            toast.error(err.message);
          }
        } catch (err) {
          console.error(err);
          toast.error('Image upload failed. Please try again.');
        }
      };
      

      const handleGoogleSignIn = async () => {
        try {
          await signInWithGoogle()
    
          navigate('/')
          toast.success('Signup Successful')
        } catch (err) {
          console.log(err)
          toast.error(err.message)
        }
      }
      const handleTwitterSignIn = async () => {
        try {
          await signInWithTwitter()
    
          navigate('/')
          toast.success('Signup Successful')
        } catch (err) {
          console.log(err)
          toast.error(err.message)
        }
      }
    
    return (
        <div className="w-full my-6 max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex justify-center mx-auto">
                <h1 className="text-4xl font-bold">Sign Up</h1>
            </div>

            <form onSubmit={handleSubmit(handleForm)} className="mt-6">
                <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                    <input {...register('name', {
            required: true
          })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                {errors.name && <span className="text-red-600">This name is required to sign up</span>}
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input
                    {...register("email", { required: true })} 
                    type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                {errors.email && <span className="text-red-600 block">This email is required to sign up</span>}

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                    </div>

                    <input 
                      {...register("password", {
                        required: "Password is required", 
                        minLength: {
                          value: 6, 
                          message: "Password must be at least 6 characters"
                        }, 
                        validate: {
                          upperCase: (value)=> /[A-Z]/.test(value) || "Password must have  at least one UpperCase letter", 
                          lowerCase: (value)=> /[a-z]/.test(value) || "Password must have  at least one LowerCase letter" 
            
                        }
                      })}
                    type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                <div className="mt-2">
                    <label htmlFor="photo" className="block text-sm text-gray-800 dark:text-gray-200">Upload Photo</label>
                    <input {...register('photo')} type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

                <button onClick={handleTwitterSignIn} href="#" className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                    </svg>
                </button>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to="/login" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign In</Link></p>
        </div>
    );
};

export default SignUp;