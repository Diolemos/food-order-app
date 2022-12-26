import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = props =>{
    const cartCtx = useContext(CartContext)
   const totalAmount =` R$${cartCtx.totalAmount.toFixed()}`
   const hasItems = cartCtx.items.length > 0
    const cartItemRemoveHandler = id =>{}
    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item,amount:1})
    }
    
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item=><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null,item)}  />)}</ul> ;
    
    return(
        <Modal onCloseCart={props.onCloseCart}>
           { cartItems}
            <div className={classes.total} ><span>Valor Total</span>
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