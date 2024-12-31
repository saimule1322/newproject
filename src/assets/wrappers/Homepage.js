import styled from "styled-components";

const Wrapper = styled.div`

@media(min-width:992px){
    .image-container {
    position: relative;
    width: 100%; 
    height: 380px;
}

.nav-button {
  top: 50%;
}

.about {
  padding: 20px  20px 0 100px;
  width: 900px;
}

.aboutpage{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}
.boxes{
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  text-align:left;
  margin:0 150px;

}
.box{
  display: flex;
  flex-direction: row;
  text-align:left;
  flex-wrap:wrap;
  align-items: center;
justify-content: center;
}
.choose-item {
  margin-left: 100px;
}

.choose-items {
  width: 300px;
  margin:0 50px;

}
.choose {
  width:300px;
margin-left: 50px;
}


}

.nav-button {
  position: absolute;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  width: 50px; 
  height: 50px; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}


.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.image {
  width: 100%;
  height: 100%;
  opacity: 0; 
  transition: opacity 1s ease; 
}

.image-container img {
  opacity: 1; 
}

.dots-container {
  display: flex;
  justify-content: center;
  margin-top: -10px;
  z-index: 3000;
  opacity: 2;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: grey;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: white;
}

.dot:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.slider {
  margin-bottom: 30px;
}

.slider-item {
  background-size: cover;
  background-position: center;
  height: 400px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slider-text h1 {
  font-size: 32px;
  font-weight: bold;
}

.slider-text p {
  font-size: 18px;
  margin-top: 15px;
}

.about {
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



.choose-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: pink;
  border-radius: 10px;
}

.choose-item img {
  width: 120px;
  height: 100px;
  margin: 20px 0px 0 0px ;
  border-radius: 50px;

}

.choose-item h4 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
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

.choose {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: pink;
  border-radius: 10px;
}

.choose img {
  width: 120px;
  height: 100px;
  margin: 20px 0px 0 0px ;
  border-radius: 50px;

}

.choose h4 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 992px) {
  image-container {
  position: relative;
  width: 100%;
  height: 300px; 
}
.nav-button {
  top: 30%;
}
.about {
  padding: 0px 20px 20px 20px;
}
.aboutpage{
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.boxes{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.choose-item {
  width: 98%;
}
}
`

export default Wrapper