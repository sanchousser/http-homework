import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'
import { Component } from "react"
import fetchImages from "services/getPixabayContent"

import { toast } from 'react-toastify';
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";



export class ImageGallery extends Component {

    state = {
        isLoading: false,
        page: 1,
        images: [],
        totalPages: 1,
        error: null,
        showModal: false,
        selectedImage: '',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery || prevState.page !== this.state.page) {
            fetchImages(this.props.searchQuery, this.state.page)
                .then(images => {
                    this.setState(prevState => ({
                        images: [...prevState.images, ...images.hits],
                        totalPages: Math.ceil(images.hits / 12)
                    }))
                    if (prevProps.searchQuery !== this.props.searchQuery) {
                        this.setState({ images: [...images.hits] })
                    }
                    if (!images.hits.length) {
                        this.setState({ images: [] })
                        toast.error(`
                        Sorry, ${this.props.searchQuery} not found
                    `)
                    }
                }).catch(error => this.setState({ error }))

        }
    }

    onLoadMoreBtnClick = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }))
    }

    toggleModal = (image) => {
        this.setState(prevState => ({ showModal: !prevState.showModal, selectedImage: image }))
    }



    render() {
        return (<><ul className={css.gallery}>{
            this.state.images.map(({largeImageURL, id, webformatURL, tags}) => (<ImageGalleryItem onClickModal={() => this.toggleModal(largeImageURL)} key={id} url={webformatURL}
                alt={tags} />))
        }</ul>
            {this.state.page !== this.state.totalPages && <Button onLoadMoreBtnClick={this.onLoadMoreBtnClick} />}
            {this.state.showModal && (<Modal onClose={this.toggleModal}>
                <img src={this.state.selectedImage} />
            </Modal>)}
        </>)
    }
}