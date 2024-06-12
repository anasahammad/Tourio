import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'

import axios from 'axios'
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = async (email, password) => {
    setLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      return result
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email, password) => {
    setLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return result
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return result
    } finally {
      setLoading(false)
    }
  }

  const signInWithTwitter = async () => {
    setLoading(true)
    try {
      const result = await signInWithPopup(auth, twitterProvider)
      return result
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async email => {
    setLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
    } finally {
      setLoading(false)
    }
  }

  const logOut = async () => {
    setLoading(true)
    try {
      await axios.get(`${import.meta.env.VITE_API_KEY}/logout`, {
        withCredentials: true,
      })
      await signOut(auth)
    } finally {
      setLoading(false)
    }
  }

  const updateUserProfile = async (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  const getToken = async email => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_KEY}/jwt`,
        { email },
        { withCredentials: true }
      )
      return data
    } catch (error) {
      console.error('Error fetching token:', error)
    }
  }

  const saveUser = async user => {
    const currentUser = {
      email: user.email,
      name: user?.displayName,
      photo: user?.photoURL,
      role: "tourist",
      status: 'verified'
    }
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_KEY}/user`,
        currentUser
      )
      return data
    } catch (error) {
      console.error('Error saving user:', error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      setUser(currentUser)
      if (currentUser) {
        await getToken(currentUser.email)
        await saveUser(currentUser)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
    signInWithTwitter
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
