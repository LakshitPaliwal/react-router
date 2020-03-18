import React, {Component} from 'react';
import './App.css';
import Navmenu from './Navmenu';

class About extends Component {
  render(){
      return (
      <div className="App">
          <Navmenu/>
          <h1>About</h1> 
          <h6>
              this is my app in reactJS and
              this is about hoe to routing and switch the tab. 
          </h6>

      </div>
  );
}
}


export default About;
