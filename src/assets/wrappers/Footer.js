import styled from "styled-components";

const Wrapper = styled.section`
  background-color :white;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin:0px auto;

.contact-list li {
  display: flex;
  align-items: center; 
  margin-bottom: 5px; 
}

.text{
  margin-left: 10px;
  font-size:14px;
}

 .footer{
 display: flex;
 flex-direction:row;
 justify-content: space-evenly;
 font-family: 'Lato' ,'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }
 .footer-heading{
 margin-bottom: 20px;
 color:black
 }
 .widget{
 padding-top:10px;
 justify-content:space-between;
 }
 .mainfooter{
  padding-top:20px;
 background-color: #ffead9;


 }


 @media (max-width: 600px) {
.footer{
 display: flex;
 flex-direction:column;
 }
  }
 `

 export default Wrapper