import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { SideDrawer, Div, Text, Icon, Button, Anchor, Row, Col } from 'atomize';

const Cart = () => {
    const { isCartOpen, closeCart, checkout, removeItemFromCheckout } = useContext(ShopContext)

    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            <Div
                d="flex"
                flexDir="row"
                justify="space-between"
                m={{ b: "2rem" }}
                border={{ b: "1px solid" }}
                borderColor="gray500"
            >
                <Text textSize="subheader" textWeight="500" textColor="black600" m={{ l: "1rem" }}>
                    Cart
            </Text>
                <Anchor onClick={closeCart}>
                    <Icon name="Cross" color="black" size="25px" />
                </Anchor>
            </Div>
            <Div d="flex" flexDir="column">

                {checkout.lineItems === undefined ?
                    <Text>Cart is empty</Text>
                    :
                    checkout.lineItems.length === 0 ?
                        <Text textColor="gray700" m={{l: "2rem", b: "2rem"}}>Your cart is currently empty.</Text>
                    :
                    checkout.lineItems.map(lineItem => (
                        <Row p="1rem">
                    <Col size="3">
                        <Div
                            h="4rem"
                            bgImg={lineItem.variant.image.src}
                            bgSize="cover"
                            bgPos="center center"
                        >
                        </Div>
                    </Col>
                    <Col size="6">
                        <Text>{lineItem.title}</Text>
                    </Col>
                    <Col size="2">
                        <Text>${lineItem.variant.price}</Text>
                    </Col>
                    <Col size="1">
                        <Anchor onClick={() => removeItemFromCheckout(lineItem.id)}> <Icon name="Cross" color="red" size="20px" /> </Anchor>
                    </Col>
                </Row>
                    ))
                }
            </Div>
            <Div
                d="flex"
                flexDir="row"
                justify="space-between"
                border={{ t: "1px solid" }}
                borderColor="black500"
                p="1rem"
            >
                <Text textWeight="500" textColor="black600" >Subtotal</Text>
                <Text>${checkout.subtotalPrice}</Text>
            </Div>
            <Div d="flex" justify="flex-end">
                <Anchor href={checkout.webUrl} target="_blank" style={{ textDecoration: 'none' }} >
                    <Button bg="brand600" rounded="xs">
                        Checkout
                    </Button>
                </Anchor>
            </Div>
        </SideDrawer>
    );
}

export default Cart;