import React, { useState, useEffect } from 'react';

import './form-style.scss';

function Form() {

    useEffect(() => {
        window.scroll(0, 0);
    });

    const [isDisabled, setDisabled] = useState(false);

    const disableForm = () => {
        setDisabled(true)
    }

    const enableForm = () => {
        setDisabled(false)
    }

    const validateName = (target) => {
        const data = target.value;
        const targetEl = target.nextElementSibling;

        const cleanClasses = () => {
            targetEl.classList.remove('empty');
            targetEl.classList.remove('numbers');
            targetEl.classList.remove('length');
        }

        cleanClasses();

        if(data.length === 0) {
            disableForm();
            targetEl.classList.add('empty');
        }else if (/\d/.test(data)) {
            disableForm();
            targetEl.classList.add('numbers');
        }else if (data.length < 2) {
            disableForm();
            targetEl.classList.add('length');
        } else {
            cleanClasses();
            enableForm();
        }
    }

    const validatePhone = (target) => {
        const data = target.value.trim();
        const targetEl = target.nextElementSibling;

        const cleanClasses = () => {
            targetEl.classList.remove('empty');
            targetEl.classList.remove('letters');
            targetEl.classList.remove('length');
        }

        cleanClasses();


        if(data === '' || data.length === 0) {
            cleanClasses();
            disableForm();
            targetEl.classList.add('empty');
        }else if (!/(\+\d+)|(\d+)/.test(data)) {
            disableForm();
            targetEl.classList.add('letters');
        }else if (data.length < 9) {
            disableForm();
            targetEl.classList.add('length');
        } else {
            cleanClasses();
            enableForm();
        }
    }

    const validateEmail = (target) => {
        const data = target.value.trim();
        const targetEl = target.nextElementSibling;

        const cleanClasses = () => {
            targetEl.classList.remove('empty');
            targetEl.classList.remove('length');
            targetEl.classList.remove('validEmail');
        }

        cleanClasses();


        if(data === '' || data.length === 0) {
            disableForm();
            targetEl.classList.add('empty');
        }else if (!/.+@.+\..+/i.test(data)) {
            disableForm();
            targetEl.classList.add('validEmail');
        }else if (data.length < 7) {
            disableForm();
            targetEl.classList.add('length');
        } else {
            cleanClasses();
            enableForm();
        }
    }

    const submitBtn = isDisabled ? <button type="submit" disabled className="input-submit btn-primary">Отправить</button> : <button type="submit" className="input-submit btn-primary">Отправить</button>;


    const validateTextarea = (target) => {
        const data = target.value.trim();
        const targetEl = target.nextElementSibling;

        const cleanClasses = () => {
            disableForm();
            targetEl.classList.remove('empty');
        }

        cleanClasses();


        if(data === '' || data.length === 0) {
            targetEl.classList.add('empty');
        }else {
            cleanClasses();
            enableForm();
        }
    }

    return (
        <form method="post" className="flex-between form">
            <label className="label-name">
                <input type="text" onBlur={(e) => validateName(e.target)} name="name" placeholder="Ваше имя" className="form-input input-name" required />
                <p className="errorField">
                    <span className="empty">Пожалуйста заполните поле</span>
                    <span className="numbers">Поле не должно содержать номера</span>
                    <span className="length">Не менее чем 2 буквы</span>
                </p>
            </label>
            <label className="label-phone">
                <input type="tel" onBlur={(e) => validatePhone(e.target)} name="phone" placeholder="Ваш номер" className="form-input input-phone"  required />
                <p className="errorField">
                    <span className="empty">Пожалуйста заполните поле</span>
                    <span className="letters">Поле не должно содержать букв</span>
                    <span className="length">Не менее чем 9 символов</span>
                </p>
            </label>
            <label className="label-email">
                <input type="email" onBlur={(e) => validateEmail(e.target)} name="email" placeholder="Ваш email" className="form-input input-email"  required />
                <p className="errorField">
                    <span className="empty">Пожалуйста заполните поле</span>
                    <span className="length">Не менее чем 7 символов</span>
                    <span className="validEmail">Введите валидный email адресс!</span>
                </p>
            </label>
            <label className="label-textarea">
                <textarea name="message" onBlur={(e) => validateTextarea(e.target)} placeholder="Ваше сообщение" className="form-input input-textarea" required></textarea>
                <p className="errorField">
                    <span className="empty">Пожалуйста заполните поле</span>
                </p>
            </label>
            <div className="text-center">
                {submitBtn}
            </div>
        </form>
    )
}

export default Form;
