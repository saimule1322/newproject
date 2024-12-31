import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/WhatsappBox'



const Whatsapp = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
    
          if (window.scrollY > 250) {
            setIsVisible(true); 
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 

      const handleClick = ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'  
          }); 
      }

  return (
    <Wrapper>
    <div className="WhatsappBox" >
        <a href="https://wa.me/919652850089"><FaWhatsapp size={25} color="white" /></a>
</div>

<div  onClick={handleClick} >
  {isVisible && <p className="NavtoTop" style={{paddingTop:'0px'}}><FaArrowUp size={25} color="black" /></p>}
</div>
</Wrapper>

  )
}

export default Whatsapp