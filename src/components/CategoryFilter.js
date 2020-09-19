import React, { useState, useEffect, useContext } from 'react';
import { Dropdown, Div, Checkbox, Label } from "atomize";
import { ShopContext } from '../context/shopContext';

const CategoryFilter = () => {
    const { updateCategoryFilters } = useContext(ShopContext);

    const [state, setState] = useState({
        showDropdown: false,
    });

    const [categoryFilters, setCategoryFilters] = useState({
        skirtsAreChecked: false,
        topsAreChecked: false,
        bottomsAreChecked: false,
        dressesAreChecked: false
    })

    useEffect(() => {
        updateCategoryFilters(categoryFilters);
    }, [categoryFilters])

    const menuList = (
        <Div>
            <Label d="block" p={"0.5rem"}>
                <Checkbox
                    onChange={e => {
                        setCategoryFilters({
                            ...categoryFilters,
                            skirtsAreChecked: e.target.checked
                        })
                    }}
                    checked={categoryFilters.skirtsAreChecked}
                /> Skirts
            </Label>
            <Label d="block" p={"0.5rem"}>
                <Checkbox
                    onChange={e => {
                        setCategoryFilters({
                            ...categoryFilters,
                            topsAreChecked: e.target.checked
                        })
                    }}
                    checked={categoryFilters.topsAreChecked}
                /> Tops
            </Label>
            <Label d="block" p={"0.5rem"}>
                <Checkbox
                    onChange={e => {
                        setCategoryFilters({
                            ...categoryFilters,
                            bottomsAreChecked: e.target.checked
                        })
                    }}
                    checked={categoryFilters.bottomsAreChecked}
                /> Bottoms
            </Label>
            <Label d="block" p={"0.5rem"}>
                <Checkbox
                    onChange={e => {
                        setCategoryFilters({
                            ...categoryFilters,
                            dressesAreChecked: e.target.checked
                        })
                    }}
                    checked={categoryFilters.dressesAreChecked}
                /> Dresses
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
            Filter
        </Dropdown>
    )
}

export default CategoryFilter;