import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import css from './ImageGallery.module.css'

export const ImageGallery = ({ pictures }) => {
    return (<ul className={css.gallery}>{
        pictures.map(picture => (<ImageGalleryItem key={picture.id} url={picture.webformatURL}
            alt={picture.tags} />))
    }</ul>)
}