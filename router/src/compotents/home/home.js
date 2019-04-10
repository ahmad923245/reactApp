import React, { Component } from 'react'
import './home.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import About from './about'

export default class Home extends Component {
    render() {
        return (<BrowserRouter>
           
                <div className="header">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    {/* <Route exact path="/login" Component={Login} />
                    <Route exact path="/signup" Component={Home} /> */}

                </div>

            
        </BrowserRouter>
        )
    }
}
