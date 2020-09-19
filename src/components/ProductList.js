import React, { useContext, useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import CategoryFilter from './CategoryFilter';
import PriceSorter from './PriceSorter'
import { Container, Row, Div, Col } from 'atomize';
import { ShopContext } from '../context/shopContext';
import SearchBar from './SearchBar';

const ProductList = () => {
    const { sortedProducts } = useContext(ShopContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([]);
    }, [sortedProducts]);

    useEffect(() => {
        setProducts(sortedProducts);
    }, [products])

    let animation_delay = 0;

    return (
        <Container minH="100rem">
            <Div m={{ t: "2rem" }}>
                <Row justify="center">
                    <Col size={{ xs: "12", md: "3" }}>
                        <Div m={{b: {xs: "1rem", md: "0rem"}}}>
                            <SearchBar />
                        </Div>
                    </Col>
                    <Col size={{ xs: "12", md: "3" }}>
                        <Div m={{b: {xs: "1rem", md: "0rem"}}}>
                            <CategoryFilter />
                        </Div>
                    </Col>
                    <Col size={{ xs: "12", md: "3" }}>
                        <Div m={{b: {xs: "1rem", md: "0rem"}}}>
                            <PriceSorter />
                        </Div>
                    </Col>
                </Row>
                <Row>
                    {products.map((product) => {
                        animation_delay = animation_delay + 0.15;
                        return (
                            <ProductCard title={product.title} productImage={product.images[0]} key={product.id} id={product.id} price={product.variants[0].price} delay={animation_delay} />
                        )
                    })}
                </Row>
            </Div>
        </Container>
    );
}

export default ProductList;