import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'
import { Component } from "react"
import { handlePicturesLoad } from "services/getPixabayContent"

export class ImageGallery extends Component {

    state = {
        isLoading: false,
        page: 1,
        images: [],
        totalPages: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.searchQuery !== this.props.searchQuery || prevState.page !== this.state.page) {
            handlePicturesLoad(this.props.searchQuery, this.state.page)
            .then(images => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...images.hits]
                }))
            })
        }
    }

//       handleLoadMoreBtnClick = () => {
//    this.setState(prevState => ({page: prevState.page+1})) 
//   }

    render() {
        return (<ul className={css.gallery}>{
            this.state.images.map(image => (<ImageGalleryItem key={image.id} url={image.webformatURL}
                alt={image.tags} />))
        }</ul>)
    }
}