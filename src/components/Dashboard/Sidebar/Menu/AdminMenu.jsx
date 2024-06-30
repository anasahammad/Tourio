import { FaPlus, FaRegCalendarAlt, FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
    return (
        <>
            <MenuItem label='Add Package'  route="add-package" icon={FaPlus} >
              
        
            </MenuItem>
            <MenuItem label='Booking Summary'  route="booking-summary" icon={FaRegCalendarAlt } >
              
        
            </MenuItem>

            <MenuItem label="Manage Users"
                route="manage-users"
                icon={FaUserCog}>
             
            </MenuItem>
        </>
    )
};

export default AdminMenu;