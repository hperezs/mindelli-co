import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Loading } from '../components/Loading';
import { Container, Row, Col, Div, Text, Button } from 'atomize';

const ProductPage = () => {
    let { productId } = useParams();

    const { fetchProduct, product, productIsReady, addItemToCheckout } = useContext(ShopContext);

    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        fetchProduct(productId);
        return (() => {
            // for cleaning up
        });
    }, [productId])

    useEffect(() => {
        if (productIsReady) {
            changeSelectedImage(product.images[0].src)
        }
    }, [productIsReady])

    const changeSelectedImage = (clickedImage) => {
        setSelectedImage(clickedImage);
    }

    if (!productIsReady) return <Loading />

    return (
        <Container>
            <Row>
                <Col size={{ xs: "12", md: "1" }}>
                    <Div d={{xs: "flex"}} flexDir={{xs: "row", md: "column"}} justify={{xs: "space-between"}} m={{t: {xs: "1rem", md: "0"}}}>
                        {product.images.map(image => (
                            <Div
                                bgImg={image.src}
                                bgSize="cover"
                                bgPos="center center"
                                h="6rem"
                                m={{ t: { xs: "none", md: "2rem" } }}
                                onClick={() => changeSelectedImage(image.src)}
                                border={(selectedImage === image.src) ? '4px solid' : 'none'}
                                borderColor='brand500'
                                key={image.src}
                                w={{xs: "5rem", md:"auto"}}
                            >
                            </Div>
                        ))}
                    </Div>

                </Col>
                <Col size={{ xs: "12", md: "5" }}>
                    <Div
                        bgImg={selectedImage}
                        bgSize="cover"
                        bgPos="center center"
                        h={{xs: "40vh", md: "30rem"}}
                        m={{ t: "2rem" }}>
                    </Div>
                </Col>
                <Col size={{ xs: "12", md: "5" }}>
                    <Div
                        m={{
                            t: { xs: "1rem", md: "2rem" },
                            l: { xs: "none", md: "1rem" }
                        }}
                    >
                        <Text tag="h3" textSize="heading" textWeight="400" textColor="black500">{product.title}</Text>
                        <Text tag="h5" textSize="title" textWeight="300" textColor="black400">${product.variants[0].price}</Text>

                        <Text tag="p" textSize="subheader" m={{ t: {xs: "1rem", md: "4rem"}, b: "2rem" }}>{product.description}</Text>
                        <Button bg="brand600" rounded="xs" onClick={() => addItemToCheckout(product.variants[0].id)} m={{b: "2rem"}}>
                            Add to cart
                        </Button>
                    </Div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductPage;