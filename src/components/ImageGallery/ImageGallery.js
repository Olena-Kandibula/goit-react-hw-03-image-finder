import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";

import imagesAPI from '../../APIService/APIservice';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImagesError from '../../ImagesError/ImagesError';
import Button from '../Button/Button';


import s from '../ImageGallery/ImageGallery.module.css';
import sl from '../Loader/Loader.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import sb from '../Button/Button.module.css';




class ImageGallery extends Component {

    state = {        
        images: [],
        imagesTotal: null,
        error: null,
        status: 'idle',
        currentPage: 1,
        searchQuery:'',
    }

    componentDidUpdate(prevProps, prevState) {
     
        const prevQuery = prevProps.searchQuery;
        const nextQuery = this.props.searchQuery;
        
        const { currentPage, searchQuery } = this.state;
        // let currentPage = 1;
        
        if (prevQuery !== nextQuery) {            
            this.setState({
                status: 'pending',
                currentPage: 1,
            });
            
            
            imagesAPI
                .fetchImg(nextQuery,currentPage)
                
                // .then(images => this.setState({ imagesTotal: images.total })
                // )
        
                .then(images => {
                    if (images.total !== 0) {                       
                        
                        this.setState({
                            imagesTotal: images.totalHits,
                            searchQuery: nextQuery,
                        })

                        return this.setState({
                            images: images.hits,
                            status: 'resolved',
                        });
                    }
                    return this.setState({  status: 'rejected' });
            })
                // .catch(error => console.warn(error))
            .catch(error => this.setState({error, status: 'rejected'}))
                         
        }

 
        // console.log('prevState', prevState.currentPage)
        // console.log('this.state', this.state.currentPage)
        //  console.log('prevState', prevState.searchQuery)
        // console.log('this.state', this.state.searchQuery)

       
    }

    addImages = () => {

        this.setState({
            status: 'pending',
            // currentPage: currentPage += 1,
        });
        // console.log(prevProps)
        //  console.log(prevProps)
        const {  searchQuery, currentPage } = this.state;
        let nextPage = currentPage +1 ;
        // let nextNextPage =nextPage + 1;
 
    imagesAPI
      .fetchImg(searchQuery, nextPage)
      .then(data => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            status: 'resolved',            
            currentPage: nextPage,
          };
        });
      })
        .finally(() => {
            window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });        
      });
  };

    render() {
        const { images, error, status, imagesTotal, currentPage } = this.state;
        // const total = this.state.imagesTotal;
        const { searchQuery } = this.props;
        
        const availablePages = Math.ceil(imagesTotal/12);
        // console.log(availablePages);
        
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

        if ((status === 'resolved') && (availablePages > 1)) {          
            
            return (
                <>
                    <ul className={s.imageGallery}>
                 
                        <ImageGalleryItem
                            images={images}
                        />
                
                    </ul>
                
                    <Button
                        pages={availablePages}
                         currentPage={currentPage}
                    addImages ={this.addImages}
                        
                    />
                    
                </>
                
            );
        }

            if (status === 'resolved' || availablePages ===1 ) {
             console.log("=1")
            return (
                
                <ul className={s.imageGallery}>
                 
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