import PropTypes from 'prop-types';
import './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className="loadMoreContainer">
            <button onClick={onClick} className="loadMoreButton">
                Load more
            </button>
        </div>
    );
};

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
