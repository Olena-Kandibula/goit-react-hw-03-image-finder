import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import ImgApiService from '../../APIService/APIService';

import s from '../ImageGallery/ImageGallery.module.css';

// const ImgRequestApi = new ImgApiService();

class ImageGallery extends Component {
    state = {
        // images: null,
        images: [],
        loading: false,

        status: 'idle',

    }

    componentDidUpdate(prevProps, prevState) {
     
        const prevQuery = prevProps.searchQuery;
        const nextQuery = this.props.searchQuery;

        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '22960570-8de4834e5e1a62c8570402763';
        const url = `${BASE_URL}?key=${API_KEY}&q=${nextQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
        
        if (prevQuery !== nextQuery) {
            
            this.setState({ loading: true, images:[] });

            fetch(url)            
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(new Error(`this name ${nextQuery} not faind`),
                    );
            }               
                
        )
            .then(images => {
                this.setState({
                    images:images.hits,
                    // images:result.image
                // console.log(images)
                // return images.hits;
                    // loading:false,
                    // error:'',

                })
                

            // })
            // .then(( images ) => {             
                
            //     return images.hits;
            })
                // .catch(error => console.warn(error))
                .catch(error => this.setState({error}))
             
        .finally(() =>
          this.setState({ loading: false })
            //   console.log('loading')
        )

        }
    }
    render() {
        const { images, loading, error, status } = this.state;
        const { searchQuery } = this.props;
        
        if (status === 'idle') {
            return <div>input name</div>
        }

        if (status === 'pending') {
            return <p>loading</p>
        }

        if (status === 'rejected') {
            return <p>{error.message}</p>
        }

         if (status === 'resolved') {
             return (<ul>
                 {images.map(image => (
                     <li key={image.id}>
                         <img src={image.previewURL} alt={image.tag} />
                     </li>
                 ))}
                        
             </ul>);
         }
        }



        return (
            <div>
                <h1>images</h1>
                {error&&<p>{error.message}</p>}
                {loading&&<p>loading</p>}
                {searchQuery === ''&&<p>not name images</p>}
                {images &&
                    <div>
                    <p>{searchQuery}</p>
                    <ul>
                        {images.map(image => (
                        <li key={image.id}>
                           <img src= {image.previewURL} alt = {image.tag}/>
                        </li>
                        ))}
                        
                    </ul>
                    </div>

                }
            </div>
        );
    }
}
export default ImageGallery;