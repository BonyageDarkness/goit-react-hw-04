import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css'; // Подключаем стили

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            return;
        }
        onSubmit(query);
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
