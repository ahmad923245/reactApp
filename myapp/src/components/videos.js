import React, { Component } from 'react'
import './video.css'

export default class Video extends Component {
    render() {
        return (
            <div className="video">
               
                    <img src="https://img.youtube.com/vi/Owo6SylT1dg/0.jpg" />

                    <p>{this.props.imgfile}</p>
                
            </div>
        )
    }
}


