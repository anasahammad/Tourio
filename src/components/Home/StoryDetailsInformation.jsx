import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ShareButtons from "../ShareButton/ShareButtons";
import StoryImageCarosel from "./ImageCarosel/StoryImageCarosel";



const StoryDetailsInformation = ({story}) => {
    const {user} = useAuth()
    const url = window.location.href; 
  const title = story?.title;
    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    

       <StoryImageCarosel  story={story} />
            
       <div className="mt-4 px-6">
                <div className="flex items-center ">
                    <div className="flex items-center ">
                        <img className="object-cover h-10 rounded-full" src={story?.authorImage} alt="Avatar"/>
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{story?.author}</a>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{story?.date}</span>

                   
                </div>

                    <div className="mt-4">
              
                    {user ? (
            <ShareButtons url={url} title={title} />
          ) : (
            <Link to="/login" className="hover:underline ">Log in to share this story</Link>
          )}
                    </div>

            </div>
    
        <div className="p-6">
            <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{story?.destination}</span>
                <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{story?.title}</a>
                <p className="mt-2 text-justify text-sm text-gray-600 dark:text-gray-400">{story?.content}.</p>
            </div>
    
           
        </div>
    </div>
    );
};

export default StoryDetailsInformation;