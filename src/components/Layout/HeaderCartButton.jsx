import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [buttonAnimation, setButtonAnimation] =  useState(false)
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const {items} = cartCtx
  const btnclasses = `${classes.button} ${buttonAnimation? classes.bump:''}`
  useEffect(()=>{
    if(items.length == 0){
        return
    }
    setButtonAnimation(true);
    const timer = setTimeout(()=>{setButtonAnimation(false)},300);

    return ()=>{
        clearTimeout(timer)
      }

},[items]);
 
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Carrinho</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;