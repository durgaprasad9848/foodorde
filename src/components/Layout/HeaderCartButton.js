import React, {useContext} from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity =0;
  cartCtx.items.forEach((item => {
    console.log(item);
    quantity = quantity + Number(item.quantity);
    
  }))

  // const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
  //   return curNumber + item.amount;
  // },0);


    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
          {console.log(cartCtx.message)}
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
    );
  };
  
  export default HeaderCartButton;  