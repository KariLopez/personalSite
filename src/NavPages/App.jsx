import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './AboutMe.jsx';
import Home from './Home.jsx';

function App(){
      return(
            <Router>
                    <Switch>
                        <Route path="/"><Home/></Route>
                        <Route path="/about"><About/></Route>
                    </Switch>
            </Router>

      )
  }
  export default App;
