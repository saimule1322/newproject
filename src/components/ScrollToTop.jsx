import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Simple check for mobile devices
     
      if (isMobile) {
        console.log("Mobile detected");

        // window.scrollTo(0, 0); 
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'  // This adds smooth scrolling
        }); 
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); 
    return () => clearTimeout(timeoutId);
  }, [location]); 

  return null; 
}
export default ScrollToTop;

