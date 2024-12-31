import React, { useState, useEffect } from 'react';

const ArrowMark = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll threshold to 200px (you can adjust this value)
      if (window.scrollY > 200) {
        setIsVisible(true); // Make the navbar visible
      } else {
        setIsVisible(false); // Hide the navbar
      }
    };

    // Add the scroll event listener when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
    </nav>
  );
};

export default ArrowMark;
