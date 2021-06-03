import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div className="row center">
            <div className="logo">
                <a href=""><img src="images/logo-3.png" alt="logoOfRoyalium" /></a>
            </div>
            <div>
                <a className="brand" href="index.html">Royalium</a>
            </div>

        </div>
       
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>

      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>

    <footer className="row center">
        All right reserved
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
