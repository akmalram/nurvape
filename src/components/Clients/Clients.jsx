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
                            <source srcSet="http://maxstroy.uz/logos/webp/armango.webp" type="image/webp" />
                            <img src="http://maxstroy.uz/logos/armango.jpg" alt=""/>
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://maxstroy.uz/logos/webp/papiroska.webp" type="image/webp" />
                            <img src="http://maxstroy.uz/logos/papiroska.jpg" alt=""/>
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://maxstroy.uz/logos/webp/super-smok.webp" type="image/webp" />
                            <img src="http://maxstroy.uz/logos/super-smok.jpg" alt=""/>
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://maxstroy.uz/logos/webp/vapeliga.webp" type="image/webp" />
                            <img src="http://maxstroy.uz/logos/vapeliga.jpg" alt=""/>
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://maxstroy.uz/logos/webp/vapeteka.webp" type="image/webp" />
                            <img src="http://maxstroy.uz/logos/vapeteka.jpg" alt=""/>
                        </picture>
                    </div>
                    <div className="img">
                        <picture>
                            <source srcSet="http://maxstroy.uz/logos/webp/vape-tiger.webp" type="image/webp" />
                            <img src="http://maxstroy.uz/logos/vape-tiger.jpg" alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;
