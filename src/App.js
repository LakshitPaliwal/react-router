import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route,Switch} from 'react-router-dom';


function App() {
  
      return (
        <BrowserRouter>
      <div className="App">
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={About} />
           <Route path="/Contact" component={Contact} />
        </Switch>

       
      </div>
       </BrowserRouter>

  );
}


export default App;
