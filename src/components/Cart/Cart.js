import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "idle", amount: 2, price: 100 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.63</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--all']}>Close</button>
        <button className={classes.button}>order</button>
    </div>
  </Modal>;
};

export default Cart;
