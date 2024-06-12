import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { TourTypes } from '../../TourTypes/TourTypes';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const TourTypeSection = () => {
  const navigate = useNavigate();

  const handleClick = (tourType) => {
    navigate(`/tour-type/${tourType}`);
    console.log(tourType);
  };

  return (
    <section className="bg-[#FFF7F4] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="py-6 px-4 text-center">
          <div className="text-center">
            <h4 className="font-kaushan-script text-2xl text-[#F26F73]">Find a Tour by</h4>
            <h1 className="text-2xl font-bold text-[#05073C] font-dm-sans md:text-4xl">Tour Types</h1>
          </div>
        </div>
        <div className='py-16'>
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {TourTypes?.map((type) => (
              <SwiperSlide key={type.label}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 cursor-pointer"
                  onClick={() => handleClick(type.label)}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg p-6 shadow-lg"
                  >
                    <div className="text-3xl mb-4 flex justify-center">
                      <type.icon className='text-[#ed6c33]' />
                    </div>
                    <h3 className="text-xl font-bold">{type?.label}</h3>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TourTypeSection;
