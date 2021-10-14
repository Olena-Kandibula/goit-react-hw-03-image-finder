import React, { Component } from 'react';
import PropTypes from 'prop-types';


// import Modal from '../Modal';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem ({images:{id, tag, largeImageURL, webformatURL }}) {



      return (
        <>
            {this.props.images.map(image => (
                <li className ={s.imageGalleryItem}
                    key={image.id}>
                    <img
                          // onClick={this.openModal}
                        className={s.imageGalleryItemImage}
                
                        data-set={image.largeImageURL}                          
                        src={image.webformatURL} 
                        alt={image.tag} 
                    />
                </li>
            ))}
         </>     
        
  )
}

ImageGalleryItem.protoType = {
  images: PropTypes.array,
};

export default ImageGalleryItem;