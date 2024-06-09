import Slider from "react-slick";


const CardImageCarosel = ({pkg}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {pkg?.packageImages.map((image, index) => (
                <div key={index}>
                    <img src={image} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" alt={`Story ${index + 1}`} />
                </div>
            ))}
        </Slider>
    );
};

export default CardImageCarosel;