import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(255, 234, 217, 1);
    display: flex;
    align-items: center;
    transition: var(--transition);
    visibility: hidden;
    width:260px;
    height:100%;
    
  }

  .logo1{
    position: absolute;
    top: 5px;
    left: 105px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
    z-index:10;
  }

  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }

  .content.fixed {
      position: fixed; /* Makes it fixed at the top */
      top: 0;
      z-index: 1; /* Ensures it stays on top of other content */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for visibility */
    }

  .content {
    background: var(--background-secondary-color);
    width: 90vw;
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 1rem;
    position : relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .close-btn {
    position: absolute;
    top: 1px;
    left: 15px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
    z-index:10;
  }

  .nav-links {
    position: absolute;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    top:30px;
    left:20px;
  }

  .nav-link {
    display: flex;
    
    align-items: center;
    color: var(--text-secondary-color);
    margin:1rem 2rem;
    padding: 0.5rem 1.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--white);
    background: var(--orange);
    border-radius:5px;
  }

  .active {
    color: var(--primary-500);
  }
  .icon {
  background-color: green;
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
      border: none ;      
      background-color: white;      
      text-decoration: none; 
    }

`
export default Wrapper;
