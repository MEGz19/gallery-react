import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {
    // state = {
    //     isVisible : true 
    //   }
    
    //   handleToggle = () => {
    //     console.log('clicked image');
    //     this.setState({
    //       isVisible : !this.state.isVisible
    //     })
    //   }

    render() {
        return (
            <>
                <img src={this.props.galleryItem.path} alt="HTML5" />
                <>{this.props.galleryItem.likes} people like my picture
                    <button onClick={() => this.props.handleLike(this.props.galleryItem.id)}>Like!</button>
                </>
            </>
        )
    }
}

export default GalleryItem;