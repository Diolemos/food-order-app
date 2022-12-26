import CartContext from './Cart-context';
import Cartcontext from './Cart-context'
const CartProvider = props =>{
   const addItemToCartHandler = item=>{}
   const removeItemFromCartHandler = id=>{}
   
    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (<CartContext.provider value={CartContext}>{props.children}</CartContext.provider>)
};
export default CartProvider