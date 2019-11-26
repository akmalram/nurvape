import React from 'react';
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faVk,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

import 'swiper/css/swiper.min.css';
import './about-styles.scss';

function About() {

    const params = {
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }


    return (
        <div className="about">
            <div className="container">
                <h1 className="title-primary">О нас</h1>
                <p className="info">Продукция от компании <strong>NUR VAPE</strong> выпускается с 2016 года. Для производства нашей продукции мы используем только самые качественные и лучшие ингредиенты со всего мира. Мы имеем свое собственное производство и налаженную логистическую цепочку поставок. Доставка осуществляется во все страны мира, за исключеним стран, где запрещена данная продукция. Продукция от <strong>NUR VAPE</strong> реализуется в 10 странах мира. Вместе с продукцией вы получите полный перечень документов.</p>
                <div className="slider">
                    <Swiper {...params}>
                        <div>
                            <img src="http://nurvape.ru/images/cheerockeee-banner.jpg" alt="" />
                        </div>
                        <div>
                            <img src="http://nurvape.ru/images/creamson-banner.jpg" alt="" />
                        </div>
                        <div>
                            <img src="http://nurvape.ru/images/juicesus_banner.jpg" alt="" />
                        </div>
                    </Swiper>
                </div>
                <div className="socials">
                    <a href="https://www.instagram.com/nurgroup/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="http://any.site.com">
                        <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a href="http://any.site.com">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default About;
