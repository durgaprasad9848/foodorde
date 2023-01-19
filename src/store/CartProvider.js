import CartContext from "./cart-context";
import React,{useState} from 'react';

const CartProvider = props => {
    const [items,updateItems] = useState([]);

    const addItemToCartHandler = item => {
       // items.push(item);
        updateItems([...items,item]);
       // console.log('inside addItemToCartHandler',cartContext);
      //  cartContext.items.push(item);
    };

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items: items,
    //    totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
     //   message: "i am accessible to any where",
    };

    return( <CartContext.Provider value = {cartContext} >
        {//console.log('Inside CartContext.Provider',cartContext)
        }
        {props.children}
    </CartContext.Provider>)
  
}

export default CartProvider;