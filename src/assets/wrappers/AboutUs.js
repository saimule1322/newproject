import styled from "styled-components";

const Wrapper =styled.main`

padding-bottom: 10px;
.about{
  background-color: #f4f4f4;
  text-align: left;
  border-radius: 5%;
}

.about h4 {
  font-size: 22px;
  font-weight: bold;
}

.about p {
  padding-top: 10px;
  font-size: 16px;
  line-height: 1.5;
}

@media(min-width: 992px){
.aboutpage{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 50px 0 100px;
 }
 .about{
    padding: 10px;
 }
 img{
    width:450px;
    height:350px
 }

.image{
    width: auto;
    padding: 20px;
}
}

@media(max-width:992px){
img{
width:100%;
height:100%
}
.aboutpage{
justify-content: center;
align-items: center;
margin: 20px;
}

}

`
export default Wrapper