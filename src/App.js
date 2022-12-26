import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
function App() {
  const [cartIsVisible, setCartIsVisible ] = useState(false)
  
  const displayCartHandler = ()=>{
    setCartIsVisible(true)
  }
  const closeCartHanlder = ()=>{
    setCartIsVisible(false)
  }
  return (
   <>
    {cartIsVisible&&<Cart onCloseCart={closeCartHanlder}/>}
    <Header onDisplayCart={displayCartHandler}/>
    <main>
        <Meals/>
    </main>
     
    
   </>
  );
}

export default App;
