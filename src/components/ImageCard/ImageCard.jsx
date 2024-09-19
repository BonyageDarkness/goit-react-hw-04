import PropTypes from 'prop-types';

const ImageCard = ({ image, onClick }) => {
    return (
        <li className="image-card" onClick={() => onClick(image)}>
            <img src={image.urls.small} alt={image.alt_description} />
        </li>
    );
};

ImageCard.propTypes = {
    image: PropTypes.shape({
        urls: PropTypes.shape({
            small: PropTypes.string.isRequired,
        }).isRequired,
        alt_description: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageCard;
