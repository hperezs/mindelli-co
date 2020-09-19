import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Div, Text } from 'atomize';
import styled from 'styled-components';
import './animations.css';

export const ProductCard = ({ title, productImage, id, price, delay }) => {

    const ProductWrapper = styled.div`
    &:hover{
        transform: scale(1.07, 1.07);
    }
    transition: all 0.3s ease;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-delay: ${delay}s;
    animation-fill-mode: backwards;
`;

    return (
        <Col size={{ xs: "6", md: "3" }}>
            <Link to={`/mindelli-co/product/${id}`} style={{ textDecoration: 'none' }}>
                <Div
                    p={{ xs: "0.5rem", md: "2rem" }}
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
                                h={{ xs: "12rem", md: "20rem" }}
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