import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from '../ImageContainer/ImageContainer';
import { Carousel } from 'react-bootstrap';
const CarouselComp = () => {
    return (
        <>
            <Carousel style={{ height: '500px' }}>
                <Carousel.Item>
                    <img src={Images.Scrap14} className="carousel1" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Images.Scrap16} className="carousel2" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Images.Scrap20} className="carousel3" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={Images.Scrap55} className="carousel4" alt="Scrap carousel" />
                    <Carousel.Caption>
                        <h3>Hidden CASH in THRASH</h3>
                        <p>Don't throw your scrap, let it earn some money for you..</p>
                        <Link className="btn animated fadeInUp" to="/pick-up">Contact us to pick and pay</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default CarouselComp;