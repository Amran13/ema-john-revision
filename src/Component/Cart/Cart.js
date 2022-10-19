import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let quantity = 0;
    let total = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
    }
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
                <h3>Order : {quantity} </h3>
                <h4>Price : ${total}</h4>
        </div>
    );
};

export default Cart;