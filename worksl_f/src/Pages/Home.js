import React, {useEffect} from 'react';
import './Css/Home.css';
import Carousel from 'react-bootstrap/Carousel'
import {useTranslation} from 'react-i18next';

const Home = () =>{
    const {t, i18n} = useTranslation();
    return(
        <div className="App">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img1.akspic.ru/originals/7/6/5/4/2/124567-oficialnaya_odezhda-kostyum-dzhentlmen-upravlenie-rabota-1920x1080.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 id="Name">WorkSl</h1>
      <p id="SideName">{t("home.first")}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img1.akspic.ru/originals/0/5/5/4/2/124550-biznes-investicii-yurist-finansy-oblachnye_vychisleniya-1920x1080.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 id="NameC">{t("home.second.main")}</h3>
      <p id="SideName">{t("home.second")}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img3.akspic.ru/originals/0/6/5/4/2/124560-zakon-tehnologii-dzhazovyj_pianist-muzykalnyj_instrument-klaviatura-1920x1080.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 id="NameC">{t("home.third.main")}</h3>
      <p id="SideName">{t("home.third")}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        
    )
}

export default Home;