import React, { useContext, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { ShopContext } from '../context/shopContext';
import Banner from '../components/Banner';

const HomePage = () => {
    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts();
        return (() => {
            // for cleaning up
        })
    }, []);

    return (
        <>
            <Banner />
            <ProductList products={products} />
        </>
    );
}

export default HomePage;