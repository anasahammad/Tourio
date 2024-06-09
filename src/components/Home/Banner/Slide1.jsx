
import bgImage from '../../../assets/cover.jpg'
const Slide1 = () => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" 
               style={{ backgroundImage: `url(${bgImage})`   }}
             >
        </div>
    </div>
        
    );
};

export default Slide1;