import React, { useContext, useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { Container, Row, Div, Col } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductList = () => {
    const { filteredProducts } = useContext(ShopContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([]);
    }, [filteredProducts]);

    useEffect(() => {
        setProducts(filteredProducts);
    }, [products])

    let animation_delay = 0;

    return (
        <Container minH="100rem">
            <Div m={{ t: "2rem" }}>
                <Row>
                    <Col size="4">
                        <CategoryFilter />
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