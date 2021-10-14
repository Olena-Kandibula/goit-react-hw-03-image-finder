import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';


// import Modal from '../Modal';
import s from './ImageGalleryItem.module.css';


  
function ImageGalleryItem ({images:{id, tag, largeImageURL, webformatURL }}) {

//   let id = shortid.generate();
// console.log('shortid', id)

      return (
        <>
            {this.props.images.map(image => (
              <li className={s.imageGalleryItem}
                // key =  {id}
                key={image.id}
              >
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