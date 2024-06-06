import { NavLink } from "react-router-dom";


const MenuItem = ({label, route,  icon:Icon}) => {
  
     return ( 
     <NavLink
                to={route}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-black ${
                    isActive ? 'bg-[#f0d8c4]  text-black' : 'text-white'
                  }`
                }
              >
                <Icon className='w-5 h-5' />

                <span className='mx-4 font-medium'>{label}</span>
              </NavLink>
     ); 
             
};

export default MenuItem;