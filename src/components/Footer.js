import React from 'react';
import { Container, Text } from 'atomize';

const Footer = () => {
    return (
        <Container minH="15rem" border={{t: "1px solid"}} borderColor="gray400">
            <Text m="2rem">Mindelli & Co 2020 &copy;</Text>
        </Container>
    );
}

export default Footer;