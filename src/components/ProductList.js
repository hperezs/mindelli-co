import React from 'react';
import { ProductCard } from './ProductCard';
import { Container, Row, Div} from 'atomize';

const ProductList = ({ products }) => {
    return (
        <Container>
            <Div >
                <Row>
                    {products.map((product) => (
                        <ProductCard title={product.title} productImage={product.images[0]} key={product.id} id={product.id} price={product.variants[0].price} />
                    ))}
                </Row>
            </Div>
        </Container>
    );
}

export default ProductList;