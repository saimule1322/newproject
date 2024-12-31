import React from 'react'
import Wrapper from '../assets/wrappers/AboutUs'
import { Homeimage6, Manufacturing } from '../assets/images/ilovepdf_pages-to-jpg'

const About = () => {
  return (
    <Wrapper>
      <div className="aboutpage">
        <div className="about">
        <h4> VEDA SRI AGRITECH is a pioneer in the Research,Production and Distribution of Best quality Bio fertilizers,Bio pesticides,Bio fungicides, micronutrients, and organic growth promoters.</h4>
        <p>Our Company is dedicated to providing the Best quality of Bio fertilizers, Bio pesticides, Bio fungicides , micronutrients, and organic growth promoters.Our Company is one of the leading producers and suppliers of these products throughout India, with a special focus on the states of Telangana and Andhra Pradesh.</p>
        <p>Our state-of-the-art research and manufacturing unit is located in Hyderabad, where we use the advanced technology and techniques to ensure that our products meet the highest standards of quality. We are committed to providing our customers with safe, reliable, and cost-effective products that will help them to maximize their agricultural yields.</p>
        </div>
        <div className="image">
        <img
        src={Homeimage6}
        alt={`Image`}
          style={{borderRadius:'10%'}}
      />
         </div>
      </div>

      <div className="aboutpage">
        <div className="about">
        <h4> 
           About Our Manufacturing Unit and Packaging Unit
        </h4>
        <p>Our manufacturing unit is equipped with state-of-the-art machinery to ensure precision in formulation and consistency in product quality. The facility includes separate areas for chemical and biological pesticides to prevent cross-contamination, along with laboratories dedicated to testing for efficacy, safety, and regulatory compliance. Green manufacturing practices, such as energy-efficient processes and sustainable sourcing, are also incorporated to minimize environmental impact. The unit adheres to global safety standards, ensuring that every product meets the required quality and environmental regulations.
          </p>
        <p>Our packing unit focuses on the safe and secure packaging of products for distribution and end-use. It uses eco-friendly materials, such as biodegradable and recyclable options, to reduce environmental impact. Automated systems are employed for filling, labeling, and sealing products to ensure accuracy and efficiency. Specialized packaging options are available based on product types, such as liquid or granular formulations, and packaging sizes, including bulk and retail options. The unit maintains strict hygiene and safety standards, while also adhering to regulatory requirements for product labeling and packaging. Sustainability is a key focus, with efforts to reduce waste and use renewable materials wherever possible.
          </p>
        </div>
        <div className="image">
        <img
        src={Manufacturing}
        alt={`Image`}
          style={{borderRadius:'10%'}}
      />
         </div>
      </div>
    </Wrapper>
  )
}

export default About