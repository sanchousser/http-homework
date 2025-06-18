import { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import fetchImages from "services/getPixabayContent";

import css from './ImageGallery.module.css';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export const ImageGallery = ({ searchQuery }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const prevSearchQuery = usePrevious(searchQuery);
    const prevPage = usePrevious(page);

    useEffect(() => {
        if (!searchQuery) return;

        if (prevSearchQuery !== searchQuery || prevPage !== page) {
            setIsLoading(true);
            fetchImages(searchQuery, page)
                .then(data => {
                    if (!data.hits.length) {
                        setImages([]);
                        toast.error(`Sorry, ${searchQuery} not found`);
                        return;
                    }

                    if (prevSearchQuery !== searchQuery) {
                        setImages(data.hits); // Новый поиск — сбрасываем
                    } else {
                        setImages(prev => [...prev, ...data.hits]); // Пагинация
                    }

                    setTotalPages(Math.ceil(data.totalHits / 12));
                })
                .catch(err => setError(err))
                .finally(() => setIsLoading(false));
        }
    }, [searchQuery, page]);

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
