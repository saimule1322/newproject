import styled from 'styled-components';

const Wrapper = styled.aside`
  /* height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color); */
  /* position: fixed;
  top:0; */
  .nav-center {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    position: sticky  ;

  }

  .center.fixed {
      position: fixed; /* Makes it fixed at the top */
      top: 0.5rem;
      z-index: 1; /* Ensures it stays on top of other content */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for visibility */
    }

  
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 100px;
   justify-content: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .icon {
  background-color: black;
  padding: 10px;
  display: flex; 
  justify-content: flex-end;
  gap: 15px;
}

.icon a:hover {
  opacity: 0.8; 
}

    .ftco-animate{
      display: inline-flex;         
      justify-content: center;     
      align-items: center;          
      width: 30px;                
      height: 30px;                
      border-radius: 50%;           
      border: 2px solid black;      
      background-color: white;      
      text-decoration: none; 
    }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
