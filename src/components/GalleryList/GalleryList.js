import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



class GalleryList extends Component {
    render() {
        console.log(this.props.galleryList);
        return (
            <>
                {/* loop through galleryList with .map */}
                {this.props.galleryList.map(galleryItem => {
                    console.log(galleryItem.id);
                    return (
                        <GalleryItem key={galleryItem.id} galleryItem={galleryItem} 
                        handleLike={this.props.handleLike}/>
                    )
                })}
            </>

        )
    }
}
export default GalleryList;