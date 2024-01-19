import React from 'react';
import Home from '../Components/mainpage/Home'
import Grocerydeals from '../Components/Groceries/Grocerydeals';
import TopCate from '../Components/Top/TopCate';
import Newbabydeals from '../Components/BabyItems/Newbabydeals';
import ToiletDeals from '../Components/Toilet/ToiletDeal';

const Pages = ({ productItems, addToCart, CartItem, productBabies,productToilet }) => {
  return (
    <div>

      <Home CartItem={CartItem} />
      <Grocerydeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <Newbabydeals productBabies={productBabies} addToCart={addToCart} />
      <ToiletDeals productToilet={productToilet} addToCart={addToCart}/>

    </div>
  );
}

export default Pages;
