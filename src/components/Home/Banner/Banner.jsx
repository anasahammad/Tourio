import  { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import './Banner.css';
import image1 from '../../../assets/cover.jpg';
import image2 from '../../../assets/cover-2.jpg';
import image3 from '../../../assets/cover-3.jpg';
import image4 from '../../../assets/cover-4.jpg';

const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
];

const Banner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const transitions = useTransition(images[index], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 2000 },
    });

    return (
        <div className="banner-section relative h-screen w-full overflow-hidden">
            {transitions((style, item) => (
                <animated.div
                    className="image-container"
                    style={{
                        ...style,
                        backgroundImage: `url(${item.src})`,
                    }}
                />
            ))}
        </div>
    );
};

export default Banner;
