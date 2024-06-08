import bgImage from '../../../assets/cover-3.jpg'

const Slide3 = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" 
               style={{ backgroundImage: `url(${bgImage})`   }}
             >
        </div>
        </div>
    );
};

export default Slide3;