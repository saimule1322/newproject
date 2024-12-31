import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { useDashboardContext } from './Dashboardlayout';
import VSA from '../assets/images/VSA Logo_page-0001.jpg'
import { Homeimage1, Homeimage2, Homeimage3, Homeimage4 } from '../assets/images/ilovepdf_pages-to-jpg';



const Navbar = () => {

  const { toggleSidebar } = useDashboardContext();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {  // You can adjust this threshold as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
    <div className={`center ${isSticky ? 'fixed' : ''}`} style={{backgroundImage: `url(${Homeimage1})`,}}>
          
    <div  className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h4 className='logo' ><img src={VSA} alt="Description of Image" height={50}/>
          </h4>
        </div>
        <div></div>
      </div>
      </div>
    </Wrapper>
    
  )
}

export default Navbar