import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem1';
import ImagesError from '../../ImagesError/ImagesError';


import s from '../ImageGallery/ImageGallery.module.css';
import sl from '../Loader/Loader.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import imagesAPI from '../../APIService/APIservice';

class ImageGallery extends Component {

    state = {        
        images: [],
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
     
        const prevQuery = prevProps.searchQuery;
        const nextQuery = this.props.searchQuery;      
        
        
        
        if (prevQuery !== nextQuery) {
            
            this.setState({
                status: 'pending',
            });
            
            
            imagesAPI
                .fetchImg(nextQuery)                   
        
                .then(images => {
                    if(images.total !==0 ){
                
                        return this.setState({ images: images.hits, status: 'resolved' });
                    }
                    return this.setState({  status: 'rejected' });
            })
                // .catch(error => console.warn(error))
            .catch(error => this.setState({error, status: 'rejected'}))
                         
        }
    }

    render() {
        const { images, error, status } = this.state;
        const { searchQuery } = this.props;
        console.log(images.length);
        
        if (status === 'idle') {
            return <div>input name</div>
        }

        if (status === 'pending') {           
            return <Loader className = {sl.loader}
                type="BallTriangle"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={3000}
            />           
        }

        if (status === 'rejected') {

            return <ImagesError
                errorSearchQuery={searchQuery}
            />            
        }

        if (status === 'resolved') {
             
            return (<ul className={s.imageGallery}>
                 
                 <ImageGalleryItem
                     images={images}
                />
                
             </ul>
                 
             );
         }
    }
    
}
    
ImageGallery.prototypes = {
    searchQuery:PropTypes.string
    
}

export default ImageGallery;