import React,{Component} from 'react';
import {Link} from 'react-router-dom';



class Home extends React.Component{
    render(){

        return(

            
            
          <div>

           <main className="main hidden">


               
         
            <section className="hero hero--full hero--v11 bg-color--primary-light--1 d-flex align-items-center ">
                <div className="svg-shape--top w-100">
                    <img src="assets/img/layout/wave-8.svg" alt="wave" className="svg fill--white"/>
                </div>
             
                <div className="svg-shape--top">
                    <img src="assets/img/layout/wave-9.svg" alt="wave" className="svg fill-primary-light--1"/>
                </div>
                
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-12 col-md-10 col-lg-7 mx-auto mx-lg-0 text-center text-lg-left z-index2">
                            <div className="hero-content reveal">
                                <div className="cd-intro">
                                    <h1 className="hero__title h2-font font-w--700 mb-2 cd-headline letters scale">
                                        Video Conferencing <br/> Borders More
                                        <span className="cd-words-wrapper color--primary">
                                            <b className="is-visible">Quickly</b>
                                            <b>Reliably</b>
                                            <b>Securly</b>
                                        </span>
                                    </h1>
                                </div>
    
                                <p className="hero__description text-color--700 opacity--70 font-size--20 mb-4 mb-lg-5 pr-xl-5">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds.</p>
                              
    
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                    <Link to="/signup" className="btn btn-hover--3d btn-bg--primary btn-size--lg mr-2">
                                        <span className="btn__text">Sign up now</span>
                                    </Link>
                                    <Link className="lightbox" data-autoplay="true" data-vbtype="video" to="https://www.youtube.com/">
                                    <span className="btn btn-media color--primary btn-media-size--md btn-bg--light rounded--full"><i className="icon icon-triangle-right"></i></span>
                                    </Link>
                                </div>
                               
                            </div>
                           
                        </div>
                       
                        <div className="col-12 col-lg-6 mt-6 mt-lg-0 mb-3 mb-lg-0 pl-lg-7 pb-lg-3 pos-abs-lg-vertical-center pos-right hero__image">
                            <picture><img src="assets/img/hero-11.png" alt="hero-image" className="img-fluid reveal"/></picture>
                        </div>
                       
                    </div>
                   
                </div>
            </section>
           
            <section className="py-4 pb-lg-10">
                <div className="section-overlap bg-color--primary-light--1 pos-abs-top jsElement" data-height="360"></div>
               
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-9 col-lg-6 mb-4 mb-lg-7 mx-auto text-center reveal">
                            <h2 className="mb-2 font-size--40 font-w--700">The future <br/> of <span className="color--primary">Video Conferencing</span> is here</h2>
                            <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours. </p>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto mb-3">
                            <div className="text-center">
                                <span className="icon--xl bg-color--primary rounded--full color--white mb-2">
                                    <i className="icon icon-remittances"></i>
                                </span>
                                <h3 className="font-size--26 font-w--700">System Conferencing</h3>
                                <hr className="bg-color--primary border--none mx-auto mb-3 jsElement" data-height="3" data-width="80"/>
                                <p>If you are looking at video conference on the web, you may be very confused at the difference in price.</p>
                            </div>
                          
                        </div>
                       
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto mb-3">
                            <div className="text-center">
                                <span className="icon--xl bg-color--primary rounded--full color--white mb-2">
                                    <i className="icon icon-mobile-money"></i>
                                </span>
                                <h3 className="font-size--26 font-w--700">Mobile Conferencing</h3>
                                <hr className="bg-color--primary border--none mx-auto mb-3 jsElement" data-height="3" data-width="80"/>
                                <p>the difference in price. You may see some for as looking at video conference on the web, you may be very confused in price.</p>
                            </div>
                           
                        </div>
                      
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto mb-3">
                            <div className="text-center">
                                <span className="icon--xl bg-color--primary rounded--full color--white mb-2">
                                    <i className="icon icon-micro-payments"></i>
                                </span>
                                <h3 className="font-size--26 font-w--700">Web COnferencing</h3>
                                <hr className="bg-color--primary border--none mx-auto mb-3 jsElement" data-height="3" data-width="80"/>
                                <p>If you are looking at video conference on the web, you may be very confused at the difference in price.</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
           
            <section className="space bg-color--primary mx-xl-5">
                <div className="svg-shape--top w-100 z-index1">
                    <img src="assets/img/layout/braces.svg" alt="wave" className="svg w-100 fill--white"/>
                </div>
              
                <div className="svg-shape--top opacity--05">
                    <img src="assets/img/layout/wave-11.svg" alt="wave" className="svg fill--white"/>
                </div>
               
                <div className="svg-shape opacity--05">
                    <img src="assets/img/layout/wave-10.svg" alt="wave" className="svg fill--white"/>
                </div>
               
    
                <div className="position-relative mb-xl-10">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row-reverse align-items-center text-center">
                            <div className="col-12 col-md-10 col-lg-6 text-lg-left">
                                <div className="mb-3 mb-md-5">
                                    <h2 className="mb-2 h3-font mb-md-3 font-w--700">EIBC Video Conferencing <br/>More reliable</h2>
                                    <p>The page also has a number of identity related issues that can be linked on the Internet to get connected to people of common interest and issues. They can be preferred forms such as hobbies, interests and common issues
                                        followed by the people in the general. People connect to each other on the Internet using the myspace profile.</p>
                                </div>
                              
    
                                <div className="row text-md-left justify-content-center">
                                    <div className="col-12 col-sm-6 d-flex flex-column flex-md-row mb-4">
                                        <span className="icon--3x mr-md-2 mb-1 mb-md-0 color--white"><i className="icon icon-turtle"></i></span>
                                        <div>
                                            <h3 className="h5-font font-w--700 mb-sm-1">FAST SERVICE</h3>
                                            <p>24 hours to settle</p>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12 col-sm-6 d-flex flex-column flex-md-row mb-4">
                                        <span className="icon--3x mr-md-2 mb-1 mb-md-0 color--white"><i className="icon icon-cut"></i></span>
                                        <div>
                                            <h3 className="h5-font font-w--700 mb-sm-1">RELIABLE</h3>
                                            <p>Goroup conferencing with any number of people</p>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12 col-sm-6 d-flex flex-column flex-md-row mb-4">
                                        <span className="icon--3x mr-md-2 mb-1 mb-md-0 color--white"><i className="icon icon-card-update"></i></span>
                                        <div>
                                            <h3 className="h5-font font-w--700 mb-sm-1">FREE</h3>
                                            <p>Our service is free of cost..For commercial we do charge</p>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12 col-sm-6 d-flex flex-column flex-md-row mb-4">
                                        <span className="icon--3x mr-md-2 mb-1 mb-md-0 color--white"><i className="icon icon-link-broken"></i></span>
                                        <div>
                                            <h3 className="h5-font font-w--700 mb-sm-1">ACCEPTABLE</h3>
                                            <p>User demand smooth experience</p>
                                        </div>
                                    </div>
                                  
                                </div>
                               
                            </div>
                           
                            <div className="col-12 col-lg-6 mb-3 mb-lg-0 pos-abs-lg-vertical-center pos-left text-lg-right pr-lg-10">
                                <picture><img src="assets/img/illustration-16.png" alt="hero-image" className="img-fluid reveal"/></picture>
                            </div>
                           
                        </div>
                        
                    </div>
                    
                </div>
                
    
                <div className="position-relative pb-7 py-xl-10">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row align-items-center text-center">
                            <div className="col-12 col-md-10 col-lg-6 text-lg-left">
                                <h2 className="mb-3 h3-font font-w--700">EIBC Meeting is a superior <br/>solution of everything</h2>
                                <p className="opacity--80">EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution for Ethereum Layer 2. The EIBC Meeting network is a stakeholder and infinitely scalable blockchain for plasma with a decentralized exchange
                                    built into its core consensus layer. <br/> <br/> We worked with different strategic investors worldwide. Our partners include financial and technology ecosystem leaders who are unique in their position to contribute to global
                                    adoption.
                                </p>
                               
                            </div>
                            <div className="col-12 col-lg-6 mt-5 mt-lg-0 mb-3 mb-lg-0 pl-lg-10 pos-abs-lg-vertical-center pos-right text-lg-left">
                                <picture><img src="assets/img/illustration-17.png" alt="hero-image" className="img-fluid reveal"/></picture>
                            </div>
                           
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
            
            <section className="space--bottom jsElement" data-pull="-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
                            <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"> <i className="icon icon-key"></i> </span>
                                <h3 className="h5-font font-w--700 mb-1">Access</h3>
                                <p className="font-size--16">If you are looking at video conferencing on the web, you may not be very confused at the price .</p>
                            </div>
                           
                        </div>
                        
                        <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
                            <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"> <i className="icon icon-metrics"></i></span>
                                <h3 className="h5-font font-w--700 mb-1">Speed</h3>
                                <p className="font-size--16">If you are looking at video conferencing on the web, you may be very confused at the price.</p>
                            </div>
                            
                        </div>
                       
                        <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
                            <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"><i className="icon icon-touch-id"></i></span>
                                <h3 className="h5-font font-w--700 mb-1">Security</h3>
                                <p className="font-size--16">If you are looking at video conferencing on the web, you may be very confused at the price.</p>
                            </div>
                            
                        </div>
                       
                        <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
                            <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"><i className="icon icon-3d-29"></i></span>
                                <h3 className="h5-font font-w--700 mb-1">Decentralized</h3>
                                <p className="font-size--16">If you are looking at video conferencing on the web, you may be very confused at the price.</p>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>
            </section>
           
            <section>
                <div className="svg-shape--top w-100 z-index1">
                    <img src="/assets/img/layout/braces.svg" alt="wave" className="svg w-100 fill--white"/>
                </div>
                
                <div className=" bg-color--primary-light--1 space--top position-relative z-index2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 mx-auto text-center reveal">
                                <h2 className="mb-3 font-size--40 font-w--700"><span className="color--primary">Next generation</span> video conferencing <br/> and decentralized activity.</h2>
                                <p className="mb-4 mb-lg-7 px-lg-6">EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution for Ethereum Layer 2. The EIBC Meeting network is a stakeholder and infinitely scalable blockchain for plasma with a decentralized exchange
                                    built into its core consensus layer. We worked with different strategic investors worldwide. Our partners include conference and technology ecosystem leaders who are unique in their position to contribute to global adoption.</p>
                                <Link className="btn btn-bg--primary lightbox reveal" data-autoplay="true" data-vbtype="video" to="https://www.youtube.com/">
                                    <span className="btn__text"><i className="icon icon-play-outline mr-1 font-size--30"></i>How EIBC Meeting works</span>
                                </Link>
                            </div>
                        </div>
                       
                    </div>
                </div>
               
    
                <div className="text-center position-relative space--bottom space--top--2 jsElement" data-pull="-40">
                    <div className="svg-shape--top w-100 z-index1">
                        <img src="assets/img/layout/wave-12.svg" alt="wave" className="svg fill-primary-light--1 w-100"/>
                    </div>
                   
                    <picture className="position-relative"><img className="img-fluid" src="assets/img/illustration-18.png" alt=""/></picture>
                </div>
                
            </section>
           
            <section className="space--top bg-color--primary">
                <div className="background-holder background--top--left">
                    <img src="assets/img/layout/oval.png" alt="wave" className="background-image-holder"/>
                </div>
               
                <div className="svg-shape w-100 jsElement" data-push="250">
                    <img src="assets/img/layout/wave-13.svg" alt="wave" className="svg w-100"/>
                </div>
               
                <div className="section-overlap bg-color--primary-light--1 d-lg-none d-xl-block pos-abs-bottom jsElement" data-height="170"></div>
              
                <div className="container">
                    <div className="row text-center text-md-left justify-content-between align-items-lg-center align-items-xl-end mb-6">
                        <div className="col-12 col-sm-10 col-md-7 mb-5 mb-md-0 mx-auto mx-md-0 reveal">
                            <h2 className="mb-2 h3-font font-w--700">Partnered with <br/> Innovative Leaders Globally</h2>
                            <p className="opacity--80">EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution 2. The EIBC Meeting network is a stakeholder and infinitely scalable.</p>
                        </div>
                       
                        <div className="col-12 col-sm-8 col-md-5 col-xl-4 d-inline-flex d-lg-block align-items-center justify-content-center mx-auto mx-md-0">
                            <div className="card box-shadow--5 border--none p-5 p-md-4 pt-lg-3 pb-lg-5 px-lg-8 text-center">
                                <span className="font-size--72 color--green">200+</span>
                                <span className="h4-font text-color--400">Customers</span>
                            </div>
                        </div>
                        
                    </div>
                   
    
                    <div className="row justify-content-between align-items-lg-start">
                        <div className="col-12 col-lg-7 col-xl-7 d-flex flex-wrap flex-column flex-sm-row align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-xl-between mb-4 mb-lg-0 reveal">
                            <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-sm-1 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                                <span><img src="assets/img/partner-logo-v3-1.png" alt="partner"/></span>
                            </div>
                           
                            <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                                <span><img src="assets/img/partner-logo-v3-2.png" alt="partner"/></span>
                            </div>
                            
                            <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                                <span><img src="assets/img/partner-logo-v3-3.png" alt="partner"/></span>
                            </div>
                           
                            <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus focused">
                                <span><img src="assets/img/partner-logo-v3-4.png" alt="partner/"/></span>
                            </div>
                           
                            <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                                <span><img src="assets/img/partner-logo-v3-5.png" alt="partner"/></span>
                            </div>
                           
                            <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                                <span><img src="assets/img/partner-logo-v3-6.png" alt="partner"/></span>
                            </div>
                            
                        </div>
                       
                        <div className="col-12 col-md-10 col-lg-5 col-xl-4 mx-auto mx-lg-0">
                            <div className="testimonials testimonials--v2 position-relative pb-7">
                                <div className="carosuel-slider--v5 card box-shadow--5 p-3 pb-10">
                                    <div className="slide">
                                        <span className="testimonial__quote color--green"><i className="icon icon-quote"></i></span>
                                        <blockquote className="body-font blockquote mb-2">EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution 2. The EIBC Meeting network is a stakeholder and infinitely scalable.</blockquote>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2"><img src="assets/img/avatar-1.png" alt="avatar"/></span>
                                            <div className="d-flex flex-column">
                                                <span className="client-name font-size--17 font-w--600">Loretta Paul</span>
                                                <span>Sinsignal</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    {/* <div className="slide">
                                        <span className="testimonial__quote color--green"><i className="icon icon-quote"></i></span>
                                        <blockquote className="body-font blockquote mb-2">EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution 2. The EIBC Meeting network is a stakeholder and infinitely scalable.</blockquote>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2"><img src="assets/img/avatar-2.png" alt="avatar"/></span>
                                            <div className="d-flex flex-column">
                                                <span className="client-name font-size--17 font-w--600">Jimmy Griffin</span>
                                                <span>Sinsignal</span>
                                            </div>
                                        </div>
                                    </div> */}
                                   
                                    {/* <div className="slide">
                                        <span className="testimonial__quote color--green"><i className="icon icon-quote"></i></span>
                                        <blockquote className="body-font blockquote mb-2">EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution 2. The EIBC Meeting network is a stakeholder and infinitely scalable.</blockquote>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2"><img src="assets/img/avatar-3.png" alt="avatar"/></span>
                                            <div className="d-flex flex-column">
                                                <span className="client-name font-size--17 font-w--600">Alan Rogers</span>
                                                <span>Sinsignal</span>
                                            </div>
                                        </div>
                                    </div> */}
                                   
                                </div>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
               
            </section>
           
            <section className="bg-color--primary-light--1 pt-6 pb-7 pb-lg-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-9 col-lg-6 mb-4 mb-lg-6 mx-auto text-center reveal">
                            <h2 className="mb-2 font-size--40 font-w--700">Join the Community</h2>
                            <p>EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution 2. The EIBC Meeting network is a stakeholder and infinitely scalable.</p>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="icon-fill--wide text-center d-lg-flex justify-content-lg-center flex-wrap reveal">
                                <Link className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" to="#">
                                    <span className="t-icon__brand-icon h4-font color--primary"><i className="fab fa-google"></i></span>
                                    <span className="t-icon__brand-name h5-font font-w--500 text-color--700">Google</span>
                                </Link>
                                <Link className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" to="#">
                                    <span className="t-icon__brand-icon h4-font color--primary"><i className="fab fa-facebook"></i></span>
                                    <span className="t-icon__brand-name h5-font font-w--500 text-color--700">Facebook</span>
                                </Link>
                                <Link className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" to="#">
                                    <span className="t-icon__brand-icon h4-font color--primary"><i className="fab fa-whatsapp"></i></span>
                                    <span className="t-icon__brand-name h5-font font-w--500 text-color--700">Whatsapp</span>
                                </Link>
                                <Link className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" to="#">
                                    <span className="t-icon__brand-icon h4-font color--primary"><i className="fab fa-linkedin-in"></i></span>
                                    <span className="t-icon__brand-name h5-font font-w--500 text-color--700">linkedin</span>
                                </Link>
                                <Link className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" to="#">
                                    <span className="t-icon__brand-icon h4-font color--primary"><i className="fab fa-twitter"></i></span>
                                    <span className="t-icon__brand-name h5-font font-w--500 text-color--700">twitter</span>
                                </Link>
                            </div>
                           
                        </div>
                       
                    </div>
                   
                </div>
               
            </section>
          
            <section className="pb-6 pb-lg-10 bg-color--primary-light--1" id="news">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-6 reveal">
                            <div className="card card-hover--shadow border--none mb-3">
                                <Link to="#"><img src="assets/img/news-5.jpg" className="card-img-top" alt="news"/></Link>
                                <div className="card-body d-flex flex-column px-2 py-3 px-lg-4 py-lg-5">
                                    <span className="font-size--14 text-color--400 mb-1">13rd July, 2019</span>
                                    <Link to="#" className="card-title h5-font font-w--500 text-color--700 mb-0 text-hover--primary">Facts Why Inkjet Printing Is Very Appealing Compared To Ordinary Printing.</Link>
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className="col-12 col-md-7 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-md-6 reveal">
                                    <div className="card card-hover--shadow border--none mb-3">
                                        <Link to="#"><img src="assets/img/news-6.jpg" className="card-img-top" alt="news"/></Link>
                                        <div className="card-body d-flex flex-column px-2 py-3">
                                            <span className="font-size--14 text-color--400 mb-1">13rd July, 2019</span>
                                            <Link to="#" className="card-title font-size--16 font-w--500 text-color--700 mb-0 text-hover--primary">Life Advice Looking Through A Window.</Link>
                                        </div>
                                    </div>
                                   
                                </div>
                               
                                <div className="col-12 col-md-6 reveal">
                                    <div className="card card-hover--shadow border--none mb-3">
                                        <Link to="#"><img src="assets/img/news-7.jpg" className="card-img-top" alt="news"/></Link>
                                        <div className="card-body d-flex flex-column px-2 py-3">
                                            <span className="font-size--14 text-color--400 mb-1">13rd July, 2019</span>
                                            <Link to="#" className="card-title font-size--16 font-w--500 text-color--700 mb-0 text-hover--primary">5 Reasons To Purchase Desktop Computer.</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="col-12 reveal">
                                    <div className="card card--full-image position-relative">
                                        <img src="assets/img/news-8.jpg" alt="news" className="card-img"/>
                                        <div className="card-body d-flex flex-column p-3 px-lg-4 py-lg-3 pos-abs-bottom">
                                            <span className="font-size--14 color--white mb-1">13rd July, 2019</span>
                                            <Link to="#" className="card-title h5-font color--white font-w--500 mb-0">Facts Why Inkjet Printing Is Very Appealing Compared To Ordinary Printing.</Link>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
            
            <section className="space--top">
                <div className=" position-relative pb-7 pb-md-4 pb-lg-1 pb-xl-0 z-index1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-9 col-lg-6 mb-4 mb-lg-7 mx-auto text-center reveal">
                                <h2 className="mb-2 font-size--40 font-w--700">Sign up for the latest updates.</h2>
                                <p>EIBC Meeting is designed to pioneer the software architecture, the leading scalability solution 2. The EIBC Meeting network is a stakeholder and infinitely scalable.</p>
                            </div>
                        </div>
                       
    
                        <div className="row mb-8">
                            <div className="col-12 col-md-10 col-lg-6 mx-md-auto">
                                <div className="form--v4 reveal">
                                    <form action="#" className="form bg-color--primary rounded--05">
                                        <div className="input-group d-flex">
                                            <input type="email" className="form-control" placeholder="Enter your email" required/>
                                            <button className="btn btn-hover--splash btn-bg--primary" type="submit"><span className="btn__text"><i className="icon icon-arrow-right"></i></span></button>
                                        </div>
                                    </form>
                                   
                                </div>
                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-9 col-xl-8 text-center mx-auto mb-3 mb-sm-1">
                                <picture>
                                    <img src="assets/img/newsletter-illustrator-2.png" alt="illustration" className="img-fluid"/>
                                </picture>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>

                
                
    
        
                
            </section>
           
           </main>
         
          </div>
        )

        
            
        

    }
}
export default Home 