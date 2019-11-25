import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faTwitter,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

import {
    faLayerGroup,
    faMailBulk,
    faUsers,
    faImages,
    faBookmark,
    faBars,
    faAddressCard
} from '@fortawesome/free-solid-svg-icons';


// Styles
import './sidebar-styles.scss';

function Sidebar() {

    const [isOpen, setOpen] = useState(false);

    const toggleSidebar = () => {
        if(!isOpen) setOpen(true)
        else setOpen(false);
    }

    const closeSidebar = () => {
        setOpen(false);
    }

    let activenessClasses = `${isOpen ? 'active' : ''}`;

    let handleActiveLink = (e) => {
        document.querySelectorAll('.sidebar .menu .link').forEach(one => {
            one.classList.remove('active');
        });

        let findParent = (el) => {
            if(el.classList.contains('link')) {
                el.classList.add('active');
            }else {
                findParent(el.parentNode)
            }
        }

        let target = e.target;

        if(target.classList.contains('link')) {
            target.classList.add('active');
        }else {
            findParent(target);
        }
    }

    return (
        <React.Fragment>
            <aside className={`sidebar ${activenessClasses}`}>
                <div className="logo">
                    <Link to="/">
                        <img className="small" src="http://maxstroy.uz/nurimages/NURVAPE-LOGO.png" alt="Logotype"/>
                    </Link>
                </div>
                <div className="menu">
                    <ul className="list">
                        <li className="item">
                            <Link to="/catalog" className="link" onClick={(e) => {
                                handleActiveLink(e);
                                closeSidebar();
                            }}>
                                <FontAwesomeIcon icon={faLayerGroup} />
                                <span>Каталог</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/distribution" className="link" onClick={(e) => {
                                handleActiveLink(e);
                                closeSidebar();
                            }}>
                                <FontAwesomeIcon icon={faMailBulk} />
                                <span>Дистрибюция</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/clients" className="link" onClick={(e) => {
                                handleActiveLink(e);
                                closeSidebar();
                            }}>
                                <FontAwesomeIcon icon={faUsers} />
                                <span>Нашы клиенты</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/about" className="link" onClick={(e) => {
                                handleActiveLink(e);
                                closeSidebar();
                            }}>
                                <FontAwesomeIcon icon={faAddressCard} />
                                <span>О нас</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/gallery" className="link" onClick={(e) => {
                                handleActiveLink(e);
                                closeSidebar();
                            }}>
                                <FontAwesomeIcon icon={faImages} />
                                <span>Фото и видео <br/> материалы </span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/contacts" className="link" onClick={(e) => {
                                handleActiveLink(e);
                                closeSidebar();
                            }}>
                                <FontAwesomeIcon icon={faBookmark} />
                                <span>Контакты</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="socials">
                    <a href="http://any.site.com">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="http://any.site.com">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="http://any.site.com">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                <p className="copyright">Copyright © 2019</p>
                <div className={`toggler-btn ${activenessClasses}`}>
                    <button onClick={() => toggleSidebar()}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </aside>
            <div className="background" onClick={() => closeSidebar()}></div>
        </React.Fragment>
    )
}

export default Sidebar;
