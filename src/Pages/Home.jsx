import React, { useEffect, useState } from 'react'
import { cuttingedgetechnology, fertilizers, fungicides, growthpromoters, Homeimage1,Homeimage2, Homeimage3, Homeimage4, Homeimage5, Homeimage6, insecticides, micronutrients, Mission, pesticides, plant, qualityproducts, values, vision } from '../assets/images/ilovepdf_pages-to-jpg'
import Wrapper from '../assets/wrappers/Homepage'

const Home = () => {
  const images = [
    Homeimage1, // Replace with your actual image sources
    Homeimage2,
    Homeimage3,
    Homeimage4,
    // Homeimage5,
    // Homeimage6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 4500); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Wrapper>
      <div>
      <div className="image-container">
      <div className="nav-button prev" onClick={prevImage}>&lt;</div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="image"
      />
      <div className="nav-button next" onClick={nextImage}>&gt;</div>
    </div>

    <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
      </div>
      <div>
      <div className="aboutpage">
        <div className="about">
        <h4> VEDA SRI AGRITECH is a pioneer in the Research,Production and Distribution of Best quality Bio fertilizers,Bio pesticides,Bio fungicides, micronutrients, and organic growth promoters.</h4>
        <p>Our Company is dedicated to providing the Best quality of Bio fertilizers, Bio pesticides, Bio fungicides , micronutrients, and organic growth promoters.Our Company is one of the leading producers and suppliers of these products throughout India, with a special focus on the states of Telangana and Andhra Pradesh.</p>
        <p>Our state-of-the-art research and manufacturing unit is located in Hyderabad, where we use the advanced technology and techniques to ensure that our products meet the highest standards of quality. We are committed to providing our customers with safe, reliable, and cost-effective products that will help them to maximize their agricultural yields.</p>
        </div>
        <div>
        <img
        src={Homeimage6}
        alt={`Image ${currentIndex + 1}`}
         width='90%' height='100%' style={{borderRadius:'10%'}}
      />
         </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose">
        <h2>What's Special About Us</h2>
        <p>We offer high quality products, and a wide range of biotech products developed by research.</p>
        <div className='boxes'>
          <div className="choose-item">
            <img src={cuttingedgetechnology} alt="Infrastructure" />
            <h4>Cutting Edge Technology and Research</h4>
            <p>
              We are mainly focused on improving the efficacy, safety, and sustainability of pest control methods. Innovations are emerging from multiple disciplines, such as biotechnology, artificial intelligence (AI), nanotechnology, and ecological science.We prioritize eco-friendly alternatives, using biodegradable and plant-based ingredients to promote sustainable agriculture.
           </p>
          </div>
          <div className="choose-item">
            <img src={qualityproducts}  alt="Quality Products" />
            <h4>Quality Products</h4>
          <p>
          Quality pesticide products are developed through rigorous researchy.Extensive R&D focuses on creating effective formulations with precise potency and minimal impact on non-target species. Stringent quality control processes ensure that every batch meets safety and regulatory standards, including toxicity and environmental impact assessments.
          </p>
          </div>
        </div>
      </div>

      <div className="why-choose">
        <h2>Our Products</h2>
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
    </div>

    <div className="why-choose">
        <h2>VEDA SRI AGRITECH pvt Lmt</h2>  
        <p>One of the leading manufacturers of the Biochemicals. We are keen to grow our network across India by 2028 .</p>
        <div className='boxes'>
          <div className="choose">
            <img src={Mission} alt="Infrastructure" />
            <h4> Our Misson</h4>
            <p>
            Our mission is to provide innovative, effective, and sustainable pest control solutions that empower farmers, protect ecosystems, and enhance food security. We are committed to creating high-quality products that offer maximum efficacy while minimizing environmental impact.
             </p>
          </div>
          <div className="choose">
            <img src={vision}  alt="Quality Products" />
            <h4>Vision</h4>
          <p>our vision is to be a global leader in sustainable pest management, driving innovation and excellence in every aspect of our business. We aim to revolutionize the agricultural industry by providing advanced, environmentally responsible pest control solutions that enhance crop productivity while preserving the health of our planet
            </p>
          </div>
          <div className="choose">
            <img src={values}  alt="Quality Products" />
            <h4>Our Core Values</h4>
          <p> we are driven by innovation, sustainability, and integrity, delivering effective, eco-friendly pest control solutions. Our commitment to excellence, safety, and customer satisfaction ensures we support a healthier, more sustainable future for agriculture.
            </p>
          </div>
        </div>
    </div>

      </Wrapper>
  )
}

export default Home