import React, { Component } from 'react';
import './mainsection.css'

export default class Calculator extends Component {

  
   state = {
      flag: true,
      num: 0
    }
  


  onKeyPressed = (evt) => {
    if (evt.target.innerText == '=') {

      this.setState({
        flag: false,
        exp: this.refs.resCard.value,
        num: this.calculateResult()

      });

    }

    else if (this.state.flag == false) {
      if (parseInt(evt.target.innerText).toString() != "NaN") {
        this.setState({
          num: evt.target.innerText,
          flag: true
        });
      }
      else if (evt.target.innerText == 'C') {
        this.setState({
          num: 0
        });
      }
      else {
        this.setState({
          num: this.state.num + evt.target.innerText,
          flag: true
        });
      }
    }

    else {
      if (this.state.num == 0) {
        this.setState({
          num: evt.target.innerText
        });
      }
      else {
        if (evt.target.innerText == 'C') {
          this.setState({
            num: 0
          });
        }
        else {
          this.setState({
            num: this.state.num + evt.target.innerText
          });
        }
      }

    }

  }

  calculateResult() {

    this.setState({
      flag: true
    });

    return eval(this.state.num);
  }
  render() {
    return (
    <div>
      <div>
        <small className="in" ref="calExp">{this.state.exp}</small>
      </div>
      <input className="in" ref="resCard" value={this.state.num} />
      <div onClick={this.onKeyPressed} className='keys'>
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
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
        <button>C</button>
      </div>
    </div>)
  }
}