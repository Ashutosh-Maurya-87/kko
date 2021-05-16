import React, {useEffect } from "react";
import { Button, Toast, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast, Slide } from "react-toastify";
import './login.css';
import { Images } from '../../Components/ImageContainer/ImageContainer';
import { emailRegExp } from '../../Components/RegEx';
import Loader from '../../Components/Loader/Loader';
import { useDispatch, useSelector } from "react-redux";
import { userLogin, adminLogin } from '../../Redux/usersType/userType.action';
import { deleteCookie } from "../../services/cookie";
// form validation useing Yup
function Login() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const loader = useSelector((state: any) => state.userType.isUserLoading);

  const { register, handleSubmit, errors } = useForm();

  // useEffect (() => {
  //   window.localStorage.clear();
  //   window.sessionStorage.clear();
  //   deleteCookie('access_token')
  // })

  const admin = location.pathname.includes('/admin/login');
  const superAdmin = location.pathname.includes('/superadmin/login');

  if (loader) {
    return (<Loader children={''} isLoading={loader} type="circle" />)
  }

  const loginButton = async (formData: any) => {
    if (admin) {
      let result: any = await dispatch(adminLogin(formData));
      if (result.success) {
        history.push('/admin/dashboard');
      } else {
        history.push('/admin/login')
      }
    } else {
      let result: any = await dispatch(userLogin(formData));
      history.push('/homepage');
      if (result.success) {
        history.push('/homepage');
      } else {
        history.push('/login')
      }
    }
  };
  return (
    <Row className=" loginRow1">
      <Col md={7} className="loginLeft">

        <img src={Images.Scrap16} className="login-image" alt="Scrap login" />
      </Col>

      <Col md={5} className="loginRight">

        <div className='login-form'>
          <Container>
            <Row >
              <Col sm='12' lg='7' className='main-col' style={{ padding: "0px", width: "80%" }}>
                <div className='form-container' style={{ width: "150%" }}>
                  <form className='form-horizontal' onSubmit={handleSubmit(loginButton)}>
                    {/* username input */}
                    <h1>Welcome {admin ? "Admin" : superAdmin ? "Super" : "User"}</h1>
                    <div className='form-group'>
                      <span className='input-icon'>
                        <i className='fa fa-user'></i>
                        <label>Email</label>
                      </span>
                      <input
                        name='email'
                        className='form-control'
                        placeholder='Enter a valid email'
                        ref={register({
                          required: 'Please enter Email id',
                          pattern: {
                            value: emailRegExp,
                            message: "Enter a valid Email address"
                          }
                        })}
                      />
                      {errors.email && errors.email.type === "required" && <p className="errorMessage">{errors.email.message}</p>}
                      {errors.email && errors.email.type === "pattern" && <p className="errorMessage"> {errors.email.message}</p>}

                    </div>
                    <Row>
                      <Col>
                        <div className='form-group'>
                          <span className='input-icon'>
                            <i className='fa fa-user'></i>
                            <label>Password</label>
                          </span>
                          <input
                            type='password'
                            name='password'
                            className='form-control'
                            placeholder='Enter password'
                            ref={register({
                              required: "Password is mandatory"
                            })}
                          />
                          {errors && errors.password && errors.password.type === "required" && <p className="errorMessage">{errors.password.message}</p>}
                        </div>
                      </Col>
                    </Row>
                    <div className='forgot-pass'>
                      Forgot Password, <Link to="/forgot-password">click Here</Link>
                    </div><br />
                    <div className='forgot-pass'>
                      Already have account, <Link to="/signup">Sign up</Link>
                    </div>
                    <Button variant='primary' type='submit'>
                      Login
                    </Button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>

  );
}

export default Login;