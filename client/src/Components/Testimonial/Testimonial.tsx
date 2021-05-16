import React from 'react';

const Testimonial = () =>{
    return(
        <>
        <div className="conatiner-fluid testimonial" style={{ width:"75%"}}>
                <div className="section-header">
                    <h2>Review From Client</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <i className="fa fa-quote-right"></i>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src="img/testimonial-1.jpg" alt=""/>
                            </div>
                            <div className="col-9">
                                <h2>Client Name</h2>
                                <p>Profession</p>
                            </div>
                            <div className="col-12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <i className="fa fa-quote-right"></i>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src="img/testimonial-2.jpg" alt=""/>
                            </div>
                            <div className="col-9">
                                <h2>Client Name</h2>
                                <p>Profession</p>
                            </div>
                            <div className="col-12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <i className="fa fa-quote-right"></i>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src="img/testimonial-3.jpg" alt=""/>
                            </div>
                            <div className="col-9">
                                <h2>Client Name</h2>
                                <p>Profession</p>
                            </div>
                            <div className="col-12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <i className="fa fa-quote-right"></i>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src="img/testimonial-4.jpg" alt=""/>
                            </div>
                            <div className="col-9">
                                <h2>Client Name</h2>
                                <p>Profession</p>
                            </div>
                            <div className="col-12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </>
    )
}
export default Testimonial;