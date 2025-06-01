import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = (pictures) => {
    <ul>{
            pictures.map(picture => {
                <ImageGalleryItem key={picture.id}/>
            })
        }</ul>
}