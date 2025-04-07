import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ searchTerm, onSearchChange }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Поиск..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)} // Обработчик изменения
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
        </div>
    );
}

export default Header;