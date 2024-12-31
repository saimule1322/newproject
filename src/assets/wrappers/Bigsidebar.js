import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
    }
    .nav-links.fixed {
      position: fixed; /* Makes it fixed at the top */
      top: 0;
      z-index: 1000; /* Ensures it stays on top of other content */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for visibility */
    }

    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding: 0.5rem  6rem 0 6rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%; 
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      margin: 0rem 1rem;
      padding: 0.5 rem 1.5rem;
      text-transform: capitalize;
    }
    .nav-link:hover {
      color: var(--white);
      background: var(--orange);
      border-radius:5px;
    }
    .active {
      /* color: var(--primary-500); */
    }
    .pending {
      background: var(--background-color);
    }
    .mainlogo{
      clear: both;
      background-color:white;
    }
    .widget{
      background-color: red;
      float: right;
      margin-right:40px;
    }
  
.icon {
  background-color: #33901D;
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
  }
`;
export default Wrapper;
