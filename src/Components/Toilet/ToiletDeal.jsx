import React from 'react';
import ToiletCard from '../Toilet/ToiletCard'

const ToiletDeals = ({ productToilet, addToCart }) => {
    return (
        <div>
            <section className='flash'>
                <div className='container'>
                    <div className='heading f_flex'>
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h1>Toiletaries</h1>
                    </div>
                    <ToiletCard productToilet={productToilet} addToCart={addToCart} />
                </div>
            </section>
        </div>
    );
}

export default ToiletDeals;