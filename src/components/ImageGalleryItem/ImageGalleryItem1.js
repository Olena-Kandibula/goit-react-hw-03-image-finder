import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Modal from '../Modal';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   openModal = e => {
//     this.setState({ showModal: e.target.dataset.set });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false });
//   };

  render() {
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
              
              {/* {this.state.showModal && (
          <Modal closeModal={this.closeModal}>
            <img
              src={this.state.showModal}
              alt="modal_picture"
              className={s.bigimg}
            />
          </Modal>
        )} */}
              


        </>    
          );     
  }
}

ImageGalleryItem.protoType = {
  images: PropTypes.array,
};

export default ImageGalleryItem;