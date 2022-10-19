import React, { useEffect, useState } from 'react';
import { addToDb, getStored, removeDb } from '../../ema-john-resources/utilities/fakedb';
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

    useEffect(()=> {
        const shoppingCart = getStored();
        // console.log(shoppingCart)
        const savedCart = [];
        for(const id in shoppingCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const newQuantiy = shoppingCart[id];
                addedProduct.quantity = newQuantiy;
                // console.log('added product',addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
        
    }
    const handleRemoveToCart = (product) => {
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