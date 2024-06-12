import axios from 'axios'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  withCredentials: true,
})
const useAxiosSecure = () => {
  return axiosSecure
}

export default useAxiosSecure