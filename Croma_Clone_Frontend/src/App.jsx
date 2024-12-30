/* eslint-disable no-unused-vars */
import React from 'react'
import './css/app.css'
import './css/homePage.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AllRoutes from './pages/AllRoutes'
// import Footer from './components/Footer'
import { loginContext } from './components/LoginContext' 
import { useState } from 'react'

  
function App() {
  const [isLogin,setIsLogin] = useState(false)

  return (
    <div className='body'>
      <loginContext.Provider value={{isLogin, setIsLogin} }>
        <div>
          <Navbar />
        </div>

    

      <div>
        <ScrollToTop />
        <AllRoutes />
      </div>

      </loginContext.Provider>
      {/* <div>
        <Footer />
      </div> */}
      
    </div>

  )
}

export default App