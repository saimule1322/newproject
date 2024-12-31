import React from 'react'
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Smallsidebar';
import { NavLink } from 'react-router-dom';

import links from '../utils/link';
import { useDashboardContext } from './Dashboardlayout';
import Navbar from './Navbar';
import VSA from '../assets/images/VSA Logo_page-0001.jpg'
import { FaFacebook,FaInstagram,FaLinkedin,FaWhatsapp, FaYoutube  } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Smallsidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  const handleClick = () => {
    window.scrollTo(0, 0);    
    toggleSidebar();
  };

  const handleimageclick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (


    <Wrapper>
      <div>
      <div className="icon">
              {/* <a  className="ftco-animate" href="https://twitter.com/Sbiotech2?t=A9HPgMjIGBbTtZpNCy3e1w&s=09"><FaX size={15}  /></a> */}
              <a  className="ftco-animate" href="https://www.facebook.com/profile.php?id=61571291037642"><FaFacebook size={20} color="#1877f2" /></a>
              <a  className="ftco-animate" href="https://www.instagram.com/vedasriagritech/"><FaInstagram size={20} color="#E4405F" /></a>
              <a  className="ftco-animate" href="https://www.linkedin.com/"><FaLinkedin size={20} color="#0077b5"/></a>
               <a  className="ftco-animate" href="https://www.youtube.com/channel/UC3uhAdU7R5KOHP36qUpJ1QQ"><FaYoutube size={20} color="#FF0000" /></a>
              <a  className="ftco-animate" href="https://wa.me/919652850089"><FaWhatsapp size={20} color="#25D366" /></a>
            </div>
        <Navbar />
      </div>

    <div
      className={
        showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container '
      }
    >
      <div className='content'>
        <button type='button' className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <h4 className='logo1' ><img src={VSA} onClick={handleimageclick} alt="Description of Image" height={50}/>
        </h4>


        <div className='nav-links Playpen_Sans'>
          {links.map((link) => {
            const { text, path ,icon } = link;

            return (
              <NavLink
                to={path}
                key={text}
                className='nav-link font_16 '
                onClick={handleClick}
                end
              >
                <span style={{ marginRight: '8px' ,height:'30px' }}>{icon}</span>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  </Wrapper>
  )
}

export default Smallsidebar