import React from 'react';

const FeatureTop = () =>{
    return(
        <>
        <div className="feature-top">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-2 col-sm-6">
                        <div className="feature-item">
                            <i className="far fa-check-circle"></i>
                            <h3>Swatchh Bharat</h3>
                            <p>Be the part of Swatchh Bharat Abhiyan</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="feature-item">
                            <i className="fa fa-user-tie"></i>
                            <h3>Vendors</h3>
                            <p>Authorised and trusty vendors at doorstep</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="feature-item">
                            <i className="far fa-thumbs-up"></i>
                            <h3>Recycle</h3>
                            <p>100%</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="feature-item">
                        <i className="fas fa-truck-loading"></i>
                            <h3>Order</h3>
                            <p>29191+</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="feature-item">
                        <i className="fas fa-hand-sparkles"></i>
                            <h3>Sanitization</h3>
                            <p>House/ workspace sanitization</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="feature-item">
                            <i className="far fa-handshake"></i>
                            <h3>Support</h3>
                            <p>Quick Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
export default FeatureTop;