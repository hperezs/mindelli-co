import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Container, Text, Icon, Anchor } from 'atomize';

const Nav = () => {
    const { openCart } = useContext(ShopContext);

    return (
        <Container d="flex" flexDir="row" justify="space-between" align="center" p={{ xs: "1rem", md: "2rem" }} border={{ b: "1px solid" }} borderColor="gray500">
            <Link to="/mindelli-co">
                <Icon name="HomeSolid" size={{xs: "1.5rem", md: "2.5em"}} color="brand600" />
            </Link>
            <Text tag="h1" textSize={{xs: "heading", md:"display2"}} textWeight="300">mindelli & co.</Text>
            <Anchor onClick={() => openCart()}>
                <Icon name="Bag" size={{xs: "1.5rem", md: "2.5em"}} color="brand600" />
            </Anchor>
        </Container>

    );
}

export default Nav;