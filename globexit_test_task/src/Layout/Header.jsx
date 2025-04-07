import React from "react";

const Header = () => {
    return(
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <input type="text" className="search-input" placeholder="Поиск..." />
        </div>
    )
}

export default Header;