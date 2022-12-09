import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({searchValue, setSearchValue, onSearch}) => {
    
    const filter = (event) => {
        setSearchValue(event.target.value);
        onSearch(event.target.value);
    };
    return (
        <div className='search__container'>
            <div className='search__logo__container'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
                placeholder='Search a title...'
                onChange={filter}
                className='search__input'
                value={searchValue} />
        </div>
    );    
};

export { SearchBar };