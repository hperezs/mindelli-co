import React, { useState, useEffect, useContext } from 'react';
import { Dropdown, Div, Radiobox, Label } from "atomize";
import { ShopContext } from '../context/shopContext';

const PriceSorter = () => {
    const { updatePriceSorter } = useContext(ShopContext);

    const [state, setState] = useState({
        showDropdown: false,
    });

    const [sortBy, setSortBy] = useState({
        highToLow: false
    })

    useEffect(() => {
        updatePriceSorter(sortBy.highToLow);
    }, [sortBy.highToLow])

    const menuList = (
        <Div>
            <Label d="block" p={"0.5rem"}>
                <Radiobox
                    onChange={e => {
                        setSortBy({
                            highToLow: !sortBy.highToLow
                        })
                    }}
                    checked={!sortBy.highToLow}
                /> Low to High
            </Label>
            <Label d="block" p={"0.5rem"}>
                <Radiobox
                    onChange={e => {
                        setSortBy({
                            highToLow: !sortBy.highToLow
                        })
                    }}
                    checked={sortBy.highToLow}
                /> High to Low
            </Label>
        </Div>
    );

    return (
        <Dropdown
            isOpen={state.showDropdown}
            onClick={() =>
                setState({
                    ...state,
                    showDropdown: !state.showDropdown
                })
            }
            menu={menuList}
        >
            Sort by price
        </Dropdown>
    )
}

export default PriceSorter;