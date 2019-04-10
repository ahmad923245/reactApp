import React, { Component } from 'react'
import Youtube from 'react-youtube'
import './videoplayer.css'

export default class VideoPlayer extends Component {
  render() {
    return (
      <div className="videoplayer">
          <Youtube videoId={this.props.match.params.vID} />
        
      </div>
    )
  }
}
