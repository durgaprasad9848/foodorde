import React, {useContext} from 'react';
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartCntx from '../../../store/cart-context';





const MealItemForm = (props) => {
  const cartcntx = useContext(CartCntx);
  const addItemToCart = (event) =>{
    event.preventDefault();

    cartcntx.addItem(props.item);
  

    // cartcntx.items.push(props.item);
    // console.log(cartcntx.items);
    const quantity = document.getElementById('amount_' +props.id).value;
    console.log(quantity);
    cartcntx.addItem({...props.item, quantity:quantity});

    console.log('after addItemToCart',cartcntx)

  }

  return (
    <form className={classes.form}>
      <Input label ="Amout" input={{
        id: 'amount_' +props.id,
        type : 'number',
        min : '1',
        max : '5',
        step: '1',
        defaultValue: '1'
      }} />
        <button onClick={addItemToCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
