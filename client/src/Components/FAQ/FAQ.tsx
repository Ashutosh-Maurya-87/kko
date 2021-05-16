import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card } from 'react-bootstrap';
import { Images } from '../../Components/ImageContainer/ImageContainer';

const FAQ = () => {
    const [close, setClose] = useState(false)

    const closeAcco = (e: any) => {
        e.preventDefault()
        console.log('clickkkk')
        setClose(true)
    }
    return (
        <>
            <div className="container-fluid" style={{ width: "75%" }}>
                <div className="faqs">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="faqs-img">
                                <img src={Images.Scrap83} alt="FAQimage" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-header">
                                <h2>Have Questions?</h2>
                            </div>
                            <div>
                                <Accordion id="accordion">
                                    <Card className="card">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header" onClick={(e) => closeAcco}>
                                            <a><span>1</span> How can i place order?</a>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0" >
                                            <Card.Body className="card-body">
                                                It's so simple, Just place request, click picture of Scrap, upload on site or application, Our dealer will approach you soon.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card className="card">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="card-header">
                                            <a><span>2</span> How much can i earn?</a>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className="card-body">
                                                It depends on your Quantity, Quality and type of scrap. and You will earn cash back too.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card className="card">
                                        <Accordion.Toggle as={Card.Header} eventKey="2" className="card-header">
                                            <a><span>3</span> How will i get amount?</a>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className="card-body">
                                                After pickup scrap a E-Invoice will be generated and forward to you, amount will be credited to your respective account.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card className="card">
                                        <Accordion.Toggle as={Card.Header} eventKey="3" className="card-header">
                                            <a><span>4</span> Is it safe?</a>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body className="card-body">
                                                A big YES!! A verified scrap dealer will visit at your doorstep. You check his ID-Card. After requesting Pick-up request. You will get an OTP. When scrap dealer visits you. tell this OTP to him. after confirmation
                                                of OTP you will get a confirmation message. Now you can deal with him hassle free.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <Link className="btn" to="">Ask more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQ;