import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { FaFacebook, FaTwitter,FaInstagram,FaLinkedin,FaWhatsapp, FaYoutube,FaLocationArrow,FaMailBulk,FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
<Wrapper>
  <ScrollToTop />
    <div className='mainfooter' >
    <div className='footer'>
      <div className='col-md-3 text_left'>
        <h2 className="footer-heading font_22   ">About Us</h2>
            <section  className="text_left">
              <h6 className="font_16 text_black ">VEDA SRI AGROTECH &nbsp;is a leading manufacturer and supplier of quality Bio Products across India mainly focused in Telangana and Andhra Pradesh</h6>
            </section>
            <section  className="widget_block widget_text">
            <p className="has-text-align-left"></p>
            </section>
            <section className="widget_block">
            <Link to="/Home"><p>Read more</p></Link>
            </section>
           <section className="widget_block">
              <h6>Follow us on</h6>
            </section>
            <section  className="widget_block">
              <ul className="d-flex widget ">
                {/* <li className="ftco-animate"><a href="https://twitter.com/Sbiotech2?t=A9HPgMjIGBbTtZpNCy3e1w&s=09"><FaX size={25}  /></a></li> */}
                <li className="ftco-animate"><a href="https://www.facebook.com/profile.php?id=61571291037642"><FaFacebook size={25} color="#1877f2" /></a></li>
                <li className="ftco-animate"><a href="https://www.instagram.com/vedasriagritech/"><FaInstagram size={25} color="#E4405F" /></a></li>
                <li className="ftco-animate"><a href="https://www.linkedin.com/"><FaLinkedin size={25} color="#0077b5"/></a></li>
                <li className="ftco-animate"> <a href="https://www.youtube.com/channel/UC3uhAdU7R5KOHP36qUpJ1QQ"><FaYoutube size={25} color="#FF0000" /></a></li>
                <li className="ftco-animate"><a href="https://wa.me/919652850089"><FaWhatsapp size={25} color="#25D366" /></a></li>
             </ul>
            </section>  
      </div>

    <div className="col-md-3 text_white">
           <div className="ftco-footer-widget mb-4 text_left">
                <section id="block-14" className=" widget_block">
                <h2 className="footer-heading font_22">Our Products</h2>
                </section>
                <section id="nav_menu-4" className=" widget_nav_menu">
                  <nav className="menu-our-products-container" aria-label="Menu">
                    <ul id="menu-our-products" className="menu">
                      <li id="menu-item-473" className="menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-473"> <Link to="/Products"><p style={{marginBottom:'5px'}}>Bio-Pesticides</p></Link></li>
                      <li id="menu-item-470" className="menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-470"><Link to="/Products"><p style={{marginBottom:'5px'}}>Bio-insecticides</p></Link></li>
                      <li id="menu-item-470" className="menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-470"><Link to="/Products"><p style={{marginBottom:'5px'}}>Bio-fungicides</p></Link></li>
                      <li id="menu-item-470" className="menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-470"><Link to="/Products"><p style={{marginBottom:'5px'}}>Bio-fertilizers</p></Link></li>
                      <li id="menu-item-470" className="menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-470"><Link to="/Products"><p style={{marginBottom:'5px'}}>Growth Promoters</p></Link></li>
                      <li id="menu-item-470" className="menu-item menu-item-type-taxonomy menu-item-object-product_categories menu-item-470"><Link to="/Products"><p style={{marginBottom:'5px'}}>Micro-Nutrients</p></Link></li>
                    </ul>
                  </nav>
                </section>           
            </div>
     </div>

        <div className="col-md-3">
          <div className="ftco-footer-widget mb-4 text_left">
              <section id="block-33" className=" widget_block">
            <h2 className="footer-heading font_22 ">CORPORATE OFFICE</h2>
            </section>
            <section id="block-34" className=" widget_block">
              <div className="block-23 mb-3"> 
                <ul className='contact-list' >
                <li><FaMapMarkerAlt size={30} /><span className="text">A 212 . 2nd Floor - Msa-New Siyaganj , Vip Marg. Mall Godown Road Indore . 452003 (M.p) India</span></li> 
                <li><FaMapMarkerAlt size={30} /><span className="text">Mfg: Facilty Address : Plot No. 368-369 Dharmat Road,sanwer,Indore , 452001-madhya Pradesh, India</span></li>
                <li><a href="tel:+91 9656850089"><FaPhone /><span className="text">+91 9652850089</span></a></li>
                <li><a href="mail:vedasriagritech@gmail.com"><FaEnvelope/><span className="text">vedasriagritech@gmail.com</span></a></li>
                </ul>
              </div>
            </section>          
           </div>
        </div>


     
  


        {/* <div id="myModalContactus" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <h2>Contact Now</h2>
                                <a className="navbar-brand" href="https://shreesaibiotech.in"><img src="https://shreesaibiotech.in/wp-content/uploads/2023/08/cropped-2323060652512838f3logo.png"/></a>
                  <p><b>Contact No.:</b> <a href="+918989496905">whatsapp sms sender - 
                  Call Anytime  +91 9656850089</a> , <a href="+919656850089"> Ph.Fax No.+919656850089</a></p>
                  <p><b>Email:</b> <a href="vedasriagritech@gmail.com">vedasriagritech@gmail.com</a></p>
                  <p><b>Office Address:</b> Shop A 212 . 2nd Floor -MSA-New Siyaganj , VIP Marg. Mall Godown Road Indore . 452003 (M.P) India
                </p>
                  <p><b>MFG: FACILTY Address:</b> Mfg: Facilty : Dharmat Road Sanwer,Industial Area,, Indore-Indore , Madhya Pradesh, Indai , 452001 </p>
                </div>
              </div>
            </div>
        </div> */}

      </div>
  </div>
  <div className="row mainfooter">
        <div className="col-md-12 text-center"><p>Copyright &copy; 2024 All rights reserved</p></div>
      </div>
  </Wrapper>
  )
}

export default Footer