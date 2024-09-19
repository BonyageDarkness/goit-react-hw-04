import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
    return (
        <li className={styles['image-card']}>
            <img
                src={image.urls.small}
                alt={image.alt_description}
                onClick={() => onImageClick(image)}
                className={styles['image']}
            />
        </li>
    );
};

ImageCard.propTypes = {
    image: PropTypes.shape({
        urls: PropTypes.shape({
            small: PropTypes.string.isRequired,
        }),
        alt_description: PropTypes.string,
    }).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;
