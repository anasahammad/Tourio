import { FaGlobe, FaHiking, FaLandmark, FaPaw } from "react-icons/fa";
import { FaCross, FaShip } from "react-icons/fa6";
import { GiFootprint } from "react-icons/gi";


export const TourTypes = [
  {
    label: 'Adventure',
    icon: FaHiking ,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Cultural',
    icon: FaGlobe ,
    description: 'This property is has windmills!',
  },
  {
    label: 'Historical ',
    icon: FaLandmark ,
    description: 'This property is modern!',
  },
  {
    label: 'Wildlife ',
    icon: FaPaw ,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Cruise ',
    icon: FaShip ,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: 'Air Rides',
    icon: FaCross ,
    description: 'This property is on an island!',
  },
  {
    label: 'Walking',
    icon: GiFootprint,
    description: 'This property is near a lake!',
  },
 
]