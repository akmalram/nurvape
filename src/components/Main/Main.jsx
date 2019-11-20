import React from 'react'
import { Link } from 'react-router-dom';
import './main-styles.scss'

function Main() {
    return (
        <main className="main">
            <div className="flex-center">
                <h1 className="page-title">GO SHOP NOW</h1>
                <Link to="/catalog/" className="btn-primary">
                    Перейти в каталог
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
            </div>
        </main>
    )
}

export default Main
