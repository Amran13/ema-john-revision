//use localstorage for your database for now..

let shoppingCart = {};
const addToDb = id => {
    const exists = localStorage.getItem('shopping-cart')
    if(exists){
        shoppingCart = JSON.parse(exists); //string to object
        if(shoppingCart[id]){
            shoppingCart[id] = shoppingCart[id] + 1;
        }
        else{
            shoppingCart[id] = 1;
        }
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
}

const getStored = () => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeDb = (id) => {
    const exists = localStorage.getItem('shopping-cart');
    if(exists){
        shoppingCart = JSON.parse(exists);
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
}
export {addToDb, getStored, removeDb}
