import React from 'react';
import NewBabyCard from '../BabyItems/Newbabycard';

const Newbabydeals = ({ productBabies, addToCart }) => {
    return (
        <div>
            <section className='flash'>
                <div className='container'>
                    <div className='heading f_flex'>
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h1>Baby Items</h1>
                    </div>
                    <NewBabyCard productBabies={productBabies} addToCart={addToCart} />
                </div>
            </section>
        </div>
    );
}

export default Newbabydeals;
