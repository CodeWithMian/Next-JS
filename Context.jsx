import axios from 'axios'
import { useRouter } from 'next/router'
import React, { createContext, useEffect, useState } from 'react'

export const Session = createContext()
const Context = ({children}) => {
    const [user, setUser] = useState()
var router = useRouter()
// console.log(router.pathname)
var pathname = router.pathname
    const fetchuser = async()=>{
        try {
            const res = await axios.get("/api/user/profile")
            setUser(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
    fetchuser()
    }, [pathname])
  return (
    <Session.Provider value= {{user,setUser}}>
      {children}
    </Session.Provider>
  )
}

export default Context
