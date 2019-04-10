import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import VideoPlayer from './comp/VideoPlayer'

class Home extends Component{
  state = {
    videos: [
      { link: 'olc94Mq84sA', title: 'Remove Background In photoShop', Description: 'this is Description' },
      { link: 'bVPaqcEZfts', title: '5 mints Craft', Description: 'this is Description' },
      { link: 'oiVj4oMhCt0', title: 'Mr Bean funny Comedy', Description: 'this is Description' },
      { link: 'vO017td3SbA', title: 'Mr Bean funny Comedy 2', Description: 'this is Description' },
      { link: '_R1PBhaZrZo', title: 'Mr Bean funny Comedy 3', Description: 'this is Description' }

    ]
  }
  render(){
    return <div className="flex">
    {this.state.videos.map((video) => {
          return <Link to={"/video/"+video.link}>
            <VideoThumb data={video} />
            </Link>

        })
        }
    </div>
  }
}
class VideoThumb extends Component {
  render() {
    return (
      <div>
         
        <div className="vid">
          <img src={'https://img.youtube.com/vi/' + this.props.data.link + '/0.jpg'} />
          <strong>{this.props.data.title}</strong>
        <p>{this.props.data.Description}</p>
          
        </div>
      </div>



    )
  }



}

export default class App extends Component {
 

  render() {
    return ( <BrowserRouter>
      
        
        <Route exact path={"/"} component={Home}></Route>

        <Route path={"/video/:vID" } component={VideoPlayer}></Route>
      
      </BrowserRouter>
    )

  }
}