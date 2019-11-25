import React, { useState, useEffect } from 'react';
import { data } from '../../assets/data';
import './catalog-styles.scss';

// Components
import Modal from '../Modal';

function Catalog() {

    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
        setModalActive(true);
    }

    const modalClose = () => {
        setModalActive(false);
    }

    const renderProduct = (data) => {
        const {
            name,
            shortDesc,
            volume,
            alcoholVolume,
            ratio,
            imageUrl,
            imageWebpUrl
        } = data;

        return (
            <div className="product" key={name}>
                <div className="product-img">
                    <picture>
                        <source srcSet={imageWebpUrl} type="image/webp"/>
                        <img src={imageUrl} alt={shortDesc} />
                    </picture>
                </div>
                <h3 className="product-title">{name}</h3>
                <p className="product-desc">{shortDesc}</p>
                <ul>
                    <li className="product-info">{volume}мл</li>
                    <li className="product-info">{alcoholVolume}мг</li>
                    <li className="product-info">{ratio}PG/VG</li>
                </ul>
                <div className="text-center">
                    <button onClick={() => openModal()} className="modal-order-form-openbtn btn-primary">Заказать</button>
                </div>
            </div>
        );
    }

    const renderRow = (data = [], classes = []) => {
        let result = data.map((element, index) => {

            const { categoryName, products } = element;


            const product = products.map(one => {
                return renderProduct(one);
            });

            return (
                <div key={categoryName} className={`category ${classes[index] ? classes[index] : ''}`}>
                    <h2 className="category-title">{categoryName}</h2>
                    <div className="container">
                        <div className="row">
                            {product}
                        </div>
                    </div>
                </div>
            );
        });

        return result;
    }

    const rows = renderRow(data.categories, ['creamson', 'cheerockeee', 'juicesus']);
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <div className="catalog">
            <div className="container">
                <h1 className="title-primary">Наши продукции</h1>
                {rows}
            </div>
            <Modal modalClass="order-modal" modalActive={modalActive} disactivate={modalClose} />
        </div>
    )
}

export default Catalog;