
import MenuItem from "./MenuItem";
import { MdBook } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";


const TouristMenu = () => {
    return (
        <>
        <MenuItem  label="My Bookings"
            route="my-bookings"
            icon={MdBook}>
           
        </MenuItem>
        <MenuItem label="MY Wishlist"
            route="/my-wishlist"
            icon={FaRegHeart}>
            
        </MenuItem>
        </>
    )
};

export default TouristMenu;