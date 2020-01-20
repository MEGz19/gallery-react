import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

import Home from '../Home/Home.js'
import About from '../About/About.js'

import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


class App extends Component {
  //Create state
  state = {
    galleryList: [],
    newPic: {
      description: '',
      likes: ''
    }   
  }

  // runs once, after the first render
  //DOES THIS KEEP IT FROM REPEATING THROUGH THE LOOP (UNENDINNG LOOP)???????
  componentDidMount() {
    console.log('APP MOUNTED ON DOM')
    // MAKE AN INITIAL GET REQUEST
    this.getPictures();

  }

  //GET data 
  //Use axios to retrieve (GET) data from to /gallery and store it in App.js. 
  getPictures = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      //with axios our rows are on .data of the response```
      console.log('in GET:', response.data);
      //save in state!
      this.setState({
        galleryList : response.data
      })
    }).catch((err) => {
      alert(err);
    })
  }

  //Create handleLike function
  //PUT request
  handleLike = (id) => {
    console.log('clicked like!');
    axios.put(`/gallery/like/${id}`,this.state.galleryList)
      .then((response) => {
        this.getPictures();
      }).catch((err) => {
        alert(err)
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
        <GalleryList galleryList={this.state.galleryList} handleLike={this.handleLike}/>

      </div>
    );
  }
}

export default App;


