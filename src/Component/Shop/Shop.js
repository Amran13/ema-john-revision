import React, { useEffect, useState } from 'react';
import { addToDb, removeDb } from '../../ema-john-resources/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        
    }
    const handleRemoveToCart = (product) => {
        // const newCart = [...cart , product];
        // setCart(newCart);
        removeDb(product.id)
    }
    return (
        <div className='products'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} handleRemoveToCart={handleRemoveToCart} 
                        handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;