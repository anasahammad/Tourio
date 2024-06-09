
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TourTypes } from '../../TourTypes/TourTypes';
import { useQuery } from '@tanstack/react-query';
import useAxiosPub from '../../../hooks/useAxiosPub';
import { useState } from 'react';



const TourTypeSection = () => {
  

    const axiosPublic = useAxiosPub()
    const [selectedType, setSelectedType] = useState(null)

    const {data:pack = []} = useQuery({ 
        queryKey: ['pack', selectedType],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/packages?type=${selectedType}`)
            return res.data;
        },
      
    })

  

    const handleClick = (tourType)=>{
        setSelectedType(tourType)
    }
 console.log(pack);
   


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#017b6e] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
      <div className=" py-6 px-4 text-center">
      <div className="text-center">
                <h4 className="font-kaushan-script text-2xl text-[#F26F73]">Find a Tour by</h4>
                <h1 className="text-2xl font-bold font-dm-sans  md:text-4xl"> Tour Types</h1>
            </div>
            </div>
        <Slider {...settings}>
          {TourTypes?.map((type) => (
            <div onClick={()=>handleClick(type.label)}  key={type.label} className="px-4  cursor-pointer">
              <div  className="bg-white  rounded-lg p-6 shadow-lg ">
              <div className="text-3xl mb-4 flex justify-center">
                  <type.icon />
                </div>
                <h3 className="text-xl font-bold">{type?.label}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TourTypeSection;
