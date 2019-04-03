import React, { Component } from 'react'
import './upperheader.css'

export default class Uper extends Component {
  calculationDone(){

    
  }
  onkeypressed = (evt) => {


    if (evt.target.innerText == "=") {
      this.refs.clexp.innerText = this.refs.rescard.value;
      this.refs.rescard.value = this.calculate();
      

    
    }

    else{


      
       
      this.refs.rescard.value += evt.target.innerText;


    }
    if (evt.target.innerText == "C") {
      this.refs.rescard.value = '';
    }

    
    
  }
  
  calculate() {
    return eval(this.refs.rescard.value);
  }
  clearhis=()=>{
   
  }
  render() {
    return (
      <div>

        <div onClick={this.onkeypressed} className="keys">
          <small ref="clexp">History:</small>
          <input ref="rescard" />
          <button>-</button>
          <button>+</button>
          <button>/</button>
          <button>*</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>=</button>
          <button>C</button>
          <button onClick={this.clearhis}>Clear History</button>


        </div>
      </div>
    )
  }
}

