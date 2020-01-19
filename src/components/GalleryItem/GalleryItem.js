import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {
  render() {
    return (
      <>
        <img src={this.props.galleryItem.path} alt="broken url"/>
      </>
    );
  }
}

export default GalleryItem;