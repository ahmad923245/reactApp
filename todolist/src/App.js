import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/other'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  saveitem = () => {
    this.state.list.push(this.refs.mytext.value);
    // console.log(this.state.list);
    this.setState({
      list: this.state.list,
      
    })
  }
  

  render() {

    return <div className="loginform">
      <div className="">
        <label>Enter Text:</label>
        <input type="text"  ref="mytext" />

        <button onClick={this.saveitem}>Add item</button>
      </div>

      <ol>

        {this.state.list.map((item, index) => {


          return <li key={index + 1}>
            {item}



          </li>


        })


        }
      </ol>


        <Header/>
       
    </div>

  }

}




