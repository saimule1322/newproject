import styled from "styled-components";

const Wrapper = styled.div`

@media(min-width:992px){
 
.box{
  display: flex;
  flex-direction: row;
  text-align:left;
  flex-wrap:wrap;
  align-items: center;
justify-content: center;
}

.choose-items {
  width: 300px;
  margin:0 50px;
}

}

.why-choose {
  padding: 50px 20px 5px 20px;
  background-color: #f9f9f9;
}

.why-choose h2 {
  font-size: 28px;
  font-weight: bold;
}

.why-choose p {
  font-size: 16px;
  margin-bottom: 20px;
  padding: 0px 10px;
  text-align: center;
}

.choose-items {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: pink;
  border-radius: 10px;
}

.choose-items img {
  width: 100%;
  height: 200px;
  /* margin-right: 20px; */
  border-radius: 10px 10px 0 0;
}

.choose-items h4 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 992px) {

.choose-item {
  width: 98%;
}
}
`

export default Wrapper