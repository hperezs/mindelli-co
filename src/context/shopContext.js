import React, { useState, createContext, useEffect } from 'react';
import Client from 'shopify-buy';

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
        sortedProducts: [],
        queriedProducts: [],
        productIsReady: false,
    })

    const [cartState, setCartState] = useState({
        isCartOpen: false
    })

    const [checkoutState, setCheckoutState] = useState({
        checkout: {}
    });

    const [categoryFilters, setCategoryFilters] = useState({});

    const [priceSorter, setPriceSorter] = useState({
        highToLow: false
    });

    const [query, setQuery] = useState('')

    // FOR DEBUGGING / DEVELOPMENT
    useEffect(() => {
        console.log(shopState);
        console.log(categoryFilters);
    }, [shopState, categoryFilters])

    /*
        Generate a new checkout if there isn't one
    */
    useEffect(() => {
        localStorage.checkout ? fetchCheckout(localStorage.checkout) : createCheckout();
    }, [])

    /* 
        Filter product list whenever the filters change
    */
    useEffect(() => {
        if (shopState.products.length !== 0) {
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

    /*
        Sort Products by price whenever the sort selection changes
    */
    useEffect(() => {
        if (shopState.filteredProducts.length !== 0) {
            if (priceSorter.highToLow) {
                const sortedProducts = shopState.filteredProducts.sort((a, b) => (parseInt(a.variants[0].price) < parseInt(b.variants[0].price)) ? 1 : -1);
                setShopState({
                    ...shopState,
                    sortedProducts: sortedProducts
                });
            } else {
                const sortedProducts = shopState.filteredProducts.sort((a, b) => (parseInt(a.variants[0].price) > parseInt(b.variants[0].price)) ? 1 : -1);
                setShopState({
                    ...shopState,
                    sortedProducts: sortedProducts
                });
            }
        } else {

        }
    }, [shopState.filteredProducts, priceSorter]);

    /*
        Search for products whenever the query chagnes
    */
    useEffect(() => {
        if (shopState.sortedProducts.length !== 0) {
            if (query !== '') {
                const newQueriedProducts = shopState.sortedProducts.filter(product => product.title.toLowerCase().includes(query));
                setShopState({
                    ...shopState,
                    queriedProducts: newQueriedProducts
                })
            } else {
                setShopState({
                    ...shopState,
                    queriedProducts: shopState.sortedProducts
                })
            }
        }
    }, [shopState.sortedProducts, query])

    const searchProducts = (query) => {
        setQuery(query);
    }

    const updateCategoryFilters = (filters) => {
        setCategoryFilters(filters)
    }

    const updatePriceSorter = (highToLow) => {
        setPriceSorter({
            highToLow: highToLow
        })
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
        setCartState({
            isCartOpen: true
        })
    }

    const closeCart = () => {
        setCartState({
            isCartOpen: false
        })
    }

    return (
        <ShopContext.Provider value={{
            ...shopState,
            fetchAllProducts: fetchAllProducts,
            queriedProducts: shopState.queriedProducts,
            fetchProduct: fetchProduct,
            product: shopState.product,
            productIsReady: shopState.productIsReady,
            isCartOpen: cartState.isCartOpen,
            openCart: openCart,
            closeCart: closeCart,
            addItemToCheckout: addItemToCheckout,
            removeItemFromCheckout: removeItemFromCheckout,
            fetchCheckout: fetchCheckout,
            checkout: checkoutState.checkout,
            updateCategoryFilters: updateCategoryFilters,
            updatePriceSorter: updatePriceSorter,
            searchProducts: searchProducts
        }}>
            {children}
        </ShopContext.Provider>
    );
}

