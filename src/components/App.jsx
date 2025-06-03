import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";

export class App extends Component {

  state = {
    searchQuery: '',
  }


  handleSearchSubmit = (searchQuery) => {
    this.setState({searchQuery})
  }




  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery}/>
        {/* {this.state.isLoading === false ? <ImageGallery pictures={this.state.hits}/> : <Loader />}
        {this.state.hits.length > 0 && <Button onLoadMoreBtnClick={this.handleLoadMoreBtnClick} />} */}
      </div>
    );
  }
};
