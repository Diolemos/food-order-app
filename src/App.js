import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
function App() {
  const [cartIsVisible, setCartIsVisible ] = useState(false)
  
  return (
   <>
    {cartIsVisible&&<Cart/>}
    <Header/>
    <main>
        <Meals/>
    </main>
     
    
   </>
  );
}

export default App;
