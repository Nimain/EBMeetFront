

import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Footer extends React.Component{
    render(){

        return(

            <div>

            <footer className="footer pt-10 bg-color--primary section--dark position-relative hidden jsElement" data-pull="-153">
            <div className="pt-3 pt-lg-10 pb-6 pb-lg-10 border--bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-4 mb-4 mb-xl-0">
                            <div className="pr-xl-3">
                                <span className="mb-3">
                                        <img src="/brandlogo.png" alt="brand-logo"/>
                                    </span>
                                <p>The main objectives of the project are to meet the needs of video conferencing projects and users, and to provide access to investment product.</p>
                            </div>
                        </div>
                       
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 mb-2 mb-xl-0">
                            <div className="widget widget-nav">
                                <span className="widget__title font-size--20 font-w--700 mb-1">Useful Link</span>
                                <ul>
                                    <li><Link to="#">How it works</Link></li>
                                    <li><Link to="#">Meeting details</Link></li>
                                    <li><Link to="#">Team</Link></li>
                                    <li><Link to="#">Roadmap</Link></li>
                                    <li><Link to="#">Documents</Link></li>
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2 offset-xl-1 mb-2 mb-xl-0">
                            <div className="widget widget-nav">
                                <span className="widget__title font-size--20 font-w--700 mb-1">Documents</span>
                                <ul>
                                    <li><Link to="#">Whitepaper</Link></li>
                                    <li><Link to="#">Onepager</Link></li>
                                    <li><Link to="#">Privacy policy</Link></li>
                                    <li><Link to="#">Terms of use</Link></li>
                                    <li><Link to="#">Agreement</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-6 col-md-4 col-xl-3">
                            <span className="widget__title font-size--20 font-w--700 mb-1">Address</span>
                            <p className="font-size--16 color--white">EIBC Meeting . Delhi, New Delhi (110011)</p>

                        </div>
                        
                    </div>
                </div>
                
            </div>
           
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="font-size--15 opacity--80">© 2020 <Link to="#" className="color--white">EIBC Meeting. All Rights Reserved.</Link></p>
                        </div>
                    </div>
                   
                </div>
                
            </div>
           
        </footer>

        </div>

        )

    }
}
export default Footer