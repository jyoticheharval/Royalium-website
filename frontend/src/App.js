import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
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
       <div className="row center">
         { data.product.map(product => 
            <Product key={product._id} product = {product}></Product>

        )
        }
           
        </div>
      </main>

    <footer className="row center">
        All right reserved
    </footer>
  </div>
  );
}

export default App;
