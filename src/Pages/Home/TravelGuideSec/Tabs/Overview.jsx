import { useState } from "react";
import VideoEmbed from "./VideoEmbed";
import ReactPlayer from "react-player";
import cover from '../../../../assets/bg-cover.jpg'

const Overview = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };
    return (
      
      <div className="relative flex items-center justify-center font-dm-sans h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Lets Explore Bangladesh Today</h1>
        <p className="text-white text-lg md:text-xl mb-8">Use the play button to watch Overview.</p>
        <button onClick={openVideo} className="bg-white text-black rounded-full p-3 md:p-5 focus:outline-none">
          <svg className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-9.857v3.714c0 .403.477.662.857.475l3.714-1.857a.5.5 0 000-.95l-3.714-1.857a.5.5 0 00-.857.475z" clipRule="evenodd" />
          </svg>
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative w-full max-w-3xl p-4">
              <button onClick={closeVideo} className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl">&times;</button>
              <ReactPlayer url="https://www.youtube.com/watch?v=puDBmnIXe_k" playing controls width="100%" height="100%" />
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default Overview;