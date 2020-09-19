import React, { useState, createContext, useEffect } from 'react';
import Client from 'shopify-buy';
import { staticComposeDeep } from 'styletron-react';

require('dotenv').config();

export const ShopContext = createContext();

const client = Client.buildClient({
    domain: 'mindelli-co.myshopify.com',
    storefrontAccessToken: '3dda150cada0b74961f6d8b150e2f041'
});

export const ShopProvider = ({ children }) => {

    const [shopState, setShopState] = useState({
        products: [],
        product: {},
        filteredProducts: [],
        productIsReady: false,
        isCartOpen: false,
        filteredProducts: []
    })

    const [checkoutState, setCheckoutState] = useState({
        checkout: {}
    });

    const [categoryFilters, setCategoryFilters] = useState({});

    // FOR DEBUGGING / DEVELOPMENT
    useEffect(() => {
        console.log(shopState);
        console.log(categoryFilters);
    }, [shopState, categoryFilters])

    useEffect(() => {
        localStorage.checkout ? fetchCheckout(localStorage.checkout) : createCheckout();
    }, [])

    useEffect(() => {
        if (shopState.products.length != 0) {
            if (!categoryFilters.skirtsAreChecked && !categoryFilters.topsAreChecked && !categoryFilters.bottomsAreChecked && !categoryFilters.dressesAreChecked) {
                setShopState({
                    ...shopState,
                    filteredProducts: shopState.products
                });
            } else {
                let productsToFilter = shopState.products;

                let filteredSkirts = [];
                let filteredTops = [];
                let filteredBottoms = [];
                let filteredDresses = [];

                if (categoryFilters.skirtsAreChecked) {
                    filteredSkirts = productsToFilter.filter(product => product.productType === 'Skirt');
                }

                if (categoryFilters.topsAreChecked) {
                    filteredTops = productsToFilter.filter(product => product.productType === 'Top');
                }

                if (categoryFilters.bottomsAreChecked) {
                    filteredBottoms = productsToFilter.filter(product => product.productType === 'Bottom');
                }

                if (categoryFilters.dressesAreChecked) {
                    filteredDresses = productsToFilter.filter(product => product.productType === 'Dress')
                }

                let newFilteredProductList = filteredSkirts.concat(filteredTops).concat(filteredBottoms).concat(filteredDresses);

                setShopState({
                    ...shopState,
                    filteredProducts: newFilteredProductList
                });
            }
        }
    }, [shopState.products, categoryFilters])

    const updateCategoryFilters = (filters) => {
        setCategoryFilters(filters)
    }

    const createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout", checkout.id);
        setCheckoutState({
            checkout: checkout
        });
    }

    const fetchCheckout = async (checkoutId) => {
        const fetchedCheckout = await client.checkout.fetch(checkoutId);
        setCheckoutState({
            checkout: fetchedCheckout,
        });
    }

    const addItemToCheckout = async (variantId) => {
        const itemsToAdd = [
            {
                variantId: variantId,
                quantity: 1
            }
        ];

        const newCheckout = await client.checkout.addLineItems(checkoutState.checkout.id, itemsToAdd);
        setCheckoutState({
            checkout: newCheckout
        });
        openCart();
    }

    const removeItemFromCheckout = async (variantId) => {
        const itemToRemove = [
            variantId
        ];

        const newCheckout = await client.checkout.removeLineItems(checkoutState.checkout.id, itemToRemove);
        setCheckoutState({
            checkout: newCheckout
        });
    }

    const fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        setShopState({
            ...shopState,
            products: products
        });
    }

    const fetchProduct = async (productId) => {
        setShopState({
            ...shopState,
            productIsReady: false
        })
        const product = await client.product.fetch(productId);
        setShopState({
            ...shopState,
            product: product,
            productIsReady: true
        });
    }

    const openCart = () => {
        setShopState({
            ...shopState,
            isCartOpen: true
        })
    }

    const closeCart = () => {
        setShopState({
            ...shopState,
            isCartOpen: false
        })
    }

    return (
        <ShopContext.Provider value={{
            ...shopState,
            fetchAllProducts: fetchAllProducts,
            filteredProducts: shopState.filteredProducts,
            fetchProduct: fetchProduct,
            product: shopState.product,
            productIsReady: shopState.productIsReady,
            isCartOpen: shopState.isCartOpen,
            openCart: openCart,
            closeCart: closeCart,
            addItemToCheckout: addItemToCheckout,
            removeItemFromCheckout: removeItemFromCheckout,
            fetchCheckout: fetchCheckout,
            checkout: checkoutState.checkout,
            updateCategoryFilters: updateCategoryFilters
        }}>
            {children}
        </ShopContext.Provider>
    );
}

