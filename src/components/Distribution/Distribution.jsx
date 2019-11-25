import React, { useEffect } from 'react';
import Form from '../Form';

import './distribution-style.scss';

function Distribution() {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <div className="distribution">
            <div className="container">
                <h2 className="title-primary">Дистрибюция</h2>
                <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi est eligendi nobis, ratione perspiciatis quidem, similique inventore quos nisi, totam error atque sequi aliquid assumenda iusto ipsa nihil ducimus expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatem amet ullam delectus nam minus magnam dolorum nulla, vero vel tenetur illo. Totam similique nulla facilis commodi ipsam deleniti tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vel doloribus nemo voluptatum reprehenderit! Explicabo praesentium quae neque, beatae nam recusandae libero at, est dolorum maxime magni tempore, eligendi soluta!</p>
                <h2 className="title-secondary">Контактная форма</h2>
                <Form />
                <p className="text">Заполните форму и мы свяжемся с вами, и ответим на все вопросы. Для заполнения нужны следующие данные</p>
            </div>
        </div>
    )
}

export default Distribution;
