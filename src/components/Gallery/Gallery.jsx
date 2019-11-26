import React from 'react';
import Iframe from 'react-iframe';
import './gallery-styles.scss';

export default class Gallery extends React.Component {

    render() {
        return (
            <div className="gallery">
                <div className="container">
                    <h2 className="title-primary">Фото и видео материалы</h2>
                    <div className="review">
                        <h2 className="title-secondary">Обзор MR.Creamson</h2>
                        <div className="video">
                            <Iframe src="https://www.youtube.com/embed/bqKOIFOkyiw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                        </div>
                    </div>
                    <div className="review">
                        <h2 className="title-secondary">Обзор Cheerockeee</h2>
                        <div className="video">
                            <Iframe src="https://www.youtube.com/embed/N5oSTbv86xQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                        </div>
                    </div>
                    <div className="imgs">
                        <div className="row">
                            <div className="img">
                                <img src="http://nurvape.ru/images/classic-art.jpg" alt="" />
                            </div>
                            <div className="img">
                                <img src="http://nurvape.ru/images/macadamia-art.jpg" alt="" />
                            </div>
                            <div className="img">
                                <img src="http://nurvape.ru/images/chocolate-art.jpg" alt="" />
                            </div>
                            <div className="img">
                                <img src="http://nurvape.ru/images/banana-art.jpg" alt="" />
                            </div>
                            <div className="img">
                                <img src="http://nurvape.ru/images/kiwi-art.jpg" alt="" />
                            </div>
                            <div className="img">
                                <img src="http://nurvape.ru/images/pineapple.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

