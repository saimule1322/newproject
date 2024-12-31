import styled from "styled-components";

const Wrapper = styled.main`



.title{
font-size:24px;
font-style:sans-serif;
    margin-left: 1px;
    color:black;
    padding-bottom:10px;
    width:100%
}



.Productdetails .title {
  text-align: left; 
  font-weight: bold; 
  margin: 0;
}

p,ul,li{
  font-size:15px;
  color: #424242;
}

.Productdetails>img{
width: 300px;
height:300px
}

.description-list {
  list-style-type: disc; 
  padding-left: 20px; 
  color: black;
}

.description-list li {
  margin-bottom: 10px; 
}

@media (max-width: 992px) {

.Productdetails{
display: flex;
flex-direction: column;
padding:0px 5px 0px 20px
}

.maincontent{
    text-align:left;
    padding:30px 0 30px 0px 
}
.image{
    margin-left:-10px;
    display: flex;
    align-items:center;
    justify-content:center;
}

}


@media (min-width: 992px) {

.maincontent{
    font-family: 'Lato' 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding:40px 0 40px 200px;
    text-align: left; 

}
.Productdetails{
display: flex;
flex-direction: row;
margin-left: 10px;
width:1000px;
justify-content:space-between
}

}

`

export default Wrapper