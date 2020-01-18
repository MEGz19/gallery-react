import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  //Create state
  state = {
    galleryList: [],
    newPic: {
      description: '',
      likes: ''
    }   
  }


  //GET data 
  //Use axios to retrieve (GET) data from to /gallery and store it in App.js. 
  getPictures = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      //with axios our rows are on .data of the response```
      console.log(response.data);
      //save in state!
      this.setState({
        galleryList : response.data
      })
    }).catch((err) => {
      alert(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList />

      </div>
    );
  }
}

export default App;
