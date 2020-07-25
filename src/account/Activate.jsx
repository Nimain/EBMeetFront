import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from '../components/Header'

const Activate = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true
    });

    useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
        // console.log(token);
        if (token) {
            setValues({ ...values, name, token });
        }
    }, []);

    const { name, token, show } = values;

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/account-activation`,
            data: { token }
        })
            .then(response => {
                console.log('ACCOUNT ACTIVATION', response);
                setValues({ ...values, show: false });
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
                toast.error(error.response.data.error);
            });
    };

    const activationLink = () => (



        <section>
        <div className="section-overlap bg-color--primary-light--1 pos-abs-top jsElement" data-height="50%"></div>
       
        <div className="container containeryy">
            <div className="row">
                <div className="col-12">
                    <div className="newsletter-form form--v3 position-relative d-lg-flex align-items-center bg-color--primary rounded--10 py-4 p-lg-4 p-xl-7">
                        <div className="svg-shape--top--right h-100">
                            <img src="/assets/img/layout/diagonal-shape-7.svg" alt="wave" className="svg h-100"/>
                        </div>
                       
                        <div className="col-12 col-lg-6 pr-lg-5 mb-3 mb-lg-0 text-center text-lg-left reveal">
                            <h2 className="h3-font color--white">Hey {name}, Ready to activate your account?</h2>
                        </div>
                       
                        <div className="col-12 col-md-10 col-lg-6 mx-md-auto">
                            <form action="#" className="form bg-color--white-opacity--10 rounded--05 p-1 reveal">
                                <div className="input-group d-flex">
                                    
                                    <button className="btn btn-hover--splash btn-bg--primary" type="submit" onClick={clickSubmit}><span className="btn__text"><i className="icon icon-arrow-right"></i>  Activate Account</span></button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
               
            </div>
          
        </div>
        
    </section>


















        // <div className="text-center">
        //     <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
        //     <button className="btn btn-outline-primary" onClick={clickSubmit}>
        //         Activate Account
        //     </button>
        // </div>
    );

    return (

       <div>
        <Header>
            
                <ToastContainer />
                {activationLink()}

                    
     </Header>
     </div>
    );
};

export default Activate;