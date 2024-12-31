import styled from "styled-components";

const Wrapper = styled.aside`

.WhatsappBox {
  bottom: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  justify-content: center; 
  align-items: center; /* Vertically centers the text */
  width: 50px; /* Set the width of the box */
  height: 50px; /* Set the height of the box */
  background-color: green; /* Optional: Add background color for visibility */
  color: white; /* Text color */
  border-radius: 5px; /* Optional: Add border radius for styling */
  font-size: 16px; /* Optional: Change the font size */
  text-align: center; /* Ensures the text is centered if you have multiple lines */
}
.NavtoTop{
    bottom: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  justify-content: center; 
  align-items: center; /* Vertically centers the text */
  width: 50px; /* Set the width of the box */
  height: 50px; /* Set the height of the box */
  border-radius: 5px;
  font-size: 16px; /* Optional: Change the font size */
  text-align: center; /* Ensures the text is centered if you have multiple lines */
}

@media (min-width: 992px) {
  .NavtoTop{
    bottom:45px;
    }
}
@media (max-width: 992px) {
    .WhatsappBox{
    bottom:25px;
    right:15px
    }
    .NavtoTop{
    bottom:95px;
    right:15px
    }
}

`

export default Wrapper