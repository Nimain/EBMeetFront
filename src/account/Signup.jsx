import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Header from '../components/Header'
import { isAuth } from './helpers';
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Signup =() =>{

    const[values, setValues] = useState({

        name: "",
        email: '',
        password: '',
        buttonText: 'Submit'

    });

    const {name, email,password,buttonText} = values;

    const handleChange = (name) => (event) =>{

        setValues({...values,[name]:event.target.value });

    }



   

    const clickSubmit = event =>{

        event.preventDefault();

        setValues({ ...values, buttonText: 'Submitting' });

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data:{name,email,password}
        })
        .then(response =>{
            console.log('SIGNUP SUCESS',response);
            setValues({...values,name:'',email:'',password:'', buttonText: 'Submitted'});
            toast.success(response.data.message);

        })
        .catch(error =>{
            console.log('SIGNUP ERROR',error.response.data);
            setValues({ ...values, buttonText: 'Submit' });
            //setValues({ ...values,})
            toast.error(error.response.data.error);
        })

    }

 


    const signupForm = ()=>(
          
        
        <section className="space bg-color--primary h-min-100vh d-flex align-items-center ">
        <div className="svg-shape--top w-100 opacity--05">
            <img src="assets/img/layout/wave-8.svg" alt="wave" className="svg fill--white"/>
        </div>
        
        <div className="svg-shape--top opacity--10">
            <img src="assets/img/layout/wave-9.svg" alt="wave" className="svg fill--white"/>
        </div>
      

        <div className="container">
            <div className="row ">
                <div className="col-12 mx-auto color--white text-center mb-4 mb-lg-5">
                    <h1 className="h2-font mb-1">Join for Host the meeting</h1>
                    {/* <p className="opacity--60 font-size--20">Fill out the form to get started.</p> */}
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto">
                    <div className="form--v5 bg-color--primary-light--1 px-3 py-4 px-md-5 py-md-6 rounded--10">
                        <form className="form">
                            <div className="form-group">
                                <label className="form__label text-uppercase font-size--15 font-w--500">Name:</label>
                                <input onChange ={handleChange('name')} value ={name} type="text" className="form-control" placeholder="Enter your Name" required/>
                            </div>
                            <div className="form-group">
                                <label className="form__label text-uppercase font-size--15 font-w--500">Email Address:</label>
                                <input onChange={handleChange('email')}  value ={email} type="email" className="form-control" placeholder="Enter your email address" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form__label text-uppercase font-size--15 font-w--500">Password:</label>
                                <input id="password" type="password" className="form-control" placeholder="Choose a password" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password" className="form__label text-uppercase font-size--15 font-w--500">Password:</label>
                                <input onChange = {handleChange('password')}  value ={password} type="password" className="form-control" placeholder="Confirm your password" required/>
                            </div>
                            <div className="d-flex justify-content-between flex-column-reverse flex-sm-row align-items-sm-center">
                                <p className="text-color--400 font-size--15 mt-2 mt-sm-0">Already have an account? <Link to="/signin" className="color--primary">Login</Link></p>
                                <button className="btn btn-bg--primary btn-size--md btn-hover--3d" onClick={clickSubmit} ><span className="btn__text"> {buttonText} </span></button>
                            </div>
                        </form>
                       
                    </div>
                    
                </div>
               
            </div>
           
        </div>
        
    </section>




    )


    return(

        
      <Header>
         <ToastContainer/>

         {isAuth() ? <Redirect to="/" /> : null}

         {/* {JSON.stringify(name,email,password)} */}
          
        {signupForm()}

      </Header>
      
    );

};
export default Signup;