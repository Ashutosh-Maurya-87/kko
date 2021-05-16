import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import NewsLetter from '../NewsLetter/NewsLetter';
import TeamStart from '../TeamStart/TeamStart';

const About = () => {
    const location = useLocation();
    const display = location.pathname.includes('/homepage')
    return (
        <>
            {display ? "" : <NavBar />}
            <div className="about">
                 {/* scrap pile image
                        brief description with image or clipart */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="img/about.jpg" alt="aboutimage" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header">
                                <h2>Learn About Us</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                            Scrapi is a startup with a bull’s eye vison whose only ambition is to serve our nation folks with 
                                    a GO Green Environment. Our organization is an absolute blend of two words Junk & art, Junk goes for scrap 
                                    you will sell online to keep your homeland clean and art is the technology friendly creative touch we give 
                                    to erode away scrap from your home in exchange of some valuable cash which can be accessed through any devices 
                                    or gadgets resourced with our mobility & web solutions.
                                                Junkart landed its feet in online Scrap market to resolve all the loopholes related to Buy & Sell 
                                    of waste from the customers online. We made a wider impact in our flourishing waste management industry by 
                                    collaborating with all the vendors to form a profitable chain management with a hassle free online pick up 
                                    pre-arrangement for our customers through a dedicated Mobile Application & a vendor purposed mobility solution 
                                    to crack down nerve free communication between customers and vendors where our team monitors all the web process 
                                    for a smooth functioning. Exchange of scrap with reference to our well-defined rate card (based on up & down market) 
                                    for distress free giving away of cash or the accounted amount.
                                        Join Us.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                            </p>
                                <Link className="btn" to="">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TeamStart/>
            {display ? "" : 
                <Footer />}
        </>
    )
}
export default About