import React from 'react';
import {IoIosSearch} from "react-icons/io";

const SearchBar = () => {
    return (
        <div className="searchbar">
            <IoIosSearch style={{cursor: "pointer"}}/>
            <input type="text" name="search" id="search"
                   placeholder="Explore here"/>
        </div>
    );
};

export default SearchBar;