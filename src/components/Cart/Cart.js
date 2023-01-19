import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React,{useContext} from 'react';
import CartCntxt from'../../store/cart-context';

const Cart = (props) => {
  const cartcntx = useContext(CartCntxt);

  const cartItems = (
    <ul>
      {cartcntx.items.map((item) => (
        <li>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose = {props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--all"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
