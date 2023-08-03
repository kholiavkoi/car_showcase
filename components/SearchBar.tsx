'use client'
import React, { useState } from 'react';
import { SearchManufacturer } from "@/components/index";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const handleSearch = () => {
    }
    
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            </div>
        </form>
    );
};

export default SearchBar;