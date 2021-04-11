import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './AboutMe.jsx';
import Home from './Home.jsx';

function NewApp(){
      return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/"><Home/></Route>
                        <Route path="/about"><About/></Route>
                    </Switch>
                </div>
            </Router>

      )
  }
  export default NewApp;
