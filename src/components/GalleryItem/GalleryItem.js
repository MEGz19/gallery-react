import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {
    state = {
        isToggled : true 
      }

      handleToggle = () => {
        console.log('clicked image');
        this.setState({
          isToggled : !this.state.isToggled
        })
      }

    render() {
        let conditionalPic;
        if(this.state.isToggled === true) {
            conditionalPic = 
            <img src={this.props.galleryItem.path} onClick= {this.handleToggle} alt=''/>
        } else {
            conditionalPic = (
                <p onClick= {this.handleToggle}> 
                    {this.props.galleryItem.description}</p>
            )
        }
        


        return (
            <>
                {conditionalPic}
                {/* <img src={this.props.galleryItem.path} onClick= {(this.handleToggle)}/> */}
                <>{this.props.galleryItem.likes} people like my picture
                    <button onClick={() => this.props.handleLike(this.props.galleryItem.id)}>Like!</button>
                </>
            </>
        )
    }
}

export default GalleryItem;


{/* <>
    <button onClick={this.handleHide}>TOGGLE THIS SONG</button>
    {songJSX}
</> */}