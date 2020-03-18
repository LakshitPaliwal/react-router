import React, {Component} from 'react';
import './App.css';
import Navmenu from './Navmenu';

class Home extends Component {
  render(){
      return (
      <div className="App">
        <Navmenu/>
       <h4>this is home page and made with react js </h4>
       <br></br>
       <h6>this is home page </h6>
         <br></br><br></br>

      </div>
  );
}
}


export default Home;
