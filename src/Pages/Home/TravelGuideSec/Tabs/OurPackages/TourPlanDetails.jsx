import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp, FaChevronDown, FaChevronUp } from "react-icons/fa";


const TourPlanDetails = ({item}) => {
    const [isOpen, setIsOpen] = useState(true)
   
    const handleToggle = (index)=>{
        setIsOpen(isOpen === index ? null : index)
    }
    return (
        <div >
           
            <div>


            <section className="bg-white d font-dm-sans">
            <div>
                <h1 className="text-[18px] font-bold">Short Description :</h1>
                <p>{item.shortDescription}</p>
            </div>
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl  font-bold lg:text-3xl dark:text-white">
          Tour Plan
        </h1>

        {item.tourPlan?.map((plan, idx)=> <div key={idx} className="mt-8 space-y-8 lg:mt-12">
          <div className="p-8 md:w-[600px] bg-gray-100 rounded-lg dark:bg-gray-800">
            <button className="flex items-center justify-between w-full">
              <h1 className="font-semibold md:text-2xl text-gray-700 dark:text-white">
                {plan.day} - {plan.title} 
              </h1>

              <button onClick={()=>handleToggle(idx)}  className="text-black rounded-full">
                {
                    isOpen === idx ? <FaChevronUp /> : <FaChevronDown />
                }
                
              </button>
            </button>
            {isOpen === idx && ( <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
            {plan.activity}
            </p>)}
            
          </div>

          

         
        </div>)}
        
      </div>
    </section>

            </div>
        </div>
    );
};

export default TourPlanDetails;