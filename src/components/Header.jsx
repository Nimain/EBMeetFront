// import React, {Component} from 'react';

// class Header extends React.Component{
//     render(){

//         return(

//                 <div>
//                      <header class="navbar navbar-sticky navbar-expand-lg navbar-light">
               
//                <div class="container-fluid position-relative">
//                    <a class="navbar-brand" href="index.html">
//                        <img class="navbar-brand__regular" src="./brandlogo.png" alt="RTCMultiConnection"/>
//                        <img class="navbar-brand__sticky" src="/brandlogo.png" alt="sticky brand-logo"/>
//                    </a>
                  
//                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
//                        <span class="navbar-toggler-icon"></span>
//                    </button>
                  
   
//                    <div class="navbar-inner pl-lg-2 pl-xl-6">
                      
//                        <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
//                            <span class="navbar-toggler-icon"></span>
//                        </button>
                      
//                        <nav>
//                            <ul class="navbar-nav" id="navbar-nav">
//                                <li class="nav-item dropdown">
//                                    <a class="nav-link dropdown-toggle" href="javascript:;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions</a>
//                                    <ul class="dropdown-menu">
//                                        <li>
//                                            <a class="dropdown-item" href="index.html">Home</a>
//                                        </li>
   
//                                        <li>
//                                            <a class="dropdown-item" href="pricing.html">Pricing</a>
//                                        </li>
                                      
//                                    </ul>
//                                </li>
                              
   
//                                <li class="nav-item">
//                                    <a class="nav-link" href="pricing.html">Plan & Pricing</a>
//                                </li>
   
                              
//                                <li class="nav-item">
//                                    <a class="nav-link" href="/meeting/inner-faq.html">FAQ</a>
//                                </li>
   
   
                              
   
   
                               
//                            </ul>
                          
//                        </nav>
//                    </div>
//                    <div class="mr-5 mr-lg-0 ml-lg-2">
//                        <a href="/meeting/dashboard/" class="btn btn-size--sm btn-hover--splash color--primary" ><span class="btn__text font-w--500">HOST</span></a>
   
//                        <a href="signup.html" class="btn btn-size--sm btn-hover--splash color--primary" ><span class="btn__text font-w--500">JOIN</span></a>
                       
//                        <a href="/meeting/login.html" class="btn btn-size--sm btn-bg--primary--05 btn-hover--splash color--primary"><span class="btn__text font-w--500">Log in</span></a>
//                    </div>
   
                   
//                </div>
             
//            </header>


//                 </div>
//                )
//             }
//         }

//     export default Header


import React,{Fragment} from 'react';
import {Link , withRouter} from 'react-router-dom';
import { isAuth, signout } from '../account/helpers';




const Header = ({children, match, history}) => {

    const isActive = path => {
        if (match.path === path) {
            return { color: '#3965f4' };
        } else {
            return { color: '#000' };
        }
    };







    const nav = () => (

        <header className="navbar navbar-sticky navbar-expand-lg navbar-light">
                       
                       <div className="container-fluid position-relative">
                           <Link class="navbar-brand" to="/">
                               <img className="navbar-brand__regular" src="./brandlogo.png" alt="RTCMultiConnection"/>
                              <img className="navbar-brand__sticky" src="/brandlogo.png" alt="sticky brand-logo"/>
                          </Link>
                         
                           <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                               <span className="navbar-toggler-icon"></span>
                           </button>
                         
          
                          <div className="navbar-inner pl-lg-2 pl-xl-6">
                             
                               <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                               </button>
                             
                               <nav>
                                   <ul className="navbar-nav" id="navbar-nav">
                                       <li className="nav-item dropdown">
                                           <Link className="nav-link dropdown-toggle" href="javascript:;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions</Link>
                                           <ul className="dropdown-menu">
                                               <li>
                                                  <Link className="dropdown-item" to="/" className="nav-link" style={isActive('/')}>Home</Link>
                                               </li>
          
                                               <li>
                                                   <Link className="dropdown-item" to="/price">Pricing</Link>
                                               </li>
                                             
                                           </ul>
                                       </li>
                                     
          
                                       <li className="nav-item">
                                           <Link className="nav-link" to="/price">Plan & Pricing</Link>
                                       </li>
          
                                     
                                       <li className="nav-item">
                                           <Link className="nav-link" to="/faq">FAQ</Link>
                                       </li>
          
          
                                     
          
          
                                      
                                   </ul>
                                 
                               </nav>
                           </div>
                 <div className="mr-5 mr-lg-0 ml-lg-2">
                              
                              
        
                               
                               {!isAuth() && (
                        <Fragment>
        
                            
          
                               <Link to="/signup" className="btn btn-size--sm btn-bg--primary--05 btn-hover--splash color--primary"  style={isActive('/signup')}><span className="btn__text font-w--500">Host/Join</span></Link>
                              
                               <Link to="/signin" className="btn btn-size--sm btn-bg--primary--05 btn-hover--splash color--primary" style={isActive('/signin')}><span className="btn__text font-w--500">Log in</span></Link>
                              
        
                           </Fragment>
          
                               )}



                          {isAuth() && isAuth().role === 'admin' && (

                          <Link  to="/admin" className="btn btn-size--sm btn-bg--primary--05 btn-hover--splash color--primary" style={isActive('/admin')}><span className="btn__text font-w--500">{isAuth().name}</span></Link>
                        //       <li className="nav-item">
                        //     <Link className="nav-link" style={isActive('/admin')} to="/admin">
                        //     {isAuth().name}
                        //    </Link>
                        //    </li>
                            )}


                           {isAuth() && isAuth().role === 'subscriber' && (

                           <Link  to="/private" className="btn btn-size--sm btn-bg--primary--05 btn-hover--splash color--primary" style={isActive('/private')}><span className="btn__text font-w--500"> {isAuth().name}</span></Link>
                        //    <li className="nav-item">
                        //    <Link className="nav-link" style={isActive('/private')} to="/private">
                        //     {isAuth().name}
                        //     </Link>
                        //     </li>
                            )}


{isAuth() && (
<Link to="/eibcmeeting" className="btn btn-size--sm btn-hover--splash color--primary" ><span className="btn__text font-w--500">Strat Meeting</span></Link>
        )}
             </div>
        
        
                            {isAuth() && (


//  <li className="btn nav-item btn-size--sm btn-bg--primary--05 btn-hover--splash color--primary" ><span className="btn__text font-w--500"  
//                                 onClick={() => {
//                                     signout(() => {history.push('/');
//                                                    });
//                                 }}>Signout</span></li> 


                        <li className="nav-item">
                            <span
                                className="btn__text font-w--500"
                                style={{ cursor: 'pointer', color: '#000' }}
                                onClick={() => {
                                    signout(() => {
                                        history.push('/');
                                    });
                                }}
                            >
                            Signout
                            </span>
                        </li>
                    )}
                   </div>
                    
            </header>
        
        
        );













    return(



    
     <Fragment>


     {nav()}
     <div className= "container">{children}</div>

      </Fragment>

    );
};
export default withRouter(Header);

