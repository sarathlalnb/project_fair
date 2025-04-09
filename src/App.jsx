import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import { useContext, useEffect } from 'react'
import { loginContext } from './contexts/AuthContext'




function App() {

  const {isLoggedIn,setIsLoggedIn} = useContext(loginContext)


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={ isLoggedIn? <Dashboard/> : <Navigate to={'/login'}/>} />
      <Route path='/projects' element={<Projects />}/>
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth fromRegisterPage={true} />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
