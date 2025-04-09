import React, { createContext, useEffect, useState } from 'react'

export const loginContext = createContext();


const AuthContext = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(true)

    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    },[isLoggedIn])

  return (
  <loginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children}
  </loginContext.Provider>
  )
}

export default AuthContext