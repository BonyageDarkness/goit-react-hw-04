import { useState } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query!');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <div className={styles['search-container']}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles['search-input']}
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
                <button type="submit" className={styles['search-button']}>
                    Search
                </button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
