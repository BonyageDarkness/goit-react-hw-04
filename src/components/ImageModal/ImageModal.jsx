import PropTypes from 'prop-types';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <button onClick={onRequestClose}>Close</button>
            <img src={image.urls.regular} alt={image.alt_description} />
        </div>
    );
};

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    image: PropTypes.shape({
        urls: PropTypes.shape({
            regular: PropTypes.string.isRequired,
        }).isRequired,
        alt_description: PropTypes.string,
    }).isRequired,
};

export default ImageModal;
