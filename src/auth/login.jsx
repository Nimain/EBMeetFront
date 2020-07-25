import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from '../components/Header';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('SIGNIN SUCCESS', response);
                // save the response (user, token) localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signinForm = () => (



        <section className="space bg-color--primary h-min-100vh d-flex align-items-center">
            <div className="svg-shape--top w-100 opacity--05">
                <img src="/assets/img/layout/wave-8.svg" alt="wave" className="svg fill--white"/>
            </div>
            
            <div className="svg-shape--top opacity--10">
                <img src="/assets/img/layout/wave-9.svg" alt="wave" className="svg fill--white"/>
            </div>
           
        
            <div className="container">
                <div className="row ">
                    <div className="col-12 mx-auto color--white text-center mb-4 mb-lg-5">
                        <h1 className="h2-font mb-1">Welcome back</h1>
                        <p className="opacity--60 font-size--20">Sign in to continue to EIBC Meeting</p>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto">
                        <div className="form--v5 bg-color--primary-light--1 px-3 py-4 px-md-5 pt-md-6 rounded--10">
                            <form>
                                <div className="form-group">
                                    <label className="form__label text-uppercase font-size--15 font-w--500">Email Address:</label>
                                    <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="Enter your email address" required/>
                                </div>
                                <div className="form-group">
                                    <div className="d-flex justify-content-between">
                                        <label for="password" className="form__label text-uppercase font-size--15 font-w--500">Password:</label>
                                        <small>
                                            <Link to="/auth/password/forgot" className="text-color--400">Forgot password?</Link>
                                        </small>
                                    </div>
                                    <input onChange={handleChange('password')} value={password} type="password" className="form-control" placeholder="Choose a password" required/>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label text-color--400" for="customCheck1">Keep me logged in</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-bg--primary btn-size--md btn-hover--3d"onClick={clickSubmit}>
                                       <span className="btn__text">{buttonText}</span></button>
                                </div>
                            </form>
                           
                            <div className="text-center mt-4 pt-2 border--top">
                                <p className="text-color--400">Don't have an account? <Link to="/signup" className="color--primary">Signup</Link></p>
                            </div>
                           
                        </div>
                      
                    </div>
                   
                </div>
               
            </div>
            
        </section>









        
    );

    return (
        <Header>
           
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}
                {signinForm()}
            
        </Header>
    );
};

export default Login;