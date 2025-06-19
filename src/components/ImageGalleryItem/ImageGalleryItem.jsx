import css from './ImageGalleryItem.module.css'


function ImageGalleryItem({ url, alt, onClickModal }) {


    
    return (
        <li className={css.gallery__item}>
            <img onClick={onClickModal} className={css.gallery__img} src={url} alt={alt} />
        </li>
    );
}

export default ImageGalleryItem;