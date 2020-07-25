import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Forgot = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Request password reset link'
    });

    const { email, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: { email }
        })
            .then(response => {
                console.log('FORGOT PASSWORD SUCCESS', response);
                toast.success(response.data.message);
                setValues({ ...values, buttonText: 'Requested' });
            })
            .catch(error => {
                console.log('FORGOT PASSWORD ERROR', error.response.data);
                toast.error(error.response.data.error);
                setValues({ ...values, buttonText: 'Request password reset link' });
            });
    };

    const passwordForgotForm = () => (







        <section class="space bg-color--primary h-min-100vh d-flex align-items-center">
        <div class="svg-shape--top w-100 opacity--05">
            <img src="/assets/img/layout/wave-8.svg" alt="wave" class="svg fill--white"/>
        </div>
       
        <div class="svg-shape--top opacity--10">
            <img src="/assets/img/layout/wave-9.svg" alt="wave" class="svg fill--white"/>
        </div>
        
        <div class="container">
            <div class="row ">
                <div class="col-12 mx-auto color--white text-center mb-4 mb-lg-5">
                    <h1 class="h2-font mb-1">Forgot your password?</h1>
                    <p class="opacity--60 font-size--20">Enter your email address below and we'll get you back on track.</p>
                </div>
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <div class="form--v5 bg-color--primary-light--1 px-3 py-4 px-md-5 py-md-6 rounded--10">
                        <form action="#" class="form">
                            <div class="form-group">
                                <label class="form__label text-uppercase font-size--15 font-w--500">Email Address:</label>
                                <input onChange={handleChange('email')} value={email} type="email" class="form-control" placeholder="Enter your email address" required/>
                            </div>
                            <div class="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center">
                                <button class="btn btn-bg--primary btn-size--md btn-hover--3d" type="submit" onClick={clickSubmit}><span class="btn__text">{buttonText}</span></button>
                                <p class="text-color--400 font-size--15 mt-2 mt-sm-0">Back to <a href="/signin" class="color--primary">sign in</a></p>
                            </div>
                        </form>
                        
                    </div>
                   
                </div>
                
            </div>
           
        </div>
       
    </section>




        // <form>
        //     <div className="form-group">
        //         <label className="text-muted">Email</label>
        //         <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
        //     </div>

        //     <div>
        //         <button className="btn btn-primary" onClick={clickSubmit}>
        //             {buttonText}
        //         </button>
        //     </div>
        // </form>
    );

    return (
        <Header>
           
                <ToastContainer />
               
                {passwordForgotForm()}
           
        </Header>
    );
};

export default Forgot;