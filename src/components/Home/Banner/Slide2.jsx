import bgImage from '../../../assets/cover-2.jpg'

const Slide2 = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" 
               style={{ backgroundImage: `url(${bgImage})`   }}
             >
        </div>
        </div>
    );
};

export default Slide2;