import styled from 'styled-components';

const Wrapper = styled.section`

input,textarea{
    border:1px solid black;
}
.ftco-animate{
      display: inline-flex;         
      justify-content: center;     
      align-items: center;          
      width: 50px;                
      height: 50px;                
      border-radius: 50%;           
      border: none ;      
      background-color: white;      
      text-decoration: none; 
      margin-right: 10px;
    }
    .boxes {
  display: flex;            
  align-items: center;       
  padding: 10px;             
  background-color: #fff;     
  border-radius: 8px;       
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);  
  margin-top: 5px;
}



.innercontent {
  flex-grow: 1;  
  width:250px ;   
  word-wrap: break-word;      
  overflow-wrap: break-word;  
  word-break: break-word;     
  padding-left: 10px;         
}

p {
  margin: 0;                  
  font-size: 16px;           
}

@media (min-width: 992px) {
    .contactform{
        display: flex;
        flex-direction:row;
        padding-top:80px;
    padding-bottom:10px;
    margin: 0px 20% 0 23%;

    }
    .details{
         padding-right:12%; 
        text-align:left
    }
    .formdetails{
        padding-left:12%; 
    }
    .map{
       
    }
}

@media (max-width: 992px) {
    .contactform{
    display: flex;
    flex-direction:column;
    margin-bottom:10px;
    margin-top: 20px;
    }
    .formdetails{
        padding: 20px;
    }
    .boxes{
        margin: 10px;
    }
    .map{
        margin-bottom:20px
    }
}

`
export default Wrapper