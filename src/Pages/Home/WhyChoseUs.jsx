import { motion } from 'framer-motion';
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import icon4 from "../../assets/icon4.svg"

const WhyChoseUs = () => {
    return (
        <div className="px-10 my-16">
            <div className="px-8 mt-6">
                <h1 className="text-[#05073C] font-dm-sans text-3xl font-bold ">Why chose Tours</h1>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Card 1 */}
               <motion.div 
                whileHover={{ scale: 1.1 }}
                className="card"
                >
                    <div className="card-body">
                        <img src={icon1} className="w-20 h-40" alt="" />
                        <h1 className="text-[#05073C] font-semibold ">Ultimate Flexibility</h1>
                        <p className="text-[#05073C] font-dm-sans">You are in control with free cancellation and payment options to satisfy any plan or budget</p>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                whileHover={{ scale: 1.1 }}
                className="card"
                >
                    <div className="card-body">
                        <img src={icon2} className="w-20 h-40" alt="" />
                        <h1 className="text-[#05073C] font-semibold ">Memorable Experiences</h1>
                        <p className="text-[#05073C] font-dm-sans">Browse and book tours and activities so incredible, you'll want to tell your friends.</p>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                whileHover={{ scale: 1.1 }}
                className="card"
                >
                    <div className="card-body">
                        <img src={icon3} className="w-20 h-40" alt="" />
                        <h1 className="text-[#05073C] font-semibold ">Quality at our core</h1>
                        <p className="text-[#05073C] font-dm-sans">High quality standards millions of reviews. A tours company</p>
                    </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div 
                whileHover={{ scale: 1.1 }}
                className="card"
                >
                    <div className="card-body">
                        <img src={icon4} className="w-20 h-40" alt="" />
                        <h1 className="text-[#05073C] font-semibold ">Award-winning support</h1>
                        <p className="text-[#05073C] font-dm-sans">New price? New plan? No problem. We are here to help. 24/7</p>
                    </div>
                </motion.div>
            </div> 
        </div>
    );
};

export default WhyChoseUs;
