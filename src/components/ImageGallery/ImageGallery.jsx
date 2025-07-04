import { useEffect, useState, useRef } from "react";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import fetchImages from "services/getPixabayContent";
import Loader from "components/Loader/Loader";

import css from './ImageGallery.module.css';



export const ImageGallery = ({ searchQuery }) => {


    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');



    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }

    const prevSearchQuery = usePrevious(searchQuery);
    const prevPage = usePrevious(page);



    useEffect(() => {
        if (!searchQuery) return;

        if (prevSearchQuery !== searchQuery || prevPage !== page) {
            setError(false)
            setIsLoading(true);
            fetchImages(searchQuery, page)
                .then(data => {
                    if (!data.hits.length) {
                        setImages([]);
                        setError(true)
                        

                        return;
                    }

                    if (prevSearchQuery !== searchQuery) {
                        setImages(data.hits);
                    } else {
                        setImages(prev => [...prev, ...data.hits]);
                    }

                    setTotalPages(Math.ceil(data.totalHits / 12));
                })
                .catch(error => setError(error))
                .finally(() => setIsLoading(false));
        }
    }, [searchQuery, page, prevSearchQuery, prevPage]);

    const onLoadMoreBtnClick = () => {
        setPage(prev => prev + 1);
    };

    const toggleModal = (image) => {
        setShowModal(prev => !prev);
        setSelectedImage(image);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {isLoading && <Loader />}
            {error && <h2>Oops, an error occured <br /> {searchQuery} did not found</h2>}

            <ul className={css.gallery}>
                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem
                        key={id}
                        url={webformatURL}
                        alt={tags}
                        onClickModal={() => toggleModal(largeImageURL)}
                    />
                ))}
            </ul>

            {page < totalPages && (
                <Button onLoadMoreBtnClick={onLoadMoreBtnClick} />
            )}

            {showModal && (
                <Modal onClose={toggleModal} closeModal={closeModal}>
                    <img src={selectedImage} alt="" />
                </Modal>
            )}
        </>
    );
};
