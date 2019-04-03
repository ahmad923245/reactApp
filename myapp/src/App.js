import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/headerFiles/mainheader';
import  Video from './components/videos';
import  Calculator  from './components/sectionarea/mainsection';


import './App.css';
import Uper from './components/headerFiles/upperheader';

class App extends Component {
  render() {
    return (
      <div className="areasab">
        
          {/* <Header /> */}

          <Calculator/>

          {/* <Uper /> */}

          {/* <Video imgfile="ahmad zafar "/>
          <Video imgfile="Files of youtube"/>
          <Video imgfile="ahmad youtube"/> */}

          
      






      </div>


    );
  }
}

export default App;
