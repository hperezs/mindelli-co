import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import { Input, Icon } from "atomize";

const SearchBar = () => {

    const { searchProducts } = useContext(ShopContext)

    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchProducts(query)
        }
    }

        return (
            <Input
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                suffix={
                    <Icon
                        name="Search"
                        size="20px"
                        cursor="pointer"
                        onClick={() => searchProducts(query)}
                        pos="absolute"
                        top="50%"
                        right="1rem"
                        transform="translateY(-50%)"
                    />
                }
            />
        );
    }

    export default SearchBar;