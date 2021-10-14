import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem1';
import ImagesError from '../../ImagesError/ImagesError';


import s from '../ImageGallery/ImageGallery.module.css';
import sl from '../Loader/Loader.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import ImgApiService from '../../APIService/ImagesAPIService';

// const ImgRequestApi = new ImgApiService();
// console.log(ImgRequestApi.resetPage());
// console.log(ImgRequestApi.query());
import imagesAPI from '../../APIService/APIservice';

class ImageGallery extends Component {

    state = {        
        images: [],
        error: '',
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
     
        const prevQuery = prevProps.searchQuery;
        const nextQuery = this.props.searchQuery;
        
        // const BASE_URL = 'https://pixabay.com/api/';
        // const API_KEY = '22960570-8de4834e5e1a62c8570402763';
        // const url = `${BASE_URL}?key=${API_KEY}&q=${nextQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
        
        
        if (prevQuery !== nextQuery) {
            
            this.setState({
                status: 'pending',
            });
            
            
            imagesAPI
                .fetchImg(nextQuery)
            // fetch(url)            
            // .then(response => {
            //      if (response.ok) {
            //         return response.json();
            //     }
            //         return Promise.reject(new Error(`this name ${nextQuery} not faind`),
            //         );
            //     })          
        
                .then(images => {
                console.log(images.totalHits)
                this.setState({images: images.hits, status: 'resolved'});
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
                // errorSearchQuery={searchQuery}
                errorSearchQuery={error.message}
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