import React from 'react';
import { Container, Div, Text } from 'atomize';
import { Carousel } from 'react-bootstrap';
import '@brainhubeu/react-carousel/lib/style.css';

const Banner = () => {
    return (
        <Container >
            <Carousel interval="5000" controls={false}>
                <Carousel.Item>
                    <Div 
                        bgImg="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        bgSize="cover"
                        bgPos="center center"
                        h={{xs: "15rem", md: "25rem"}}
                        m={{ t: "2rem" }}
                        p={{xs: "0.5rem",md: "2rem"}}
                        d="flex"
                        flexDir="row"
                        justify="center"
                    >
                        <Div
                            m="2rem"
                            bg="rgba(0, 0, 0, 0.29)"
                            maxW={{xs: "90%", md:"65%"}}
                        >
                            <Text
                                tag="h2"
                                textSize={{xs: "subheader", md: "heading"}}
                                textColor="white"
                                textWeight="300"
                                p={{xs: "1rem", md: "2rem"}}

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam.
                                </Text>
                        </Div>
                    </Div>
                </Carousel.Item>
                <Carousel.Item>
                    <Div
                        bgImg="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        bgSize="cover"
                        bgPos="center center"
                        h={{xs: "15rem", md: "25rem"}}
                        m={{ t: "2rem" }}
                        p={{xs: "0.5rem",md: "2rem"}}
                        d="flex"
                        flexDir="row"
                        justify="center"
                    >
                        <Div
                            m="2rem"
                            bg="rgba(0, 0, 0, 0.29)"
                            maxW={{xs: "90%", md:"65%"}}
                            
                        >
                            <Text
                                tag="h2"
                                textSize={{xs: "subheader", md: "heading"}}
                                textColor="white"
                                textWeight="300"
                                p={{xs: "1rem", md: "2rem"}}

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam.
                                    </Text>
                        </Div>
                    </Div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Banner;