import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Navmenu extends Component {
  render(){
      return (
      <div className="navStyle">
           <ul>
               <li> <Link to="/"> Home </Link></li>
               <li> <Link to="Contact">Contact </Link></li>
               <li> <Link to="About">About </Link></li>
           </ul>
           
      </div>
  );
}
}


export default Navmenu;
