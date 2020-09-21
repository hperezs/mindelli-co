import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ShopProvider } from './context/shopContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
    return (
        <ShopProvider>
            <Router>
                <Nav />
                <Cart />
                <Switch>
                    <Route exact path='/mindelli-co'>
                        <HomePage />
                    </Route>
                    <Route path='/mindelli-co/product/:productId'>
                        <ProductPage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </ShopProvider>
    );
}

export default App;
