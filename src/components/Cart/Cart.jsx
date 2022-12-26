import classes from './Cart.module.css'
const Cart = props =>{
    const cartItems = <ul>{[{
        id: 'm1',
        name: 'Bolo no Pote sensação',
        description: 'Chocolate Cicao, morangos frescos',
        price: 18,
      }].map(item=><li>{item.name}</li>)}</ul> ;
    
    return(
        <div>
           { cartItems}
            <div></div>
            <div></div>
        </div>
    )
}

export default Cart;