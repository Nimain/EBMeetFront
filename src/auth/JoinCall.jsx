import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Header from '../components/Header'
import { isAuth, signout } from '../auth/helpers';
// import { Jutsu } from "react-jutsu";
import {Jutsu} from '../core/videoAPIcall'

const JoinCall =() =>{


    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    const [call, setCall] = useState(false);
    const [password, setPassword] = useState('');

    const handleClick = event => {
        event.preventDefault();
        if (name) setCall(true);
      }


    // const handleClick = (event) => {
    //     event.preventDefault();
    //     if (room && name) {
    //       setCall(true);
    //     } else {
    //       alert("all form is required");
    //     }
    //   };





    const JoinForm = () => (

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
                        <h1 className="h2-font mb-1">Join a Meeting?</h1>
                        <p className="opacity--60 font-size--20">Enter your room name below.</p>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto">
                        <div className="form--v5 bg-color--primary-light--1 px-3 py-4 px-md-5 pt-md-6 rounded--10">
                            <form>
                               

                                <div className="form-group">
                                    
                                    <input id="name" type="text" className="form-control" placeholder="Enter Room ID:"value={name}
        onChange={(e) => setName(e.target.value)} required/>
                                </div>


                                <div className="form-group">
                                    
                                    <input id="room" type="text" className="form-control" placeholder="Password: Optional" value={password}
        onChange={(e) => setPassword(e.target.value)} optional/>
                                </div>
                              
                               
                                    <button onClick={handleClick} className="btn btn-bg--primary btn-size--md btn-hover--3d">
                                       <span className="btn__text">Join</span></button>
                                
                            </form>
                           
                            {/* <div className="text-center mt-4 pt-2 border--top">
                                <p className="text-color--400">Wish to be Host the meeting? <Link to="/signup" className="color--primary">Signup</Link></p>
                            </div> */}
                            
                        </div>
                      
                    </div>
                   
                </div>
               
            </div>
            
        </section>

    );



    return (

        <div>

        {call ? (<Jutsu
            roomName={name}
            password={password}
            displayName={isAuth().name}
            onMeetingEnd={() => console.log('Meeting has ended')}
            loadingComponent={<p>EIBC Meeting is loading ...</p>} />)
            :(
        <Header>

        {JoinForm()}


        </Header>

)}

</div>

    );
}

export default JoinCall;