const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '42288068-1aa5220c6fe3b03abf2540867'


export function handlePicturesLoad(query, page) {
  this.setState({ isLoading: true });
  const response = fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.ok ? response.json() : Promise.reject(new Error()))
    
}

