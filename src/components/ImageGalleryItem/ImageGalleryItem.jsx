import css from './ImageGalleryItem.module.css'


function ImageGalleryItem({ url, alt }) {
    return (
        <li className={css.gallery__item}>
            <img className={css.gallery__img} src={url} alt={alt} />
        </li>
    );
    ;
}

export default ImageGalleryItem;