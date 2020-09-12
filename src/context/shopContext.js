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
        productIsReady: false,
        isCartOpen: false
    })

    const [checkoutState, setCheckoutState] = useState({
        checkout: {}
    });

    useEffect(() => {
        localStorage.checkout ? fetchCheckout(localStorage.checkout) : createCheckout();
    }, [])

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
            products: shopState.products,
            fetchProduct: fetchProduct,
            product: shopState.product,
            productIsReady: shopState.productIsReady,
            isCartOpen: shopState.isCartOpen,
            openCart: openCart,
            closeCart: closeCart,
            addItemToCheckout: addItemToCheckout,
            removeItemFromCheckout: removeItemFromCheckout,
            fetchCheckout: fetchCheckout,
            checkout: checkoutState.checkout
        }}>
            {children}
        </ShopContext.Provider>
    );
}

