import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const Cart = props =>{
    const cartCtx = useContext(CartContext)
   const totalAmount =` R$${cartCtx.totalAmount.toFixed()}`
   const hasItems = cartCtx.items.length > 0
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item=><li>{item.name}</li>)}</ul> ;
    
    return(
        <Modal onCloseCart={props.onCloseCart}>
           { cartItems}
            <div className={classes.total} ><span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCloseCart} className={classes['button--alt']}>Fechar</button>
              {hasItems &&  <button  className={classes.button}>Pedir</button>}
            </div>
        </Modal>
    )
}

export default Cart;