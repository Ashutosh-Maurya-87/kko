import React from 'react';
import {Link ,useLocation} from 'react-router-dom';
import {Images} from '../ImageContainer/ImageContainer';

const Service = () =>{

    const location = useLocation();
    const dispay = location.pathname.includes('/homepage')
    return(
        <>
        <div className="container-fluid service" style={{width:"75%"}}>
                <div className="section-header">
                    <h2>Our Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                {/* <i className="fa fa-landmark"></i> */}
                                <img src={Images.Scrap12} className="service-icon" width="98%" height="98%" alt="scrap12"/>
                            </div>
                            <h3>Scrap Pickup</h3>
                            <p>
                            Raise a pickup now! Our vendor will come to you on the scheduled time to pick up your scrap in exchange for money.
                            </p>
                            <Link className="btn" to="">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <img src={Images.Scrap63} className="service-icon" width="fit-content" height="98%" alt="scrap63"/>
                                {/* <i className="fa fa-users"></i> */}
                            </div>
                            <h3>Scrap Rate Calculator</h3>
                            <p>
                            Want to know the worth of your scrap before selling it of? Use our calculator to calculate how much your waste is worthy.
                            </p>
                            <Link className="btn" to="">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <img src={Images.Scrap85} className="service-icon" width="98%" height="98%" alt="scrap85"/>
                                {/* <i className="fa fa-hand-holding-usd"></i> */}
                            </div>
                            <h3>Corporate Tie-up</h3>
                            <p>
                            We have customized panel for corporates to systematically get rid of the scrap and get certificates of recycling.
                            </p>
                            <Link className="btn" to="">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <img src={Images.PaperShred} className="service-icon" width="98%" height="98%" alt="scrap85"/>
                            </div>
                            <h3>Paper Shredding</h3>
                            <p>
                                We make you secrets secret.
                            </p>
                            <Link className="btn" to="">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                            <img src={Images.Sanitization} className="service-icon" width="98%" height="98%" alt="scrap85"/>
                            </div>
                            <h3>Sanitization</h3>
                            <p>We make your home and workplace sanitized and hygiene to protect you from viral deceases like Covid19
                            </p>
                            <Link className="btn" to="">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-globe"></i>
                            </div>
                            <h3>Lorem ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <Link className="btn" to="">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;