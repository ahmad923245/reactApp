import React, { Component } from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Profile from './profile'


class videoThumb extends Component{
  


}

export default class ContactUs extends Component {
  state={
    videos:[
    {link:'',title:'Video 1'},
    {link:'',title:'Video 2'},
    {link:'',title:'Video 3'},
    {link:'',title:'Video 4'},
    {link:'',title:'Video 5'}
      




    ]
  }

  render() {
    return<div>

      {

        this.state.videos.map((video) =>{
            return <videoThumb data={video}/>
        })
      }


    </div>
  }
}
