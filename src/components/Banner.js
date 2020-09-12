import React from 'react';
import { Container, Div, Text } from 'atomize';
import { Carousel } from 'react-bootstrap';
import '@brainhubeu/react-carousel/lib/style.css';

const Banner = () => {
    return (
        <Container>
            <Carousel interval="4000">
                <Carousel.Item>
                    <Div
                        bgImg="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        bgSize="cover"
                        bgPos="center center"
                        h="40vh"
                        m={{ t: "2rem" }}
                        p="2rem"
                        d="flex"
                        flexDir="row"
                        justify="center"
                    >
                        <Div
                            m="2rem"
                            bg="rgba(0, 0, 0, 0.29)"
                            maxW="65%"
                        >
                            <Text
                                tag="h2"
                                textSize="heading"
                                textColor="white"
                                textWeight="300"
                                p="2rem"

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci. Praesent interdum pharetra quam eu pharetra.
                                </Text>
                        </Div>
                    </Div>
                </Carousel.Item>
                <Carousel.Item>
                    <Div
                        bgImg="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        bgSize="cover"
                        bgPos="center center"
                        h="40vh"
                        m={{ t: "2rem" }}
                        p="2rem"
                        d="flex"
                        flexDir="row"
                        justify="center"
                    >
                        <Div
                            m="2rem"
                            bg="rgba(0, 0, 0, 0.29)"
                            maxW="65%"
                            
                        >
                            <Text
                                tag="h2"
                                textSize="heading"
                                textColor="white"
                                textWeight="300"
                                p="2rem"

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci. Praesent interdum pharetra quam eu pharetra.
                                    </Text>
                        </Div>
                    </Div>
                </Carousel.Item>
            </Carousel>
        </Container>


    );
}

export default Banner;