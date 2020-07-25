import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Signup from './account/Signup';
import Login from './account/login';
import Activate from './account/Activate'
import JoinCall from './account/JoinCall'
import Price from './pages/pricing';
import Faq from './pages/Faqs';
import Private from './components/Private';
import Admin from './components/Admin';
import Forgot from './account/Forgot';
import Reset from './account/Reset';
import PrivateRoute from './account/PrivateRoute';
import AdminRoute from './account/AdminRoute';


const Routes = ()=>{

     return(
        
        <BrowserRouter>
         
        <Switch>

           <Route path="/" exact component= {App} />

           <Route path="/signup" exact component= {Signup} />

           <Route path="/signin" exact component={Login} />

           <Route path= "/auth/activate/:token" exact component={Activate} />

           <Route path= "/eibcmeeting" exact component = {JoinCall}/>

           <Route path="/price" exact component = {Price}/>

           <Route path="/faq" exact component = {Faq}/>

           <PrivateRoute path="/private" exact component={Private} />
          
           <AdminRoute path="/admin" exact component={Admin} />

           <Route path="/auth/password/forgot" exact component={Forgot} />

          <Route path="/auth/password/reset/:token" exact component={Reset} />

        </Switch>
        
        </BrowserRouter>
    
     );   
};

export default Routes;