import React from "react";
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Toast, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import './signup.css';
import {Images} from '../../Components/ImageContainer/ImageContainer';
import { userSignUp } from '../../Redux/users/users.action';
// import nariyal from '../../images/nariyal.png';

// form validation useing Yup
const validate = () =>
  Yup.object({
    contact: Yup.string()
      .min(2, "Must be more than one character")
      .required("contact is required"),
    password: Yup.string()
      .min(8, "Must be more than 8 characters")
      .required("This field is required"),
    verifyPassword: Yup.string()
      .min(8, "Must be more than 8 characters")
      .required("This field is required"),
    firstName: Yup.string()
      .min(2, "Must be more than one character")
      .required("This field is required"),
    lastName: Yup.string()
      .min(2, "Must be more than one character")
      .required("This field is required"),
    email: Yup.string()
      .email("Please enter a vaild email")
      .required("This field is required")
  });

function Signup(props) {
  const dispatch = useDispatch();

  const signUp = user => {
    console.log('signup button hitted')
    dispatch(userSignUp(user))
    .then(res => {
      console.log('--------res-----', res);
      toast.success(res, {
        position: toast.POSITION.BOTTOM_LEFT,
        transition: Slide
      });
      props.history.push("/");
    })
    .catch(err => {
      console.log('--------err-----', err);
      toast.error(err, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: false
      });
    });
    console.log('---user-------', user);
  };
  const submit = () =>{
    signUp()
  }
  return (
    <Container fluid>
      <Row className=" signupRow1">
      <Col md={7} className="signupLeft">
      
        <img src={Images.Scrap16} className="signup-image" alt="Scrap signup"/>
        </Col>
      
      <Col md={5} className="signupRight">
      <Formik
        initialValues={{
          contact: "",
          password: "",
          verifyPassword: "",
          firstName: "",
          lastName: "",
          email: ""
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          const newUser = {
            contact: values.contact,
            password: values.password,
            verifyPassword: values.verifyPassword,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email
          };

          signUp(newUser);

          setSubmitting(false);
        }}>
        <div className='signup-form'>
          <Container>
            <Row >
              <Col sm='12' lg='7' className='main-col' style={{padding:"0px", width:"80%"}}>
                <div className='form-container'style={{width: "150%"}}>
                  <Form className='form-horizontal'>
                    {/* contact input */}
                    <Row>
                      <Col>
                        <div className='form-group'>
                          <span className='input-icon'>
                            <i className='fa fa-user'></i>
                          </span>
                          <Field
                            name='firstName'
                            className='form-control'
                            placeholder='Enter your firstName'
                          />
                          <ErrorMessage className="errorMessage" component={Toast} name='firstName' />
                        </div>
                      </Col>
                      <Col>
                        <div className='form-group'>
                          <span className='input-icon'>
                            <i className='fa fa-user'></i>
                          </span>
                          <Field
                            name='lastName'
                            className='form-control'
                            placeholder='Enter your lastName'
                          />
                          <ErrorMessage className="errorMessage" component={Toast} name='lastName' />
                        </div>
                      </Col>
                    </Row>
                    <div className='form-group'>
                      <span className='input-icon'>
                        <i className='fa fa-user'></i>
                      </span>
                      <Field
                        name='email'
                        className='form-control'
                        placeholder='Enter a valid email'
                      />
                      <ErrorMessage className="errorMessage" component={Toast} name='email' />
                    </div>
                    <div className='form-group'>
                      <span className='input-icon'>
                        <i className='fa fa-user'></i>
                      </span>
                      <Field
                        name='contact'
                        className='form-control'
                        placeholder='Enter contact Number'
                      />
                      <ErrorMessage className="errorMessage" component={Toast} name='contact' />
                    </div>
                    <Row>
                      <Col>
                        <div className='form-group'>
                          <span className='input-icon'>
                            <i className='fa fa-user'></i>
                          </span>
                          <Field
                            type='password'
                            name='password'
                            className='form-control'
                            placeholder='Enter password'
                          />
                          <ErrorMessage className="errorMessage" component={Toast} name='password' />
                        </div>
                      </Col>
                      <Col>
                        <div className='form-group'>
                          <span className='input-icon'>
                            <i className='fa fa-user'></i>
                          </span>
                          <Field
                            type='password'
                            name='verifyPassword'
                            className='form-control'
                            placeholder='Re Enter password'
                          />
                          <ErrorMessage className="errorMessage" component={Toast} name='verifyPassword' />
                        </div>
                      </Col>
                    </Row>
                   
                    <div className='forgot-pass'>
                      Already have account, <Link to='/login'>Log in</Link>
                    </div>
                    <Button variant='primary' type='submit' onClick={submit()}
                    // disabled={true}
                    >
                      Register{" "}
                    </Button>{" "}
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Formik>
      </Col>
      </Row>
      
    </Container>
  );
}

export default Signup;