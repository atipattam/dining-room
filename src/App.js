import React from 'react';

import './App.css';

import SignIn from './SignIn';
import {BrowserRouter,Switch, Route}from 'react-router-dom';
import SignUp from './Signup';
import Page from './page';
import Home from './pages';
import Chat from './Chat';


function App() {


  return (
    <BrowserRouter>
   <div className="App">
<Switch>
  <Route path="/" component={Home} exact/>
  <Route path="/signup" component={SignUp} exact/>
  <Route path="/signin" component={SignIn} exact/>
  <Route path="/page" component={Page} exact/>
  <Route path="/chat" component={Chat} exact/>
 </Switch>
   


    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
