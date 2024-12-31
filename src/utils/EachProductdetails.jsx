import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Productdetails from '../utils/ProductDetails';
import Wrapper from '../assets/wrappers/Eachproductdetails';

const EachProductdetails = () => {
  const { productName } = useParams();  


  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = Productdetails.find((p) => p.name === productName);
    setProduct(selectedProduct);
  }, [productName]);

  return (
    <Wrapper>
    <div className='maincontent '>
      {product ? (
        <div className='Productdetails' >
         <div>
          <h1 className='title' style={{fontSize:'28px'}}>{product.name}</h1>
          <ul className='description-list'>
                {product.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>  

          <h5 className='title'>Recommended Crops </h5>
          <p>{product.Crops}
          </p>
          <h5 className='title'>Dosage </h5>
          <p>{product.Dosage}
          </p>
          </div>
      <div className='image'>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: 'auto', height: '400px' }}
          />
     </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
   </Wrapper>
  );
};

export default EachProductdetails;
