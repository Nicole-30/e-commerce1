
import './App.css';
import Header from './Common/headers/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from './Pages/Pages';
// import Home from './Components/mainpage/Home';
import Data from './Components/Groceries/Data';
import { useState } from 'react';
import Cart from './Common/Cart/Cart';
import Sdata from './Components/mainpage/Sdata';
import Tdata from './Components/Toilet/Tdata';


function App() {

  const { productItems } = Data
  const { shopItems } = Sdata
  const {productToilet}=Tdata
  console.log(productToilet);


  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (

    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
         
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
    // <div>

    //   <Router>
    //     <Header cartItem={cartItem} />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<Pages productItems={productItems} addToCart={addToCart} cartItem={cartItem} />} />
    //       <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} />} />
    //       {/* <Route path="/contact" element={<Contact />} /> */}
    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
