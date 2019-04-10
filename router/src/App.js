import React, { Component } from 'react';
import logo from './logo.svg';

import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import DishView from './compotents/dish/dishView';

export default class App extends Component {
  render() {
    
    return (<BrowserRouter>
      <div className="App">

        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/dishView">Dishes</Link></li>
          <li><Link to="">Order Dish</Link></li>
        </ul>
        <Route path="/dishView" component={DishView}/>
        
      </div>
      </BrowserRouter>
    );
  }
}


