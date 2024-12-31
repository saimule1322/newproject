import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import Wrapper from '../assets/wrappers/ContactForm'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <Wrapper>

   <div  className='contactform' >
    <div className='details'>

    <h1 style={{ color: '#1f4e3d', textAlign: 'left' ,marginBottom:'10px',marginLeft:"20px" }}>
                                    Contact Details
      </h1>
      <div className='boxes'>
        <div className="ftco-animate"><FaMapMarkerAlt size={30} /></div>
        <div className='innercontent'>
          <p>Meet us at</p>
          <h6>vikarabad,hyderabad</h6>
        </div>
      </div>

      <div className='boxes'>
        <div className="ftco-animate"><a href="https://wa.me/919652850089"><FaWhatsapp size={25} color="#25D366" /></a></div>
        <div className='innercontent'>
          <p>Chat With us </p>
          <h6><a href="https://wa.me/919652850089">+91 9652850089</a></h6>
        </div>
      </div>
      

      <div className='boxes'>
        <div className="ftco-animate"><a href="tel:+91 9656850089"><FaPhoneAlt size={25} color="#25D366" /></a></div>
        <div className='innercontent'>
          <p>Talk with us</p>
          <h6>+91 9652850089</h6>
        </div>
      </div>

      <div className='boxes'>
        <div className="ftco-animate"><a href="mail:vedasriagritech@gmail.com"><FaEnvelope size={25}/></a></div>
        <div className='innercontent'>
          <p>Email</p>
          <h6>vedasriagritech@gmail.com</h6>
        </div>
      </div>
      
     
      </div>

      <div className='formdetails'>
  <h1 style={{ color: '#ef7e1e' }}>Any Queries</h1>

  <form
    style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}
    onSubmit={(e) => {
      e.preventDefault(); // Prevent default form submission

      // Collect form data
      const firstName = e.target['first-name'].value;
      const phoneNumber = e.target['your-phone'].value;
      const email = e.target['your-email'].value;
      const message = e.target['your-message'].value;

      // WhatsApp message text
      const whatsappMessage = `Hello, I have a query.\n\nName: ${firstName}\nPhone: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`;

      // WhatsApp link
      const whatsappLink = `https://wa.me/+919652850089?text=${encodeURIComponent(whatsappMessage)}`;

      // Redirect to WhatsApp
      window.open(whatsappLink, '_blank');
    }}
  >
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="first-name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
         Name
      </label>
      <input
        id="first-name"
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        maxLength="400"
        placeholder="Enter your Name"
        type="text"
        name="first-name"
      />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="phone-number" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        Phone Number
      </label>
      <input
        id="phone-number"
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        maxLength="400"
        placeholder="Phone Number"
        type="tel"
        name="your-phone"
      />
    </div>


    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        Email
      </label>
      <input
        id="email"
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        maxLength="400"
        placeholder="Email"
        type="email"
        name="your-email"
      />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        Your Message
      </label>
      <textarea
        id="message"
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        rows="3"
        maxLength="2000"
        placeholder="Tell us something"
        name="your-message"
      />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="notifications" style={{ display: 'block', fontWeight: 'bold' }}>
        <input
          id="notifications"
          style={{ marginRight: '5px' }}
          type="checkbox"
          name="accept-this-3"
          value="1"
        />
        Get phone calls from us about your enquiry
      </label>
    </div>

    <div>
      <button
        type="submit"
        style={{
          backgroundColor: '#ef7e1e',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Send
      </button>
    </div>
  </form>
</div>


  
</div>
   
                <div className='map'>
                  <iframe
                    style={{ border: '0' }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.4755488722!2d78.4437156!3d17.4420495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91acb1e180db%3A0xbd4bd575a3ca9988!2sVnuthna%20Agrrotec%20LLP!5e0!3m2!1sen!2sin!4v1691236559756!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen="allowfullscreen"
                  />
                </div>
             

</Wrapper>

  )
}

export default ContactUs