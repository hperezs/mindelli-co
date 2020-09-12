import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Div, Text } from 'atomize';
import styled from 'styled-components';

const ProductWrapper = styled.div`
    &:hover{
        transform: scale(1.07, 1.07);
    }
    transition: 0.3s ease;
`;


export const ProductCard = ({ title, productImage, id, price }) => {
    return (
        <Col size="3">
            <Link to={`/mindelli-co/product/${id}`} style={{ textDecoration: 'none' }}>
                <Div
                    p="2rem"
                >
                    <ProductWrapper>
                        <Div
                            border="1px solid"
                            borderColor="gray300"
                            shadow="3"
                            hoverShadow="4"
                            transition="0.3s"
                        >
                            <Div
                                h="20rem"
                                m={{ b: "0.5rem" }}
                                bgImg={productImage.src}
                                bgSize="cover"
                                bgPos="center center"
                            >
                            </Div>
                            <Div
                                m={{ l: "0.5rem", b: "0.5rem" }}
                            >
                                <Text tag="h3" textWeight="400" textSize="subheader" textColor="black600">{title}</Text>
                                <Text tag="h5" textWeight="400" textSize="body" textColor="gray700">${price}</Text>
                            </Div>
                        </Div>
                    </ProductWrapper>
                </Div>
            </Link>

        </Col>

    );
};