import React from 'react';
import {Images} from '../ImageContainer/ImageContainer';
const Feature = () =>{
    return(
        <>
            <div className="container-fluid" style={{width:"75%", marginTop:"10px"}}>
        <div className="feature">
                <div className="row">
                    <div className="col-md-7">
                        <div className="section-header">
                            <h2 className="blackh2">Why Choose Us</h2>
                        </div>
                        <div className="row align-items-center feature-item">
                            <div className="col-5">
                                <div className="feature-icon">
                                    <i className="fab fa-pagelines"></i>
                                </div>
                            </div>
                            <div className="col-7">
                                <h3>Environment Friendly</h3>
                                <p>
                                    Ours and yours little effort can our environment litter free.
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center feature-item">
                            <div className="col-5">
                                <div className="feature-icon">
                                    <i className="fas fa-praying-hands"></i>
                                </div>
                            </div>
                            <div className="col-7">
                                <h3>Genuine and Trust vendors</h3>
                                <p>
                                    A verified and genuine scrap dealers will be at your doorstep, Because we concern your security.
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center feature-item">
                            <div className="col-5">
                                <div className="feature-icon">
                                    <i className="fas fa-hand-holding-usd"></i>
                                </div>
                            </div>
                            <div className="col-7">
                                <h3>Extra Income</h3>
                                <p>
                                    We are like converters, who converts your scrap in cash.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="feature-img">
                            <img src={Images.Scrap22} alt="Feature"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Feature;