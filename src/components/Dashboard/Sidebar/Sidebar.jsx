import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { MdHomeWork } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { FaGlobe, FaPlus, FaUserCog } from 'react-icons/fa'
import useRole from '../../../hooks/useRole'
import MenuItem from './Menu/MenuItem'
import TouristMenu from './Menu/TouristMenu'
import AdminMenu from './Menu/AdminMenu'
import GuideMenu from './Menu/GuideMenu'
import { FaPaperPlane } from 'react-icons/fa6'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import TourGuideModal from '../../Modal/TourGuideModal'
import LoadingSpinner from '../../LoadingSpinner'
import logo from '../../../assets/logo-1.svg'



const Sidebar = () => {
  const { user } = useAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading] = useRole()
  const [isOpen, setIsOpen] = useState(false)
  const axiosSecure = useAxiosSecure()
  

  const closeModal = ()=>{
    setIsOpen(false)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  console.log(role);
  if(isLoading) return <LoadingSpinner/>


 
  const handleRequest = async (e)=>{
    e.preventDefault()
    const form = e.target;
    const education = form.education.value;
    const hobby = form.hobby.value;
    const number = form.number.value;
    const language = form.language.value;
    const birthday = form.birthday.value
    const about= form.about.value;
    console.log(education, hobby, number, language, birthday ,about );
       try{
        const guide = {
          email : user?.email,
          name: user?.displayName,
          photo: user?.photoURL,
          role : 'tourist',
          status: 'requested',
          education,
           hobby, 
           number, 
           language,
            birthday ,
            about
        }
      const {data} =   await axiosSecure.put(`/user`, guide)
        console.log(data);
        if(data.modifiedCount > 0){
          toast.success("Request Sent to the admin. Please wait for the response")
          
        }
        else{
          toast.success("Please wait for admin response")
        }
       } 
       catch (error){
        toast.error(error.message)
       }
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-[#05073c] text-white  flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
            {/* <h2 className='font-bold text-2xl flex font-dm-sans items-center gap-2'>
                                    <FaGlobe className='text-[#f37b63]'></FaGlobe>Tourio</h2> */}
                                    <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden 
          bg-[#05073c] text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center   mx-auto'>
              <Link to='/'>
              {/* <h2 className='font-bold text-2xl flex  ] font-dm-sans items-center gap-2'>
              <FaGlobe className='text-[#f37b63]'></FaGlobe>Tourio</h2> */}
              <img src={logo} className='' alt="" />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex e flex-col justify-between flex-1 mt-6'>
    
            {/*  Menu Items */}
            <nav>
              {/* My Profile */}
            
              <MenuItem 
                label={"My Profile"}
                route={"my-profile"}
                icon={FcSettings}
              ></MenuItem>
              
            {role === 'tourist' && <TouristMenu/>}
            {role === 'admin' && <AdminMenu/>}
            {role === 'guide' && <GuideMenu/>}
            
            {
              role === 'tourist' &&   <div className='flex items-center px-4 py-2 my-5 '>
              <button onClick={()=>setIsOpen(true)} className='text-white font-bold flex gap-3 items-center '> 
              <FaPaperPlane/>  Request to Admin</button>

              <TourGuideModal 
               closeModal={closeModal}
               isOpen={isOpen}
               handleRequest={handleRequest}
              
              >

              </TourGuideModal>
             </div>
            }
           
              
            </nav>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Sidebar