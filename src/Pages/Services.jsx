import React from 'react'
import { cuttingedgetechnology, fertilizers, fungicides, growthpromoters, Homeimage1,Homeimage2, Homeimage3, Homeimage4, Homeimage5, Homeimage6, insecticides, micronutrients, Mission, pesticides, plant, qualityproducts, values, vision } from '../assets/images/ilovepdf_pages-to-jpg'
import Wrapper from '../assets/wrappers/Services'

const Services = () => {
  return (
    <Wrapper>
    <div className="why-choose">
        <h2>We Provide different services for different types of Crops related issues</h2>
        <p>We offer high quality products, and a wide range of biotech products developed by research.</p>
        <div className='box'>
          <div className="choose-items">
            <img src={pesticides} alt="Infrastructure" />
            <h4>Bio Pesticides</h4>
            <p>
            Biopesticides are natural or biologically derived products used to control pests, offering a safer alternative to chemical pesticides. They are environmentally friendly, target specific pests, and reduce harm to non-target organisms, promoting sustainable agricultural practices and environmental conservation.
            </p>
          </div>
          <div className="choose-items">
            <img src={fertilizers} alt="Infrastructure" />
            <h4> Bio Fertilizers</h4>
            <p>Bio fertilizers are natural products that enhance soil fertility and promote plant growth by utilizing beneficial microorganisms. These fertilizers improve nutrient availability, support soil health, and reduce the need for synthetic chemicals, promoting sustainable agriculture and environmental conservation.
            </p>
          </div>
          <div className="choose-items">
            <img src={insecticides} alt="Infrastructure" />
            <h4> Bio Insecticides</h4>
            <p>Bio insecticides are natural or biologically derived products used to control insect pests, offering an eco-friendly alternative to synthetic chemicals. They use microorganisms, plant extracts, or natural compounds to target specific insects, reducing environmental impact and preserving beneficial organisms like pollinators.
            </p>
          </div>
          <div className="choose-items">
            <img src={fungicides}  alt="Quality Products" />
            <h4> Bio Fungicides</h4>
          <p>Bio fungicides are natural or biologically derived products used to control fungal diseases in plants. They typically contain microorganisms, such as bacteria or fungi, that inhibit the growth of harmful fungi, reduce disease spread, and promote plant health. Bio fungicides are environmentally friendly, safe for non-target organisms, and play a key role in sustainable agriculture by reducing the need for chemical fungicides.
             </p>
          </div>
          <div className="choose-items">
            <img src={micronutrients}  alt="Quality Products" />
            <h4>Micronutrients</h4>
          <p>Bio micronutrients are naturally occurring, biologically derived substances that provide essential trace elements for plant growth. These micronutrients, such as iron, zinc, copper, and manganese, are often delivered through microbial formulations, which enhance nutrient availability in the soil. Bio micronutrients improve soil health, support plant metabolism, and boost resistance to stress.
            </p>
          </div>
          <div className="choose-items">
            <img src={plant}  alt="Quality Products" />
            <h4>Growth Promoters</h4>
          <p>Bio growth promoters are natural or biologically derived substances, often including beneficial microorganisms like bacteria or fungi, that stimulate plant growth and enhance crop yields. These promoters work by improving nutrient uptake, promoting root development, increasing resistance to stress, pests, and diseases, and enhancing overall plant health.These products promote environmentally friendly farming practices.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Services