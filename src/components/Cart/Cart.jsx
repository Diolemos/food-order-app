import Modal from '../UI/Modal';
import classes from './Cart.module.css'
const Cart = props =>{
    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'm1',
        name: 'Bolo no Pote sensação',
        description: 'Chocolate Cicao, morangos frescos',
        price: 18,
      }].map(item=><li>{item.name}</li>)}</ul> ;
    
    return(
        <Modal>
           { cartItems}
            <div className={classes.total} ><span>Total Amount</span>
                <span>27.5</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Fechar</button>
                <button className={classes.button}>Pedir</button>
            </div>
        </Modal>
    )
}

export default Cart;