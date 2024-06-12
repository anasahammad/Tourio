
import { motion } from 'framer-motion';
import gozayanLogo from '../../../assets/gozayan.png';
import airbnbLogo from '../../../assets/airbnb.png';

import bookingLogo from '../../../assets/booking.jfif';

const companies = [
    { name: 'Gozayan', logo: gozayanLogo },
    { name: 'Airbnb', logo: airbnbLogo },
    { name: 'Booking.com', logo: bookingLogo },
    { name: 'Gozayan', logo: gozayanLogo },
    { name: 'Airbnb', logo: airbnbLogo },
    { name: 'Booking.com', logo: bookingLogo },
];

const WorkWithSec = () => {
    return (
        <section className="py-16 overflow-hidden">
        <div className="container mx-auto">
        <div className="text-center">
                <h4 className="font-kaushan-script text-2xl text-[#F26F73]">Check Out the company</h4>
                <h1 className="text-2xl font-bold text-[#05073c] font-dm-sans  md:text-4xl"> Whom We Works with</h1>
            </div>
            <motion.div
                className="flex space-x-10 overflow-hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        animate={{ x: ['100%'  -'100%']}}
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img src={company.logo} alt={company.name} className="h-24" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
    );
};

export default WorkWithSec;