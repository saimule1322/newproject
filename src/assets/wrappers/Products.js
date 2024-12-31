import styled from 'styled-components';

const Wrapper = styled.main`

@media (min-width: 992px) {
    .products-container {
       margin:0px 40px;
  padding: 20px;

    }
}

.products-container {
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin:10px
}

.product img {
  max-width: 100%; /* Ensure image doesn't stretch */
  height: auto;
  padding:30px
}

.product a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.product:hover {
  background-color: pink; 
}

`
export default Wrapper;
