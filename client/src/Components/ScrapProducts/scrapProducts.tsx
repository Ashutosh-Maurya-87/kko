import React from 'react';
import '../ScrapProducts/ScrapProducts.css';
import Navbar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import {Images} from '../ImageContainer/ImageContainer';


const ScrapProduct = () => {
    return (
        <>
            <Navbar />
        <div className="row scrapListRow">
            <div className="col-2">
            </div>
            <div className="col-8 scrapCardBody">

                    <div className="scrapCardTitle">
                        <h3>Scrap Chart</h3>
                    </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Iron} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Iron</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Brass} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Brass</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Copper} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Copper</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Aluminium} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Aluminium</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Tin} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Tin</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Refrigerator} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Refrigerator</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 2000 /Piece</h5>
                            <p className="scrap-text">Price can be vary by regions,Condition and market.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.AC2} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">AC2</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.AC2ton} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">AC 2 ton</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Paper} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Paper</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Books} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Books</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item"><div className="scrap card-block">
                        {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                        <img src={Images.Carton} alt="scrap Images1" />
                        <h5 className="scrap-title mt-1 mb-1">Carton</h5>
                        <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                        <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                    </div></div>
                   
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Motorcycle} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Motorcycle</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Cycle} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Cycle</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.UPSbattery} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">UPS Battery</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Battery} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Inverter Battery</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Washingmachine} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Washing Machine</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                        {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                        <img src={Images.PlasticCooler} alt="scrap Images1" />
                        <h5 className="scrap-title mt-1 mb-1">Plastic Cooler</h5>
                        <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                        <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                    </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                        {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                        <img src={Images.CoolerHeavy} alt="scrap Images1" />
                        <h5 className="scrap-title mt-1 mb-1">Heavy Cooler</h5>
                        <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                        <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                    </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Chair} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Chair</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.Computer} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">Computer</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="scrap card-block">
                            {/* <h4 className="scrap-title text-right"><i className="material-icons">settings</i></h4> */}
                            <img src={Images.CRTtv} alt="scrap Images1" />
                            <h5 className="scrap-title mt-1 mb-1">CRT tv</h5>
                            <h5 className="scrap-title mt-1 mb-1">&#8377; 20 /KG</h5>
                            <p className="scrap-text">*Price can be vary by regions, market and quality.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-2"></div>
        </div>
        <Footer/>
    </>
    )
}
export default ScrapProduct;