import  { useState } from 'react';
import { FaBars, FaGlobe, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../assets/logo-1.svg'

const Navbar = () => {
    const {user, logOut} = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (dropdownOpen) {
            setDropdownOpen(false);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        if (isOpen) {
            setIsOpen(false);
        }
    };

   
    
    return (
        <nav className="fixed bg-white w-full z-50 shadow dark:bg-gray-800">
            <div className="container px-4 py-4 mx-auto">
                <div className="flex  flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center justify-between ">
                        <div className="flex  items-center">
                            <Link to="/">
                                {/* <h2 className='font-bold text-2xl flex font-dm-sans items-center gap-2'>
                                    <FaGlobe className='text-[#f37b63]'></FaGlobe>Tourio</h2> */}
                                    <img src={logo} alt="" />
                            </Link>
                           
                        </div>

                        {/* Mobile menu button and user profile */}
                        <div className="flex items-center gap-3 lg:hidden ">
                            {user && (
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center focus:outline-none"
                                >
                                    <img
                                        src={user?.photoURL}
                                        alt="profile"
                                        className="w-8 h-8 rounded-full"
                                    />
                                </button>
                            )}
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 mr-2"
                                aria-label="toggle menu"
                            >
                                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:flex  items-center ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex  w-full flex-col md:flex-row md:mx-1">
                            <Link to="/" className="my-2 text-sm font-semibold leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-orange-400 md:mx-4 md:my-0" >
                                Home
                            </Link>
                            <Link to="/community" className="my-2 font-semibold text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-orange-400 md:mx-4 md:my-0" >
                                Community
                            </Link>
                            <Link to="/blogs" className="my-2 font-semibold text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-orange-400 md:mx-4 md:my-0" >
                                Blogs
                            </Link>
                            <Link to="/about-us" className="my-2 font-semibold text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-orange-400 md:mx-4 md:my-0" >
                                About Us
                            </Link>
                            <Link to="/contact-us" className="my-2 font-semibold text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-blue-400 hover:text-orange-400 md:mx-4 md:my-0">
                                Contact Us
                            </Link>
                           
                        </div>
                        {!user && (
                             <div className='w-[200px]  ml-6'> <Link to="/login"
                             className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg focus:outline-none focus:ring  bg-[#18877b]">
                             Login
                         </Link>
                        
                         </div>
                         
                            )}
                    </div>

                    {/* User profile dropdown for mobile */}
                    {dropdownOpen && (
                        <div className="lg:hidden absolute right-0 top-16 w-full bg-white shadow-lg z-10">
                            <div className="px-4 py-3">
                                <p className="text-sm font-medium text-gray-900">{user?.displayName}</p>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                            <div className="py-1">
                                <Link to="/dashboard/my-profile"
                                    
                                    className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                                <a
                                    href="#"
                                    className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100"
                                >
                                    Offer Announcements
                                </a>
                            </div>
                            <div className="py-1">
                                <button
                                    onClick={logOut}
                                    className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}

                    {/* User profile and dropdown for desktop */}
                    {user && (
                        <div className="hidden w-[100px]   lg:flex lg:items-center lg:relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center focus:outline-none"
                            >
                                <img
                                    src={user?.photoURL}
                                    alt="profile"
                                    className="w-8 h-8 rounded-full"
                                />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 w-56 top-12 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                                    <div className="px-4 py-3">
                                        <p className="text-sm font-medium text-gray-900">{user?.displayName}</p>
                                        <p className="text-sm text-gray-500">{user?.email}</p>
                                    </div>
                                    <div className="py-1">
                                        <Link to="/dashboard/my-profile"
                                           
                                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100"
                                        >
                                            Dashboard
                                        </Link>
                                        <a
                                            href="#"
                                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100"
                                        >
                                            Offer Announcements
                                        </a>
                                    </div>
                                    <div className="py-1">
                                        <button
                                            onClick={logOut}
                                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>  
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
