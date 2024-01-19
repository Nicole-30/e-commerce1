import React from 'react';
import Grocerycard from './Grocerycard';

const Grocerydeals = ({ productItems, addToCart }) => {
    return (
        <div>
            <section className='flash'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <i className='fa fa-bolt'></i>
                        <h1>Groceries</h1>
                    </div>
                    <Grocerycard productItems={productItems} addToCart={addToCart} />
                </div>
            </section>
        </div>
    );
}

export default Grocerydeals;
