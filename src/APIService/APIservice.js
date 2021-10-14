const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '22960570-8de4834e5e1a62c8570402763';
        

 function fetchImg(searchQuery) {
const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`

     return fetch(url)
         // .then(response => {
         //      if (response.ok) {
         //         return response.json();
         //     }
         //     return Promise.reject(
         //         new Error(`this name
         //         // ${searchQuery}
         //          not faind`
         //         ),
         //         );
         //     })  
     
         .then(response => response.json())
         
         .then(data => { return data })
        
         .catch(error => console.worm(error));
    
}

const api = { fetchImg };

export default api;