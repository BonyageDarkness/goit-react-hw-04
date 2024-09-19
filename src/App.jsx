import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Используем состояние для ошибок
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    const ACCESS_KEY = 'clCEgKlMOdHSSP8fSe3mTIyf8mywjWfKMwmJ-w6uF3w';

    useEffect(() => {
        if (!query) return;

        const fetchImages = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos`,
                    {
                        params: {
                            query,
                            client_id: ACCESS_KEY,
                            page,
                            per_page: 12,
                        },
                    }
                );
                setImages(prevImages => [
                    ...prevImages,
                    ...response.data.results,
                ]);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError('Error fetching images. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query, page]);

    const handleSearch = newQuery => {
        setQuery(newQuery);
        setImages([]);
        setPage(1);
    };

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const openModal = image => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}{' '}
            {!error && (
                <>
                    <ImageGallery images={images} onImageClick={openModal} />
                    {loading && <Loader />}
                    {images.length > 0 && !loading && (
                        <LoadMoreBtn onClick={loadMore} />
                    )}
                    {selectedImage && (
                        <ImageModal
                            isOpen={!!selectedImage}
                            onRequestClose={closeModal}
                            image={selectedImage}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default App;
