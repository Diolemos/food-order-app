import { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = props=>{
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = event =>{
      
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount.trim().length ===0 || enteredAmountNumber < 1 || enteredAmountNumber > 50)
        {   setAmountIsValid(false)
            return}
            props.onAddToCart(enteredAmountNumber)
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef} 
        label="unidades" 
        input={{id:"amount" + props.id,
         type:"number",
          min:"0",
           max:"50",
            step:"1",
             defaultValue:"0"}}/>
            <button>+ Adicionar</button>
            {!amountIsValid && <p>Por favor, insira uma quantidade válida</p>}
        </form>
    )
}

export default MealItemForm