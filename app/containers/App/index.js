

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from './Login/Login';
import Users from './Users/Users';
import Comments from './Comments/Comments';
import NavBar from '../../components/NavBar'
import Home from './Home/Home';
import ExtendSession from "../../components/ExtendSession"
import { useGoogleAuth } from "../../utils/googleOAuth";
import NewWindow from 'react-new-window'


import 'primeflex/primeflex.css';

export default function App() {

  const { isSignedIn, googleUser } = useGoogleAuth();

  const globalAlignment = {
    backgroundcolor: 'tomato',
    border: '2px solid black',
    margin: '20px',
    height: '960px',
    width: 'auto',
  };

  const loginAlignment = {
    backgroundcolor: 'tomato',
    border: '2px solid black',
    margin: '20%',
    width: '20%',
    padding: '4%'
  };




  const content = (
    <Router>
      {!isSignedIn && <Login />}
      <NavBar googleUser={googleUser} />
      <ExtendSession />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/comment">
          <Comments />
        </Route>
      </Switch>

    </Router>
  )

  return (
    <NewWindow features={{
      height: 600,
      width: 600
    }}>
      <div style={isSignedIn ? globalAlignment : {}}>

        {!isSignedIn &&
          <div style={!isSignedIn ? loginAlignment : {}}>
            <Login />
          </div>
        }
        {isSignedIn && content}
      </div>
    </NewWindow>

  );
}
