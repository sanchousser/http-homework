import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";

export const App = () => {


  const [searchQuery, setSearchQuery] = useState('')


  const handleSearchSubmit = (searchQuery) => {
    // this.setState({ searchQuery })
    setSearchQuery(searchQuery)
  }




  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery searchQuery={searchQuery} />
      {/* {this.state.isLoading === false ? <ImageGallery pictures={this.state.hits}/> : <Loader />}
        {this.state.hits.length > 0 && <Button onLoadMoreBtnClick={this.handleLoadMoreBtnClick} />} */}
    </div>
  );
};
