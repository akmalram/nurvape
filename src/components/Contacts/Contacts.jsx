import React, { useEffect } from 'react';
import Iframe from 'react-iframe';
import Form from '../Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

import './contacts-styles.scss';

function Contacts() {
    useEffect(() => {
        window.scroll(0, 0);
    });

    return (
        <div className="contacts">
            <div className="row-inner">
                <div className="right">
                    <div className="info hide-sm">
                        <h2 className="title-primary hide-sm">Контакты</h2>

                        <p className="info-heading">Телефон: </p>
                        <p className="info-value"><a href="tel:89671555238">8(967) 155–52–38</a></p>
                        <p className="info-heading">Время работы:</p>
                        <p className="info-value">ПН-СБ с 10:00 – 21:00</p>
                        <p className="info-heading">Мы в соц. сетях:</p>
                        <div className="info-value">
                            <a className="socials-icon" href="http://any.site.com">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className="socials-icon" href="http://any.site.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="socials-icon" href="http://any.site.com">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                    <Iframe className="right-iframe" src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d904.7300729935251!2d37.62262455686545!3d55.75243170171207!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5962e69605%3A0xa4cf168ae7cb3ae5!2sSt.%20Basil&#39;s%20Cathedral!5e1!3m2!1sen!2sus!4v1574393522559!5m2!1sen!2sus" frameBorder="1" allowfullscreen="" />
                </div>
                <div className="contact-form">
                    <h2 className="title-primary show-sm">Контакты</h2>
                    <div className="info show-sm">
                        <h2 className="title-primary hide-sm">Контакты</h2>

                        <p className="info-heading">Телефон: </p>
                        <p className="info-value"><a href="tel:89671555238">8(967) 155–52–38</a></p>
                        <p className="info-heading">Время работы:</p>
                        <p className="info-value">ПН-СБ с 10:00 – 21:00</p>
                        <p className="info-heading">Мы в соц. сетях:</p>
                        <div className="info-value">
                            <a className="socials-icon" href="http://any.site.com">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className="socials-icon" href="http://any.site.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="socials-icon" href="http://any.site.com">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                    <h2 className="title-secondary">Контактная форма</h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contacts
