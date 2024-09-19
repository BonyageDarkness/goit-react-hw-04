import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles['image-gallery']}>
            {' '}
            {images.map(image => (
                <li
                    key={image.id}
                    className={styles['image-card']}
                    onClick={() => onImageClick(image)}
                >
                    <img src={image.urls.small} alt={image.alt_description} />
                </li>
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            urls: PropTypes.shape({
                small: PropTypes.string.isRequired,
            }).isRequired,
            alt_description: PropTypes.string,
        })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
