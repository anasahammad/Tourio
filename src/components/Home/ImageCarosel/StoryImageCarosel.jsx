import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StoryImageCarosel = ({story}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
       
        <Slider {...settings}>
            {story?.storyImages.map((image, index) => (
                <div key={index}>
                    <img src={image} className="w-full h-[250px] md:h-[400px]" alt={`Story ${index + 1}`} />
                </div>
            ))}
        </Slider>
   
    );
};

export default StoryImageCarosel;