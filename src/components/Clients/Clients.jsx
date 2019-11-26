import React, { useEffect } from 'react';
import './clients-styles.scss';

function Clients() {

    useEffect(() => {
        window.scroll(0, 0);
    });
    
    return (
        <div className="clients">
            <div className="container">
                <h2 className="title-primary">Наши клиенты</h2>
                <div className="row">
                    <div className="img">
                        <picture>
                            <source srcSet="http://nurvape.ru/images/logos/webp/armango.webp" type="image/webp" />
                            <img src="http://nurvape.ru/images/logos/armango.png" alt="" />
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://nurvape.ru/images/logos/webp/papiroska.webp" type="image/webp" />
                            <img src="http://nurvape.ru/images/logos/papiroska.png" alt="" />
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://nurvape.ru/images/logos/webp/super-smok.webp" type="image/webp" />
                            <img src="http://nurvape.ru/images/logos/super-smok.png" alt="" />
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://nurvape.ru/images/logos/webp/vapeliga.webp" type="image/webp" />
                            <img src="http://nurvape.ru/images/logos/vapeliga.png" alt="" />
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://nurvape.ru/images/logos/webp/vapeteka.webp" type="image/webp" />
                            <img src="http://nurvape.ru/images/logos/vapeteka.png" alt="" />
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://nurvape.ru/images/logos/webp/vape-tiger.webp" type="image/webp" />
                            <img src="http://nurvape.ru/images/logos/vape-tiger.jpg" alt="" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;
