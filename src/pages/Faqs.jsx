import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';


const Faq =() =>{

    const faqForm = ()=>(


        <main class="main">

<section class="space d-flex align-items-center">
            <div class="background-holder background--cover">
                <img src="/assets/img/image-1.jpg" alt="image" class="background-image-holder"/>
            </div>
           
            <div class="background-holder bg-color--primary opacity--80"></div>
           
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 mx-auto text-center pt-7 pt-lg-9">
                        <h1 class="h2-font color--white mb-4 mb-lg-6">How can we help?</h1>
                        <div class="form--v7 box-shadow--1 mb-3">
                            <form action="#" class="form border--around rounded--05 bg-white">
                                <div class="input-group d-flex">
                                    <input type="text" class="form-control" placeholder="Type your keyword" required/>
                                    <button class="btn btn-hover--splash btn-bg--primary" type="submit"><span class="btn__text icon icon-zoom-bold"></span></button>
                                </div>
                            </form>
                           
                        </div>
                        
                        <ul class="m-0 list-unstyled d-flex flex-wrap justify-content-center remove-space--x">
                            <li class="mr-1 mb-1"><a href="#" class="btn-sm px-1 font-size--15 color--white bg-color--white-opacity--20">Getting started</a></li>
                            <li class="mr-1 mb-1"><a href="#" class="btn-sm px-1 font-size--15 color--white bg-color--white-opacity--20">Pricing</a></li>
                            <li class="mr-1 mb-1"><a href="#" class="btn-sm px-1 font-size--15 color--white bg-color--white-opacity--20">Manage Payments</a></li>
                            <li class="mr-1 mb-1"><a href="#" class="btn-sm px-1 font-size--15 color--white bg-color--white-opacity--20">Account Security</a></li>
                            <li class="mr-1 mb-1"><a href="#" class="btn-sm px-1 font-size--15 color--white bg-color--white-opacity--20">Mambership</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>






        <section class="space bg-color--primary-light--1">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-12 col-md-5 col-lg-4 sidebar">
                        <div class="sticky-top mb-4 z-index1">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action font-size--18" data-scroll-nav="1"><span>Getting Started</span></a>
                                <a href="#" class="list-group-item list-group-item-action font-size--18" data-scroll-nav="2"><span>Pricing</span></a>
                                <a href="#" class="list-group-item list-group-item-action font-size--18" data-scroll-nav="3"><span>Customization</span></a>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-12 col-md-7">
                        <div class="article-entry accordion accordion--v2 remove-space--bottom" id="accordion1">
                            <div class="mb-6" data-scroll-index="1">
                                <h2 class="headline font-size--30 font-w--600 mb-4">Getting Started</h2>
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                        <span class="font-size--18 text-color--700 font-w--500">How to update the fonts?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse1" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating.</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link bg-white" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                        <span class="font-size--18 text-color--700 font-w--500">How to use the theme demo color?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse2" class="collapse show" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Our product solves crucial problems of such giant services as Foursquare & Swarm, Groupon, and Tripadvisor. Millenial travelers don’t possess any more countless hours for preparing the trip itinerary (reading
                                                Tripadvisor). Business travelers, in particular, complain they are having maximum.</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        <span class="font-size--18 text-color--700 font-w--500">How to install the theme update?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse3" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating.</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                           

                            <div class="mb-6" data-scroll-index="2">
                                <h2 class="headline font-size--30 font-w--600 mb-4">Pricing</h2>
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        <span class="font-size--18 text-color--700 font-w--500">How many times will I be charged?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse4" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        <span class="font-size--18 text-color--700 font-w--500">How long do I have access?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse5" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Our product solves crucial problems of such giant services as Foursquare & Swarm, Groupon, and Tripadvisor. Millenial travelers don’t possess any more countless hours for preparing the trip itinerary (reading
                                                Tripadvisor). Business travelers, in particular, complain they are having maximum.</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        <span class="font-size--18 text-color--700 font-w--500">How does the refund policy work?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse6" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating.</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            

                            <div class="mb-6" data-scroll-index="3">
                                <h2 class="headline font-size--30 font-w--600 mb-4">Customization</h2>
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                        <span class="font-size--18 text-color--700 font-w--500">How to update the fonts?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse7" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating.</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                        <span class="font-size--18 text-color--700 font-w--500">How to use the theme demo color?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse8" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Our product solves crucial problems of such giant services as Foursquare & Swarm, Groupon, and Tripadvisor. Millenial travelers don’t possess any more countless hours for preparing the trip itinerary (reading
                                                Tripadvisor). Business travelers, in particular, complain they are having maximum.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card mb-1">
                                    <button class="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                        <span class="font-size--18 text-color--700 font-w--500">How to install the theme update?</span>
                                        <i class="icon icon-up-arrow"></i>
                                    </button>
                                    <div id="collapse9" class="collapse" data-parent="#accordion1">
                                        <div class="card-body bg-white pl-3">
                                            <p>Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating.</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                           
                        </div>
                       
                    </div>
                   
                </div>
               
            </div>
            
        </section>


        <section class="space bg-color--primary">
            <div class="container">
                <div class="row">
                    <div class="col-12 color--white text-center mb-6">
                        <h2 class="mb-2">Can't find your answer?</h2>
                        <p class="opacity--70"> Get touch with us or Email us and we'll get back to you as soon as we can.</p>
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-12 mx-auto">
                        <div class="icon-fill--wide text-center d-md-flex justify-content-lg-center flex-wrap">
                            <a class="t-icon btn-bg--white box-shadow--5 rounded--05 m-1 btn-hover--cta--4" href="#">
                                <span class="t-icon__brand-icon h4-font text-color--cta--4"><i class="icon icon-telegram"></i></span>
                                <span class="t-icon__brand-name h5-font font-w--500 text-color--700">telegram</span>
                            </a>
                            <a class="t-icon btn-bg--white box-shadow--5 rounded--05 m-1 btn-hover--cta--4" href="#">
                                <span class="t-icon__brand-icon h4-font text-color--cta--4"><i class="icon icon-newsletter"></i></span>
                                <span class="t-icon__brand-name h5-font font-w--500 text-color--700">info@sinsignal.com</span>
                            </a>
                            <a class="t-icon btn-bg--white box-shadow--5 rounded--05 m-1 btn-hover--cta--4" href="#">
                                <span class="t-icon__brand-icon h4-font text-color--cta--4"><i class="icon icon-logo-whatsapp"></i></span>
                                <span class="t-icon__brand-name h5-font font-w--500 text-color--700">Whatsapp</span>
                            </a>
                        </div>
                       
                    </div>
                   
                </div>
              
            </div>
            
        </section>





        </main>






        );

        return(

             <div>
            
             <Header/>
             {faqForm()}

            
             <Footer/>
            
            </div>
            
        );
    };

    export default Faq ;