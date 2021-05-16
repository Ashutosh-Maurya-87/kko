import React from 'react';
import '../Card/Card.css';
import { Images } from '../ImageContainer/ImageContainer'

const Card = () => {
    return (
        <>
            <div className="cardContainer">
                <div className="section-header" >
                    <h2>Review From Client</h2>
                </div>
                <div className="containerCardBox">
                    <div className="containerCard">
                        <div className="images">
                            <img className="cardImg" src={Images.Vikram} alt="users" />
                        </div>

                        <div className="product">
                            <h1>Vikram Padukone</h1>
                            <h6>Software Engineer</h6>
                            <p className="desc">This is very appreciateable that scrapDealer came on time in uniform and digital weighing scale. after deal the amount is credited in my account.
                    </p>
                        </div>
                    </div>

                    <div className="containerCard">
                        <div className="images">
                            <img className="cardImg" src={Images.Vanya} alt="users" />
                        </div>

                        <div className="product">
                            <h1>Vanya Desai</h1>
                            <h6>House Wife</h6>
                            <p className="desc">This is very appreciateable that scrapDealer came on time in uniform and digital weighing scale. after deal the amount is credited in my account.
                    </p>
                        </div>
                    </div>

                    <div className="containerCard">
                        <div className="images">
                            <img className="cardImg" src={Images.Lavanya} alt="users" />
                        </div>

                        <div className="product">
                            <h1>Lavanya Pandey</h1>
                            <h6>GRE, Park Palaza</h6>
                            <p className="desc">This is very appreciateable that scrapDealer came on time in uniform and digital weighing scale. after deal the amount is credited in my account.
                    </p>
                        </div>
                    </div>

                    <div className="containerCard">
                        <div className="images">
                            <img className="cardImg" src={Images.Arun} alt="users" />
                        </div>

                        <div className="product">
                            <h1>Arun Bishnoi</h1>
                            <h6>Student MBA</h6>
                            <p className="desc">This is very appreciateable that scrapDealer came on time in uniform and digital weighing scale. after deal the amount is credited in my account.
                    </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;