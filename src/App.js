import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';


class App extends Component {
  state = {
    searchQuery: '',
    // ====
    // images: [],
    loaging: false,

  }

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   //    fetchImg()  {
  //       console.log(this.state.searchQuery)        
  //       const BASE_URL = 'https://pixabay.com/api/';
  //       const API_KEY = '22960570-8de4834e5e1a62c8570402763';
  //       const url = `${BASE_URL}?key=${API_KEY}&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`
        
  //        fetch(url)            
  //           .then(response => 
  //               // console.log('respons',response.json())
  //               response.json()
  //       )
  //           .then(images => {
  //               this.setState({images:images.hits })
  //                   // images:result.image
  //             console.log('hits', images.hits)
  //             console.log('hits', images.hits.id)
  //             // console.log('total',images.total)
  //               // return images.hits;

               
  //               // return images;

  //           // })
  //           // .then(( images ) => {             
                
  //               // return images.hits;
  //           })
  //          .catch(error => console.warn(error))
  //          .finally(() =>
  //            this.setState({ loading: false })
  //           //  console.log('loading')
  //          )
        
  //   }

  formSubmitHandler = newSearch => {
    
    this.setState({searchQuery: newSearch})
  };

  render() {
    
    return (
      <div className="App">
      <Searchbar onSubmit={this.formSubmitHandler}>
        </Searchbar>
        
        <ImageGallery
          searchQuery={this.state.searchQuery}>
          
      </ImageGallery>
        
        {/* <ul>
          {this.state.loaging&& <h1>loading</h1>}
          {this.state.images.map(image => (
           
                 <li className="ImageGalleryItem" key={image.id}> 
                 <img src={image.previewURL} alt={image.tags} className="ImageGalleryItem-image" /> 
             
             </li> 
           ))} 
        </ul> */}
      </div>
    )
  };
}

export default App;
