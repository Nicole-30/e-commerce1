import React from 'react';
import Head from '../headers/Head';
import './Header.css'
import Search from '../headers/Search';
import Navbar from '../headers/Navbar';

const Header = ({CartItem}) => {
  return (
    <div>
      <Head/>
      <Search CartItem={CartItem}/>
      <Navbar/>
    </div>
  );
}

export default Header;
