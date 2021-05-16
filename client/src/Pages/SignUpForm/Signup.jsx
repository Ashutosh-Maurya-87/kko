import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Toast, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import './signup.css';
import { Images } from '../../Components/ImageContainer/ImageContainer';
// import { userSignUp } from '../../Redux/users/users.action';
// import { adminSignup } from '../../Redux/admin/admin.actions'
import { userSignUp, adminSignup } from '../../Redux/usersType/userType.action';
import { phoneRegExp, emailRegExp } from '../../Components/RegEx';
import Loader from '../../Components/Loader/Loader';

const Signup = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const signupStatus = useSelector(state => state.userType.status);
  const loader = useSelector(state => state.users.isUserLoading);

  const { handleSubmit, register, errors, watch } = useForm();
  //coparing password
  const password = useRef({});
  password.current = watch("password", '');

  const admin = location.pathname.includes('admin/signup');
  const superAdmin = location.pathname.includes('/superadmin');

  console.log('---is admin route--', admin)

  if (loader) {
    return (
      <Loader children={''} isLoading={loader} type={"circle"} />
    );
  }

  function signUpForm(formData) {
    console.log('---1----signup button  form data ', formData);
    if (admin) {
       dispatch(adminSignup(formData))
    } else {
      dispatch(userSignUp(formData));
    }
  }
  if (signupStatus === 202) {
    history.push('/admin/login')
  } 

  return (
    <Container fluid>
      <Row className=" signupRow1">
        <Col md={7} className="signupLeft">

          <img src={Images.Scrap16} className="signup-image" alt="Scrap signup" />
        </Col>

        <Col md={5} className="signupRight">

          <div className='signup-form'>
            <Container>
              <Row >
                <Col sm='12' lg='7' className='main-col' style={{ padding: "0px", width: "80%" }}>
                  <div className='form-container' style={{ width: "150%" }}>
                    <form className='form-horizontal' autoComplete="off" onSubmit={handleSubmit(signUpForm)}>
                      <h1 className="welcomeTitle">Welcome {admin ? "Admin" : superAdmin ? "Super" : "user"}</h1>
                      {/* contact input */}
                      <Row>
                        <Col>
                          <div className='form-group'>
                            <span className='input-icon'>
                              <i className='fa fa-user'></i>
                              <label className="SignupLabel">First Name</label>
                            </span>
                            <input
                              type="text"
                              name='firstName'
                              className='form-control'
                              placeholder='Enter your firstName'
                              defaultValue=""
                              // value={formState.firstName}
                              // onChange={onChange}
                              ref={register({
                                required: "First Name is required",
                                minLength: {
                                  value: 2,
                                  message: "First Name must be greater than 2 characters"
                                },
                              })}
                            />
                            {errors.firstName && errors.firstName.type === 'required' && <p className="errorMessage" >{errors.firstName.message}</p>}
                            {errors.firstName && errors.firstName.type === 'minLength' && <p className="errorMessage" >{errors.firstName.message}</p>}
                          </div>
                        </Col>
                        <Col>
                          <div className='form-group'>
                            <span className='input-icon'>
                              <i className='fa fa-user'></i>
                              <label className="SignupLabel">Last Name</label>
                            </span>
                            <input
                              type="text"
                              name='lastName'
                              className='form-control'
                              placeholder='Enter your lastName'
                              // value={formState.lastName}
                              // onChange={onChange}
                              ref={register({
                                required: "Last Name is required",
                                minLength: {
                                  value: 2,
                                  message: "Last Name must be greater than 2 characters"
                                },
                              })}
                            />
                            {errors.lastName && <p className="errorMessage" >{errors.lastName.message}</p>}
                          </div>
                        </Col>
                      </Row>
                      <div className='form-group'>
                        <span className='input-icon'>
                          <i className='fa fa-user'></i>
                          <label className="SignupLabel">Email</label>
                        </span>
                        <input
                          name='email'
                          type="text"
                          className='form-control'
                          placeholder='Enter a valid email'
                          // value={formState.email}
                          // onChange={onChange}
                          ref={register({
                            required: "Email is required",
                            minLength: {
                              value: 2,
                              message: "Enter a valid email",
                            },
                            pattern: {
                              value: emailRegExp,
                              message: "Enter a valid e-mail address",
                            },
                          })}
                        />
                        {errors.email && errors.email.type === 'required' && <p className="errorMessage">{errors.email.message}</p>}
                        {errors.email && errors.email.type === 'pattern' && <p className="errorMessage">{errors.email.message}</p>}
                        {errors.email && errors.email.type === 'minLength' && <p className="errorMessage">{errors.email.message}</p>}


                      </div>
                      <div className='form-group'>
                        <span className='input-icon'>
                          <i className='fa fa-user'></i>
                          <label className="SignupLabel">Contact No:</label>
                        </span>
                        <input
                          name='contact'
                          type="number"
                          className='form-control'
                          placeholder='Enter contact Number'
                          // value={formState.contact}
                          // onChange={onChange}
                          ref={register({
                            required: "Contact Number is required",
                            minLength: {
                              value: 2,
                              message: "Contact Number must 10 digits"
                            },
                            pattern: {
                              value: phoneRegExp,
                              message: "Enter a valid Phone Number"
                            }
                          })}
                        />
                        {errors.contact && errors.contact.type === 'required' && <p className="errorMessage">{errors.contact.message}</p>}
                        {errors.contact && errors.contact.type === 'minLength' && <p className="errorMessage">{errors.contact.message}</p>}
                        {errors.contact && errors.contact.type === 'pattern' && <p className="errorMessage">{errors.contact.message}</p>}
                      </div>
                      <Row>
                        <Col>
                          <div className='form-group'>
                            <span className='input-icon'>
                              <i className='fa fa-user'></i>
                              <label className="SignupLabel">Password</label>
                            </span>
                            <input
                              type='password'
                              name='password'
                              className='form-control'
                              placeholder='Enter password'
                              // value={formState.password}
                              // onChange={onChange}
                              ref={register({
                                required: "Password is required",
                                minLength: {
                                  value: 6,
                                  message: "Password must have 6 characters in alphaNumeric case"
                                },
                              })}
                            />
                            {errors.password && errors.password.type === 'required' && <p className="errorMessage">{errors.password.message}</p>}
                            {errors.password && errors.password.type === 'minLength' && <p className="errorMessage">{errors.password.message}</p>}

                          </div>
                        </Col>
                        <Col>
                          <div className='form-group'>
                            <span className='input-icon'>
                              <i className='fa fa-user'></i>
                              <label className="SignupLabel">Confirm Password</label>
                            </span>
                            <input
                              type='password'
                              name='confirmPassword'
                              className='form-control'
                              placeholder='Re Enter password'
                              // value={formState.confirmPassword}
                              // onChange={onChange}
                              ref={register({
                                required: "Password is required",
                                // validate: value => value === password.current || "Passwords did not match"
                              })}
                            />
                            {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p className="errorMessage">{errors.confirmPassword.message}</p>}
                            {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p className="errorMessage">{errors.confirmPassword.message}</p>}

                          </div>
                        </Col>
                      </Row>
                      <span>
                        <input
                          type="checkbox"
                          name="TandC"
                          className="tandC"
                          // value={formState.TandC}
                          // onChange={onChange}
                          ref={register({
                            required: "Kindly accepts Terms & Conditions",
                          })}
                        />
                        Terms & Conditions*
                    </span>
                      {errors.TandC && <p className="errorMessage">{errors.TandC.message}</p>}
                      <br /><br />

                      <div className='forgot-pass'>
                        Already have account, <Link to='/login'>Log in</Link>
                      </div>
                      <Button variant='primary' type='submit'
                      // disabled={
                      //   // !formState.firstName ||
                      //   // !formState.lastName  ||
                      //   // !formState.email     ||
                      //   // !formState.contact   ||
                      //   // !formState.password  ||
                      //   // !formState.confirmPassword ||
                      //   // !formState.TandC ||
                      //   // formState.password !== formState.confirmPassword
                      // }
                      >
                        Register
                    </Button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Signup;