import React, { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/Bigsidebar' 
import { NavLink, useNavigate } from 'react-router-dom';
import links from '../utils/link';
import { useDashboardContext } from './Dashboardlayout';
import VSA from '../assets/images/VSA Logo_page-0001.jpg';
import { FaFacebook,FaInstagram,FaLinkedin,FaWhatsapp, FaYoutube  } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { Homeimage2, Homeimage3 } from '../assets/images/ilovepdf_pages-to-jpg';



const Bigsidebar = () => {
    const { showSidebar, toggleSidebar } = useDashboardContext();

    const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 110) {  // You can adjust this threshold as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navigate = useNavigate();
    const handleimageclick = () => {
      navigate(''); // Navigate to the home page
    };
  return (
    <Wrapper>
      <div 
      
      >
             <div className="icon">
              {/* <a  className="ftco-animate" href="https://twitter.com/Sbiotech2?t=A9HPgMjIGBbTtZpNCy3e1w&s=09"><FaX size={15}  /></a> */}
              <a  className="ftco-animate" href="https://www.facebook.com/profile.php?id=61571291037642"><FaFacebook size={20} color="#1877f2" /></a>
              <a  className="ftco-animate" href="https://www.instagram.com/vedasriagritech/"><FaInstagram size={20} color="#E4405F" /></a>
              <a  className="ftco-animate" href="https://www.linkedin.com/"><FaLinkedin size={20} color="#0077b5"/></a>
               <a  className="ftco-animate" href="https://www.youtube.com/channel/UC3uhAdU7R5KOHP36qUpJ1QQ"><FaYoutube size={20} color="#FF0000" /></a>
              <a  className="ftco-animate" href="https://wa.me/919652850089"><FaWhatsapp size={20} color="#25D366" /></a>
            </div>

          <div>
          <h4 className='mainlogo' onClick={handleimageclick} ><img src={VSA} onClick={handleimageclick} alt="Description of Image" height={50}/>
          </h4>
          </div>

          <div className={showSidebar ? 'sidebar-container' : 'sidebar-container'}>
          <div className='content' >
    <div  className={`nav-links Playpen_Sans ${isSticky ? 'fixed' : ''}`} style={{backgroundImage: `url(${Homeimage2})`,}}>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            end
          >
            <span style={{ marginRight: '8px', marginBottom: '3px', height: '25px' }}>
              {icon}
            </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  </div>
</div>



    </div>
  </Wrapper>
  )
}

export default Bigsidebar