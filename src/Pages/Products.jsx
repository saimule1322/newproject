import React from 'react';
import Wrapper from '../assets/wrappers/Products';
import Productdetails from '../utils/ProductDetails';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <Wrapper>
      <div className='parent-container'>
      <div className="products-container">
        {Productdetails.map((product) => (
          <div className="product" key={product.name}>
            <p>
            <Link to={`/Products/${product.name}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </p>
            <p>
            <Link to={`/Products/${product.name}`}>
            <a >{product.name}</a>

              </Link>
            </p>
          </div>
        ))}
        </div>
      </div>
      <Outlet />
    </Wrapper>
  );
};

export default Products;
