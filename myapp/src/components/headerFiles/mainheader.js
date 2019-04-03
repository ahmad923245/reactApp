import React, { Component } from 'react'
import './mainheader.css'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (

      <div className="headerdiv">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Privacy & Policy</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Log In</a></li>
        </ul>
      </div>


    )
  }
}