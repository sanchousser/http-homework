import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {

  state = {
    searchQuery: '',
    isLoading: false,
    hits: [],
  }



  apikey = `https://pixabay.com/api/?q=cat&page=1&key=42288068-1aa5220c6fe3b03abf2540867&image_type=photo&orientation=horizontal&per_page=12`

  handleSearchSubmit = (query) => {
    this.setState({ searchQuery: query })
    this.handlePicturesLoad(query)

  }


  async handlePicturesLoad(query) {
    this.setState({ isLoading: true });
    const response = await fetch(`https://pixabay.com/api/?q=${query}&page=1&key=42288068-1aa5220c6fe3b03abf2540867&image_type=photo&orientation=horizontal&per_page=12`);
    if (response.ok) {
      this.setState({
        isLoading: false,
      });
      this.setState({hits: response.hits})

    }

  }

  // handleGalleryBuild = (query) => {
  //   fetch(`https://pixabay.com/api/?q=${query}&page=1&key=42288068-1aa5220c6fe3b03abf2540867&image_type=photo&orientation=horizontal&per_page=12`)
  //     .then((value) => {

  //     })
  // }




  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery />
      </div>
    );
  }
};
