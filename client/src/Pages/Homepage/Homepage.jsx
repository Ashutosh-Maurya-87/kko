import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Testimonial from '../../Components/Testimonial/Testimonial';
import FAQ from '../../Components/FAQ/FAQ'
import TeamStart from '../../Components/TeamStart/TeamStart';
import Feature from '../../Components/Feature/Feature';
import Service from '../../Components/Service/Service';
import About from '../../Components/About/About';
import FeatureTop from '../../Components/FeatureTop/FeatureTop';
import CarouselComp from '../../Components/Carousel/Carousel';
import NavBar from '../../Components/NavBar/NavBar';
import TopNavBar from '../../Components/TopNavBar/TopNavBar';
import Card from '../../Components/Card/Card'

const Homepage = () =>{

    return(
        <div className="wrapper">
        {/* <!-- Top Bar Start --> */}
            < TopNavBar/>
        {/* <!-- Top Bar End --> */}

        {/* <!-- Nav Bar Start --> */}
            <NavBar />
        {/* <!-- Nav Bar End --> */}
        
        
        {/* <!-- Carousel Start --> */}
            < CarouselComp />
        {/* <!-- Carousel End --> */}
        
        
        {/* <!-- Top Feature Start--> */}
            < FeatureTop/>
        {/* <!-- Top Feature End--> */}
        
        
        {/* <!-- About Start --> */}
            {/* < About /> */}
        {/* <!-- About End --> */}


        {/* <!-- Service Start --> */}
            < Service />
        {/* <!-- Service End --> */}
        
        
        {/* <!-- Feature Start --> */}
            < Feature />
         {/* <!-- Feature End --> */}
        
        
        {/* <!-- Team Start --> */}
            {/* < TeamStart /> */}
          {/* <!-- Team End --> */}


        {/* <!-- FAQs Start --> */}
            < FAQ />
        {/* <!-- FAQs End --> */}


        {/* <!-- Testimonial Start --> */}
            {/* < Testimonial /> */}
            <Card />
        {/* <!-- Testimonial End --> */}


        {/* <!-- Blog Start --> */}
                {/* < Blog/> */}
        {/* <!-- Blog End --> */}
        
        
        {/* <!-- Newsletter Start --> */}
            {/* < NewsLetter /> */}
        {/* <!-- Newsletter End --> */}

        {/* --Footer--- */}
        < Footer />
        
        <Link to="#" className="back-to-top"><i className="fa fa-chevron-up"></i></Link>
    </div>

    )
}
 export default Homepage;