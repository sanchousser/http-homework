import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";

export class App extends Component {

  state = {
    searchQuery: '',
    isLoading: false,
    hits: [],
    perPage: 12,
  }



  // apikey = `https://pixabay.com/api/?q=cat&page=1&key=42288068-1aa5220c6fe3b03abf2540867&image_type=photo&orientation=horizontal&per_page=12`

  handleSearchSubmit = (query) => {
    this.setState({ searchQuery: query, perPage: 12})
    this.handlePicturesLoad(query)


  }


  async handlePicturesLoad(query) {
    this.setState({ isLoading: true });
    const response = await fetch(`https://pixabay.com/api/?q=${query}&page=1&key=42288068-1aa5220c6fe3b03abf2540867&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`)
      .then(response => response.json())
      .then(response => this.setState({hits: response.hits}))
      .then(() => this.setState({ isLoading: false }))

  }

  handleLoadMoreBtnClick = () => {
   this.setState(prevState => ({perPage: prevState.perPage+=12})) 
   this.handlePicturesLoad(this.state.searchQuery)
  }




  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.state.isLoading === false ? <ImageGallery pictures={this.state.hits}/> : <Loader />}
        {this.state.hits.length > 0 && <Button onLoadMoreBtnClick={this.handleLoadMoreBtnClick} />}
      </div>
    );
  }
};
