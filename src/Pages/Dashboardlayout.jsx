import React from 'react'
import { Outlet } from 'react-router-dom'
import Bigsidebar from './Bigsidebar'
import Smallsidebar from './Smallsidebar'


import Wrapper from '../assets/wrappers/Footer' 
import Navbar from './Navbar'
import { createContext,useContext ,useState} from 'react'
import { Footer } from '../components'
import Whatsapp from './Whatsapp'
import ArrowMark from './ArrowMark'


const DashboardContext = createContext();


const DashboardLayout = () => {


  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };
  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <Smallsidebar />
          <Bigsidebar />
          <Whatsapp/>
          <div>
            <div className='dashboard-page'>
           <Outlet />
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout