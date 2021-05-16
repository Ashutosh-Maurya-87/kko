import React from 'react';
import { Link } from 'react-router-dom';

const TeamStart = () => {
    return (
        <>
            <div className="team">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Expert Attorneys</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-1.jpg" alt="TeamImage" />
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>Business Consultant</p>
                                    <div className="team-social">
                                        <Link className="social-tw" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="social-fb" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="social-li" to=""><i className="fab fa-linkedin-in"></i></Link>
                                        <Link className="social-in" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-2.jpg" alt="TeamImage" />
                                </div>
                                <div className="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Criminal Consultant</p>
                                    <div className="team-social">
                                        <Link className="social-tw" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="social-fb" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="social-li" to=""><i className="fab fa-linkedin-in"></i></Link>
                                        <Link className="social-in" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-3.jpg" alt="TeamImage" />
                                </div>
                                <div className="team-text">
                                    <h2>Gloria Edwards</h2>
                                    <p>Divorce Consultant</p>
                                    <div className="team-social">
                                        <Link className="social-tw" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="social-fb" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="social-li" to=""><i className="fab fa-linkedin-in"></i></Link>
                                        <Link className="social-in" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-4.jpg" alt="TeamImage" />
                                </div>
                                <div className="team-text">
                                    <h2>Josh Dunn</h2>
                                    <p>Immigration Consultant</p>
                                    <div className="team-social">
                                        <Link className="social-tw" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="social-fb" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="social-li" to=""><i className="fab fa-linkedin-in"></i></Link>
                                        <Link className="social-in" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamStart;