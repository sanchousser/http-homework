import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

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

    </div>
  );
};
