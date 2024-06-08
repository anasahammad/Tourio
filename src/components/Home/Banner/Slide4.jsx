import bgImage from '../../../assets/cover-4.jpg'

const Slide4 = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" 
               style={{ backgroundImage: `url(${bgImage})`   }}
             ></div>
        </div>
    );
};

export default Slide4;