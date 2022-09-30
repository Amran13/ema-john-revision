import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name, img, price, stock, seller} = props.product;
    return (
        <div className='product-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h2>{name}</h2>
                <p>By {seller}</p>
                <h4>${price}</h4>
                <h5>Only {stock} left. Order soon</h5>
                <button onClick={() => props.handleAddToCart(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; &nbsp;Add to cart</button>
            </div>
        </div>
    );
};

export default Product;