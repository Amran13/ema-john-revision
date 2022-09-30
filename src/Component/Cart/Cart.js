import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
            <h2>Order Summery</h2>
                <h3>Order : {props.cart.length} </h3>
                <h4>Price : ${total}</h4>
        </div>
    );
};

export default Cart;