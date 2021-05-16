import React from 'react';
import { Link } from 'react-router-dom';
import NewsLetter from '../NewsLetter/NewsLetter';
const Footer = () => {
    return (
        <>  <NewsLetter/>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-about">
                                <h2>About Us</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat neque
                            </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="footer-link">
                                        <h2>Services Areas</h2>
                                        <Link to="/pick-up">Scrap Pickup</Link>
                                        <Link to="/scrap-calculator">Scrap Rate Calculator</Link>
                                        <Link to="tie-up">Corporate Tie-up</Link>
                                        <Link to="/recycle">Recycle</Link>
                                        <Link to="">Immigration Law</Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="footer-link">
                                        <h2>Useful Pages</h2>
                                        <Link to="/about">About Us</Link>
                                        <Link to="/scrap-calculator">Scrap calculator</Link>
                                        <Link to="/contact">Contact</Link>
                                        <Link to="/testimonials">Testimonials</Link>
                                        <Link to="/faq">FAQs</Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="footer-contact">
                                        <h2>Get In Touch</h2>
                                        <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                        <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                        <p><i className="fa fa-envelope"></i>info@example.com</p>
                                        <div className="footer-social">
                                            <Link to=""><i className="fab fa-twitter"></i></Link>
                                            <Link to=""><i className="fab fa-facebook-f"></i></Link>
                                            <Link to=""><i className="fab fa-youtube"></i></Link>
                                            <Link to=""><i className="fab fa-instagram"></i></Link>
                                            <Link to=""><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-menu">
                    <div className="f-menu">
                        <Link to="/terms&conditions">Terms of use</Link>
                        <Link to="/privacy-policy">Privacy policy</Link>
                        <Link to="/cookies">Cookies</Link>
                        <Link to="/help">Help</Link>
                        <Link to="/faq">FQAs</Link>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <Link to="#">Kabadiko</Link>, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Designed By <Link to="#">Kabadiko</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;