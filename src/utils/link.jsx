import React from 'react';
import { FaHome, FaPhoneAlt, FaServer, FaUser } from 'react-icons/fa';
import { FaBottleWater } from 'react-icons/fa6';

const links = [
  { text: 'Home', path: 'Home',icon:<FaHome size={18}/>},
  { text: 'About Us', path: 'About-Us',icon:<FaUser size={15}/>},
  { text: 'Products', path: 'Products',icon:<FaBottleWater size={18} />},
  { text: 'Services', path: 'Services',icon:<FaServer size={18}/>},
  { text: 'Contact Us', path: 'Contact-Us',icon:<FaPhoneAlt size={15}/> },
];

export default links;